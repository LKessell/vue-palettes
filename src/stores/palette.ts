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
    colors: [
      { isLocked: false, hex: "636363", id: "placeholder1" },
      { isLocked: false, hex: "808080", id: "placeholder2" },
      { isLocked: false, hex: "9e9e9e", id: "placeholder3" },
      { isLocked: false, hex: "bdbdbd", id: "placeholder4" },
      { isLocked: false, hex: "dedede", id: "placeholder5" },
    ],
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
