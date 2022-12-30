import { useEffect, useRef } from 'react';
import { Socket } from 'socket.io-client';

import Message from './Message';
import Response from './Response';

import useResize from '../hooks/useResize';
import useGlobalStore from '../store/useGlobalStore';

interface IChatBoxProps {
  socket: Socket;
}

const ChatBox = ({ socket }: IChatBoxProps) => {
  const size = useResize();
  const { message, setMessage } = useGlobalStore();

  const messageBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    socket.on('response', (res: string) => setMessage({ isBot: true, content: res }));
  }, [socket]);

  useEffect(() => {
    messageBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);

  return (
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
          <div ref={messageBottomRef}></div>
        </>
      ) : (
        <div className='text-gray-400 text-center'>Hiện tại chưa có tin nhắn!</div>
      )}
    </div>
  );
};

export default ChatBox;
