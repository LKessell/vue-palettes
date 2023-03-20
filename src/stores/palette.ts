import { defineStore } from "pinia";

interface IColor {
  isLocked: boolean;
  hex: string;
  id: string;
}

interface IPaletteState {
  colors: IColor[];
}

export const usePaletteStore = defineStore("palette", {
  state: (): IPaletteState => ({
    colors: [],
  }),
  actions: {
    updatePalette(newColors: IColor[]) {
      if (!this.colors.length) {
        this.colors = newColors;
      } else {
        this.colors.forEach((color, index) => {
          if (!color.isLocked) this.colors[index] = newColors[index];
        });
      }
    },
  },
});
