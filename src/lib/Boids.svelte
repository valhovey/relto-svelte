<script lang="ts">
  import { onMount } from "svelte";

  type Vector = [number, number];

  interface Boid {
    pos: Vector;
    dS: Vector;
    d2S: Vector;
    activation: number;
  }

  interface Color {
    r: number;
    g: number;
    b: number;
  }

  const gruvboxDarkBlue: Color = {
    r: 63,
    g: 66,
    b: 65,
  };

  const activationLight: Color = {
    r: 150,
    g: 200,
    b: 255,
  };

  onMount(() => {
    const canvas = <HTMLCanvasElement>document.getElementById("boids-canvas");
    const context = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const draw = (boid: Boid) => {
      if (context === null) {
        return;
      }

      const [x, y] = boid.pos;
      const [dx, dy] = boid.dS;

      const angle = Math.atan2(dy, dx);
      context.save();
      context.translate(x, y);
      context.rotate(angle);

      // Draw a little arrow
      context.beginPath();
      context.moveTo(10, 0);
      context.lineTo(-10, 5);
      context.lineTo(-10, -5);
      context.closePath();
      context.fillStyle = asColorString(colorFor(boid));
      context.fill();

      context.restore();
    };

    const maxSpeed = 1.0;
    const radius = 200;
    const separationStrength = 0.5;
    const alignmentStrength = 2;
    const cohesionStrength = 0.4;
    const maxForce = 0.001;
    const neuralDamp = 0.95;
    const quiescence = 1e-6;
    const randomFireRate = 1e-3;
    const activationPotential = 0.01;

    const add = ([x, y]: Vector, [u, v]: Vector): Vector => [x + u, y + v];
    const sub = ([x, y]: Vector, [u, v]: Vector): Vector => [x - u, y - v];
    const mul = (s: number, [u, v]: Vector): Vector => [s * u, s * v];
    const norm = ([x, y]: Vector): number => Math.sqrt(x * x + y * y);
    const metric = (u: Vector, v: Vector): number => norm(sub(u, v));
    const normalize = (v: Vector): Vector => {
      const len = norm(v);
      return len !== 0 ? mul(1 / len, v) : v;
    };
    // https://www.desmos.com/calculator/yba16tkwjc
    const measureActivation = (activation: number): number =>
      1 / (1 + Math.exp(40 * (activation - 0.5) ** 2));

    const lerp = (s: number, start: number, end: number): number =>
      (1 - s) * start + s * end;
    const lerpColor = (
      s: number,
      { r: ra, g: ga, b: ba }: Color,
      { r: rb, g: gb, b: bb }: Color
    ): Color => ({
      r: lerp(s, ra, rb),
      g: lerp(s, ga, gb),
      b: lerp(s, ba, bb),
    });
    const colorFor = (boid: Boid): Color =>
      lerpColor(
        measureActivation(boid.activation),
        gruvboxDarkBlue,
        activationLight
      );
    const asColorString = ({ r, g, b }: Color): string => `rgb(${r},${g},${b})`;

    const steerWith = (dir: Vector, velocity: Vector): Vector => {
      const desired = sub(dir, velocity);
      const rawMag = norm(desired);
      return mul(Math.min(maxForce, rawMag), normalize(desired));
    };

    const drivers = (
      me: Boid,
      universe: Boid[]
    ): [Vector, Vector, Vector, number] => {
      let count = 0;
      let avgDir: Vector = [0, 0];
      let avgPos: Vector = [0, 0];
      let avgDiff: Vector = [0, 0];
      let arousal = 0;

      for (const other of universe) {
        const dist = metric(other.pos, me.pos);

        if (dist > 0 && dist <= radius) {
          count += 1;
          avgDir = add(avgDir, mul(1 / dist, normalize(other.dS)));
          avgPos = add(avgPos, other.pos);
          avgDiff = mul(1 / dist, normalize(sub(me.pos, other.pos)));
          arousal += measureActivation(other.activation) / dist;
        }
      }

      let separation: Vector = [0, 0];
      let alignment: Vector = [0, 0];
      let cohesion: Vector = [0, 0];

      if (count > 0) {
        const separationVelocity = mul(maxSpeed, normalize(avgDiff));
        separation = mul(
          separationStrength,
          steerWith(separationVelocity, me.dS)
        );

        const alignmentVelocity = mul(maxSpeed, normalize(avgDir));
        alignment = mul(alignmentStrength, steerWith(alignmentVelocity, me.dS));

        const cohesionVelocity = mul(maxSpeed, normalize(sub(avgPos, me.pos)));
        cohesion = mul(cohesionStrength, steerWith(cohesionVelocity, me.dS));
      }

      return [separation, alignment, cohesion, arousal];
    };

    const update = (boid: Boid, universe: Boid[]): Boid => {
      const [sep, alignment, cohesion, arousal] = drivers(boid, universe);

      // Move the boid
      const pos = add(boid.pos, boid.dS);
      const _dS: Vector = add(boid.dS, boid.d2S);
      const d2S: Vector = add(add(sep, add(alignment, cohesion)), boid.d2S);

      let activation: number = boid.activation * neuralDamp;

      if (activation <= quiescence) {
        activation = 0;

        if (
          arousal >= activationPotential ||
          Math.random() > 1 - randomFireRate
        ) {
          activation = 1;
        }
      }

      const mag = norm(_dS);
      const dS = mag > maxSpeed ? mul(maxSpeed, normalize(_dS)) : _dS;

      // Wrap around the canvas
      if (pos[0] > canvas.width) pos[0] = 0;
      if (pos[0] < 0) pos[0] = canvas.width;
      if (pos[1] > canvas.height) pos[1] = 0;
      if (pos[1] < 0) pos[1] = canvas.height;

      return { pos, dS, d2S, activation };
    };

    const boids: Boid[] = [];

    for (let i = 0; i < 200; i++) {
      const angle = Math.random() * 2 * Math.PI;
      boids.push({
        pos: [Math.random() * canvas.width, Math.random() * canvas.height],
        dS: [Math.cos(angle), Math.sin(angle)],
        d2S: [0, 0],
        activation: 0,
      });
    }

    for (let i = 0; i < 100; i++) {
      for (let i = 0; i < boids.length; i++) {
        boids[i] = update(boids[i], boids);
      }
    }

    const animate = () => {
      requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < boids.length; i++) {
        draw(boids[i]);
        boids[i] = update(boids[i], boids);
      }
    };

    // Try not to animate on mobile devices
    if (window.innerWidth > 600) {
      animate();
    }
  });
</script>

<canvas id="boids-canvas" class="full-canvas" />
