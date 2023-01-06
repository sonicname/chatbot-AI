import create from 'zustand';

interface IMessage {
  content?: string;
  isBot: boolean;
  tag?: string;
  percent?: number;
}

interface IGlobalState {
  isOpenMenuSidebar: boolean;
  setOpenMenuSidebar: () => void;
  message: IMessage[];
  setMessage: (newMessage: IMessage) => void;
  isDev: boolean;
  setIsDev: (val: boolean) => void;
}

export default create<IGlobalState>((set) => ({
  isOpenMenuSidebar: false,
  setOpenMenuSidebar: () => set((state) => ({ isOpenMenuSidebar: !state.isOpenMenuSidebar })),
  message: [],
  setMessage: (newMessage) => set((state) => ({ message: [...state.message, newMessage] })),
  isDev: false,
  setIsDev: (val) => set(() => ({ isDev: val })),
}));
