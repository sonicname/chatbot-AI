import create from 'zustand';

interface IGlobalState {
  isOpenMenuSidebar: boolean;
  setOpenMenuSidebar: () => void;
}

export default create<IGlobalState>((set) => ({
  isOpenMenuSidebar: false,
  setOpenMenuSidebar: () => set((state) => ({ isOpenMenuSidebar: !state.isOpenMenuSidebar })),
}));
