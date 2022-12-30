import ReactDOM from 'react-dom/client';
import { Socket, io } from 'socket.io-client';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import Header from './components/Header';
import ChatBox from './components/ChatBox';
import ChatInput from './components/ChatInput';

const socket: Socket = io('localhost:2002');

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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <App />
    <ToastContainer />
  </>,
);
