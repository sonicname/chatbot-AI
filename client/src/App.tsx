import { io } from 'socket.io-client';

import Header from './components/Header';
import ChatBox from './components/chat/ChatBox';
import ChatInput from './components/chat/ChatInput';

const socket = io('localhost:8000');

const App = () => {
  return (
    <div className='relative w-full h-full'>
      <div className='flex flex-col gap-y-1 lg:gap-y-2 select-none'>
        <Header />
        <ChatBox socket={socket} />
      </div>
      <ChatInput socket={socket} />
    </div>
  );
};

export default App;
