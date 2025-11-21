<script lang="ts">
  import { FontAwesomeIcon } from "fontawesome-svelte";
  import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
  import Project from "./lib/Project.svelte";
  import ProjectDetails from "./lib/ProjectDetails.svelte";
  import PhotographyPortfolio from "./lib/PhotographyPortfolio.svelte";
  import BottomBar from "./lib/BottomBar.svelte";
  import Boids from "./lib/Boids.svelte";
  import Bio from "./lib/Bio.svelte";

  import { projects } from "./data/projects";
  import { currentView } from "./state/views";
  import { View } from "./types";

  const openPhotoPortfolio = () => {
    currentView.setView(View.Photos);
  };
</script>

<main>
  <div class="container">
    <Boids />
    <div class="content">
      <div class="main">
        <div class="description">
          <div class="logo" />
          {#if $currentView === View.Main}
            <Bio />
          {/if}
        </div>
        {#if $currentView === View.Main}
          <ul class="projects-list">
            {#each projects as project}
              <Project {project} />
            {/each}
          </ul>
          <hr class="divider" />
          <div class="photography-button-container">
            <a
              href="https://app.astrobin.com/u/valence#gallery"
              target="_blank"
            >
              <button class="photography-portfolio-link">
                <div class="title-section">
                  <FontAwesomeIcon icon={faCameraRetro} />
                  <span class="title">Astrophotography</span>
                </div>
              </button>
            </a>
          </div>
        {/if}
        {#if $currentView === View.Project}
          <ProjectDetails />
        {/if}
        {#if $currentView === View.Photos}
          <PhotographyPortfolio />
        {/if}
        <BottomBar />
      </div>
    </div>
  </div>
</main>
