import { create } from "zustand";

//create store

export const useTest = create((set) => ({
  //state
  x: 10,
  y: 10,

  incrementX: () => set((state) => ({ x: state.x + 1 })),
  decrementX: () => set((state) => ({ x: state.x - 1 })),
  incrementY: () => set((state) => ({ x: state.y + 1 })),
  decrementY: () => set((state) => ({ x: state.y - 1 })),
  incrementByValue: (v) => set((state) => ({ x: state.x + v })),
  
}));
