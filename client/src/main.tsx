import { StrictMode, useRef } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import IconClose from './components/IconClose';
import IconMenu from './components/IconMenu';
import IconSend from './components/IconSend';
import Message from './components/Message';
import Response from './components/Response';

import useResize from './hooks/useResize';
import handleKeyPress from './hooks/handleKeyPress';
import useGlobalStore from './store/useGlobalStore';

const App = () => {
  const size = useResize();
  const { isOpenMenuSidebar, setOpenMenuSidebar, message, setMessage } = useGlobalStore();

  const messageRef = useRef<HTMLInputElement | null>(null);

  const handleSendMessage = () => {
    if (!messageRef.current) return;
    const value = messageRef.current.value;
    if (!value) return;

    setMessage({
      isBot: false,
      content: value,
    });

    messageRef.current.value = '';
  };

  handleKeyPress('Enter', handleSendMessage);

  return (
    <div className='relative w-full h-full'>
      <div className='flex flex-col gap-y-1 lg:gap-y-2 select-none'>
        <div className='p-2 lg:p-4 shadow-md flex items-center justify-between'>
          {isOpenMenuSidebar ? (
            <IconClose className='cursor-pointer' onClick={setOpenMenuSidebar} />
          ) : (
            <IconMenu className='cursor-pointer' onClick={setOpenMenuSidebar} />
          )}
          <div className='flex items-center gap-x-2 lg:gap-x-3'>
            <h2 className='uppercase font-semibold text-sm lg:text-lg'>AI chăm sóc khách hàng</h2>
            <div className='w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-500'></div>
          </div>
        </div>

        <div
          className='flex-1 p-2 lg:p-4 h-full overflow-y-scroll scrollbar flex flex-col gap-y-2 lg:gap-y-4 scroll-smooth'
          style={{
            maxHeight:
              size.width && size.width < 1024
                ? size.height && size.height - 40 - 60
                : size.height && size.height - 64 - 76,
          }}
        >
          {message.length > 0 ? (
            <>
              {message.map((message, index) =>
                message.isBot ? (
                  <Response key={index}>{message.content}</Response>
                ) : (
                  <Message key={index}>{message.content}</Message>
                ),
              )}
            </>
          ) : (
            <div className='text-gray-400 text-center'>Hiện tại chưa có tin nhắn!</div>
          )}
        </div>
      </div>
      <div className='p-2 lg:p-4 absolute bottom-0 flex w-full gap-x-2 lg:gap-x-4 items-center'>
        <input
          type='text'
          className='flex-1 w-full border-2 border-gray-300 active:border-gray-600 rounded-md p-2'
          placeholder='Nhập nội dung cần tư vấn...'
          ref={messageRef}
        />
        <IconSend
          className='cursor-pointer hover:scale-110 duration-100 active:scale-90'
          onClick={handleSendMessage}
        />
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
