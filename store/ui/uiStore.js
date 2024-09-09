import { create } from 'zustand'

const initialState = {
  isContainer: false,
  isRelative: false
}

export const useUiStore = create((set) => ({
  ...initialState,
  toggleContainer: () => set((state) => ({ isContainer: !state.isContainer })),
  toggleRelative: () => set((state) => ({ isRelative: !state.isRelative }))
}))
