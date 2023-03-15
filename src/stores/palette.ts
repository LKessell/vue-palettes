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
});
