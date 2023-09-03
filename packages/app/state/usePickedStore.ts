import { create } from 'zustand'

interface PickedState {
  open: boolean
  setOpen: (open: boolean) => void
}

export const usePickedStore = create<PickedState>((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open })),
}))
