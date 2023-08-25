import {create} from 'zustand'

interface SheetState {
    open: boolean
    setOpen: (open: boolean) => void
}

export const useSheetStore = create<SheetState>((set) => ({
    open: false,
    setOpen: (open) => set(() => ({open}))
}))