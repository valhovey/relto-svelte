<script lang="ts">
  import { View } from "../types";
  import PhotoThumbnail from "./PhotoThumbnail.svelte";
  import PortfolioPhotoDisplay from "./PortfolioPhotoDisplay.svelte";
  import { currentView } from "../state/views";
  import { selectedPhoto } from "../state/photography";
  import { photoPortfolio } from "../data/photos";

  const goBack = () => {
    currentView.setView(View.Main);
  };
</script>

<div>
  <button class="back-button" on:click={goBack}>
    {"⇐ "}
  </button>
  <div class="photo-portfolio-container">
    {#if $selectedPhoto === null}
      <ul class="photo-list">
        {#each photoPortfolio as photo}
          <PhotoThumbnail {photo} />
        {/each}
      </ul>
    {/if}
    {#if $selectedPhoto !== null}
      <PortfolioPhotoDisplay />
    {/if}
  </div>
</div>
