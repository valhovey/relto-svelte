import type {PortfolioPhoto} from "../types";
import {writable} from "svelte/store";

function createState() {
  const {subscribe, set} = writable<PortfolioPhoto | null>(null);

  return {
    subscribe,
    setSelectedPhoto(photo: PortfolioPhoto) {
      set(photo);
    },
  };
}

export const selectedPhoto = createState();
