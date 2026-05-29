import type {Project} from "../types";
import {
  faChessBoard,
  faHiking,
  faSatellite,
  faRocket,
  faProjectDiagram,
  faWind,
  faWaveSquare,
  faCalculator,
  faUndo,
  faCar,
  faMicrochip,
  faFire,
  faTree,
  faKitchenSet,
  faLaptopCode,
  faCodeCompare,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

const chefDexImage = "images/projects/chef_dex.png";
const diffractionImage = "images/projects/diffraction.png";
const haskellImage = "images/projects/haskell.png";
const balatroImage = "images/projects/balatro.png";
const calSimImage = "images/projects/cal_sim.png";
const mystNetImage = "images/projects/myst_net.png";
const fireplaceImage = "images/projects/fireplace.png";
const eulerGolfImage = "images/projects/euler_golf.png";
const gaiaMaryImage = "images/projects/hail_mary_dithered.png";
const gaiaAtlasImage = "images/projects/gaia_atlas_dithered.png";
const vectorWindImage = "images/projects/vector_wind.png";
const fieryFurnaceImage = "images/projects/fiery_furnace.png";
const eightBitSpaghettiImage = "images/projects/8_bit_spaghetti.png";
const acousticForestImage = "images/projects/acoustic-forest.png";
const stationAnalysisImage = "images/projects/station_analysis.png";
const villeinImage = "images/projects/villein_translator.png";
const automataExplorationImage = "images/projects/automata_exploration.png";

export const projects: Project[] = [
  {
    title: "GAIA Mary",
    icon: faSatellite,
    image: gaiaMaryImage,
    year: "2026",
    brief: "Recreation of the starmap of Project Hail Mary",
    description:
      "Using the GAIA DR3 all sky survey data from the European Space Agency, I recreated an accurate starmap of our local system inspired by the in-ship map in the movie Project Hail Mary. I have been obsessed with this story and have seen the movie multiple times. I happened to be working with the GAIA data to see if I could render accurate Milky Way skyboxes. That work ended up turning into a hail mary of my own to try and recreate my favorite UI in the whole film.",
    link: "https://valhovey.github.io/gaia-mary",
  },
  {
    title: "GAIA Atlas",
    icon: faRocket,
    image: gaiaAtlasImage,
    year: "2026",
    brief: "3D atlas of stars, exoplanets, constellations, and more",
    description:
      "This is a sequel to my GAIA Mary project which adds features letting you explore our local star system. Go to stars, view 3D constellations, chart interstellar travel and calculate the time it would take to visit neighboring systems. Planetary locations are accurate on load, and information about dozens of named stars are included in the map. Visit exoplanetary systems and learn about their host stars. Most of all, have fun.",
    link: "https://valhovey.github.io/gaia-atlas",
  },
  {
    title: "Chef-Dex",
    icon: faKitchenSet,
    image: chefDexImage,
    year: "2025",
    brief: "Recursive recipe browser for Risk of Rain 2",
    description:
      "In the roguelike videogame Risk of Rain 2 there is a mechanic added in the Alloyed Collective DLC that allows you to combine items to create new ones that benefit your build. Some ingredients themselves are also craftable, making for a multi-dimensional puzzle of finding alternate recipes to get items. I built a small Unity C# mod to export the recipes from the game runtime then created a web browser that displays recipe trees dynamically for each craftable item.",
    link: "https://chef-dex.vercel.app/",
  },
  {
    title: "A Tour of Haskell",
    icon: faLaptopCode,
    image: haskellImage,
    year: "2025",
    brief: "Educational overview of professional Haskell",
    description:
      "At Mercury, I have had the joy of getting to work with Haskell professionally over multiple years. I'm grateful that I get to work with such a wonderful language, and I have written both a blog post and presented a talk on how to approach professional Haskell as a newcomer. I based the talk on what I wish I could have known going into learning Haskell my first time.",
    link: "https://github.com/valhovey/a-tour-of-haskell",
  },
  {
    title: "State With Elm",
    icon: faCodeCompare,
    image: balatroImage,
    year: "2025",
    brief: "My talk on FE state management",
    description:
      "At a local UtahJS meetup I gave a talk on one of my favorite web frameworks: Elm. Elm inspired much of the state models of React, the error messages in Rust, and has roots in Haskell as an ML type language. To demonstrate state management, I built a minimal Balatro clone that does hand score calculation.",
    link: "https://github.com/valhovey/rethinking-state-with-elm",
  },
  {
    title: "Star Spike Simulations",
    icon: faCertificate,
    image: diffractionImage,
    year: "2025",
    brief: "Simulating telescope star spikes",
    description:
      "My Newtonian reflector telescope has a non-standard offset secondary vane structure, and I was curious how this would change the star spikes in my images. I used the Poppy diffraction modeling library by Space Telescope Science Institute to simulate different offsets, misalignments, and support structures. I used the results to help diagnose minor calibration errors so I can tune my secondary more easily.",
    link: "https://github.com/valhovey/star-simulations?tab=readme-ov-file",
  },
  {
    title: "Automata Browser",
    icon: faChessBoard,
    image: automataExplorationImage,
    year: "2020",
    brief: "Global map of all life-like Cellular Automata",
    description:
      "I was researching emergent complexity in cellular automata and found a classification scheme for all quarter million life-like automata. The embedding compresses all of the rules into a nebula of points where distance between any two points provides a decent approximation of how simililarly the rules behave given a random initial board state. I built this browser with React so that I could better explore the dataset.",
    link: "/automata-nebula-explorer/index.html",
  },
  {
    title: "Fiery Furnace",
    icon: faHiking,
    image: fieryFurnaceImage,
    year: "2020",
    brief: "Interactive map of the Fiery Furnace in Arches National Park",
    description:
      "Pre-pandemic, my partner Hannah and I took a trip down to Arches National Park in Utah. The highlight was exploring the Fiery Furnace: a labrynth of ancient sandstone with no main trail, only meandering boulder routes and washes. I exported the route data (recorded with my watch) and interpolated photo time-stamps with location time-stamps to create an interactive map of our path with pictures along the way using Mapbox.",
    link: "/FieryFurnace/index.html",
  },
  {
    title: "Myst Net",
    icon: faProjectDiagram,
    image: mystNetImage,
    year: "2019",
    brief: "Neural Net for parsing D'ni numerals",
    description:
      "This was my last hackathon project. The D'ni numeral system is from the world of Myst, a game series that I am a very large fan of. The system is base-25, and has a rotational glyph system with a base-5 sub-pattern. I wanted to see if I could reproduce the MNIST convnet example using D'ni numbers. To generate training data, I wrote the segments in isolation and created a script to produce combinatorial sets of the individual segments I created. In the end, the network had over 99% validation accuracy and responded well to novel handwritten D'ni digits.",
    link: "https://github.com/valhovey/myst-net",
  },
  // {
  //   title: "Vector Wind",
  //   icon: faWind,
  //   image: vectorWindImage,
  //   year: "2017",
  //   brief: "Vector field visualization tool",
  //   description:
  //     "I was inspired by a Reddit post that used HTML Canvas to create a beautiful vector field visualization. Unfortunately, the poster did not release their source code, so I decided to make my own version. Vector fields are entered by typing in a Javascript function that takes two inputs (x,y) and returns a two-element array. The result is visualized by creating particles that get pushed around in the field like dust in the wind. The source code can be found on my GitHub.",
  //   link: "vectorwind/index.html",
  // },
  {
    title: "CALSim",
    icon: faWaveSquare,
    image: calSimImage,
    year: "2016",
    brief: "In-browser WireWorld cellular automata simulator",
    description:
      "This is a WireWorld Cellular Automata simulator written in JavaScript. WireWorld is a CA capable of logic simulation. In fact, it is Turing Complete! This in-browser interpreter allows you to create structures, copy, paste, delete, and pause/play/step simulations.",
    link: "CALSim/index.html",
  },
  {
    title: "Villein Translator",
    icon: faCalculator,
    image: villeinImage,
    year: "2016",
    brief: "Translator for Obduction's Villein numbers",
    description:
      'In Cyan\'s new game Obduction there is an alien race called the Villeins. Part of the game is figuring out their numbering system, which uses a three-by-three grid on which five "digits" can lie. The whole system is base-4, and I had a bunch of fun figuring it out. I wanted to create a translator to quickly verify numbers, so I made one husing the html5 canvas.',
    link: "Villein/index.html",
  },
  {
    title: "Euler Golf",
    icon: faUndo,
    image: eulerGolfImage,
    year: "2015",
    brief: "Recursive puzzle involving complex numbers",
    description:
      "When I was attending Cuesta College in San Luis Obispo, I had an idea for a game over the Gaussian Integers (complex numbers of the form a+bi where a and b are both integers). I quickly found that the game was evil in difficulty, and as I shared it with friends I also learned that it was not just me. In light of this newfound challenge, I created an in-browser version as a Hackathon project. More info can be found on the site.",
    link: "EulerGolf/index.html",
  },
  {
    title: "Station Report",
    icon: faCar,
    image: stationAnalysisImage,
    year: "2018",
    brief: "Analysis to find the best spots for new EV chargers",
    description:
      "In Utah, where the air is bad enough each winter to take years off of the average person's life expectancy, electric vehicle adoption is one of the many solutions to our air quality. At the Utah Power and Electronics Lab (UPEL), I helped Rocky Mountain Power determine where to place/fund new electric vehicle charging stations in Utah. We worked with the Utah Department of Transportation to combine traffic information, as well as network analysis on the roadways to find the locations that would have the highest impact for EV adoption. This interactive report summarizes the findings of the analysis and visualizes what corridors are affected.",
    link: "stationReport/index.html",
  },
  {
    title: "8-Bit Spaghetti",
    icon: faMicrochip,
    image: eightBitSpaghettiImage,
    year: "2012",
    brief: "8-Bit Computer designed from the ground up",
    description:
      'One fateful night of playing Minecraft with my best friend and I was convinced that I had to learn more about the inner workings of a CPU. We had just installed a mod that added basic digital components to the game, and my friend was constructing a processor. I knew nothing about architecture at that point, but I wanted to learn more. I began my journey reading "Digital Computer Electronics" by Malvino and started constructing the basic modular components of a computer. Eventually I had constructed a processor of my own design. The final product had EM interference which induced signalling issues, but the knowledge I gained benefits me to this day. I made a website and tutorial to aid anyone who wishes to acheive the same goal. I know of a few individuals so far that have used my instructions to build their own CPU.',
    link: "https://8-bitspaghetti.com",
  },
  {
    title: "Fireplace",
    icon: faFire,
    image: fireplaceImage,
    year: "2016",
    brief: "Custom simulator written to mimic a campfire",
    description:
      "One of my favorite things to do in my free time is to program new patterns for the Adafruit Neopixel shield (a 5x8 RGB LED matrix for the Arduino). Since I camp a lot, I wanted to simulate fire on it with the hopes of creating a calming lantern for my tent. I decided to go with a slightly neural-network inspired approach. I created an ember class that has an internal fire value and a customized sigmoid curve function that will map the embers' fire values to something between 0 and 1. A stoke method adds a random integer in a specified range, and a diminish method multiplies the fire variable by a predetermined constant (0<k<1). I was so happy with the results that I wanted to create an in-browser version. This time, I used HTML5 and JS to create a grid of embers. I shaped the fire on the page by making the range for the random constant that each ember is stoked with depend on the ember's position on the page. Vertically there is a linear gradient, and horizontally there is a gaussian distribution determined by page width.",
    link: "FirePlace/index.html",
  },
  {
    title: "Acoustic Forest",
    icon: faTree,
    image: acousticForestImage,
    year: "2016",
    brief: "2D Procedural landscape that is reactive to sound",
    description:
      "A natural continuation of my FirePlace project and an ode to John Muir and the mountains, I created Acoustic Forest: a music visualizer that uses procedurally generated terrain with unique elements augmented by distinct frequency bands in a song. I decided to go with Muse's \"Exogenesis Symphony Part 3\" which I claim absolutely no rights to and will take down at first request of any proprietor's request. I chose the song because it just so happened that Muse's masterful composition consists of a crescendo of increasing layers of elements, then a decrescendo back out. The structure of the song itself is a mountain in shape, which made it perfect to bring in elements slowly, then bring them out in reverse order. Currently this only runs in Chrome/Safari for desktop, so apologies to mobile users. Granted, this was created in Canvas without WebGL, so expect heavy processor usage.",
    link: "AcousticForest/index.html",
  },
];
