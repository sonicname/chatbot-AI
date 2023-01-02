import { useRef } from 'react';
import { Socket } from 'socket.io-client';

import IconSend from '../icons/IconSend';

import handleKeyPress from '../../hooks/handleKeyPress';
import useGlobalStore from '../../store/useGlobalStore';

interface IChatInputProps {
  socket: Socket;
}

const ChatInput = ({ socket }: IChatInputProps) => {
  const { setMessage } = useGlobalStore();
  const messageRef = useRef<HTMLInputElement | null>(null);

  const handleSendMessage = () => {
    if (!messageRef.current) return;
    const message = messageRef.current.value;

    if (!message) return;

    socket.emit('message', message);

    setMessage({
      isBot: false,
      content: message,
    });

    messageRef.current.value = '';
  };

  handleKeyPress('Enter', handleSendMessage);

  return (
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
  );
};

export default ChatInput;
