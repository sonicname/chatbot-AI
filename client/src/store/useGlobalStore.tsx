import create from 'zustand';

interface IMessage {
  content?: string;
  isBot: boolean;
}

interface IGlobalState {
  isOpenMenuSidebar: boolean;
  setOpenMenuSidebar: () => void;
  message: IMessage[];
  setMessage: (newMessage: IMessage) => void;
}

export default create<IGlobalState>((set) => ({
  isOpenMenuSidebar: false,
  setOpenMenuSidebar: () => set((state) => ({ isOpenMenuSidebar: !state.isOpenMenuSidebar })),
  message: [],
  setMessage: (newMessage) => set((state) => ({ message: [...state.message, newMessage] })),
}));
