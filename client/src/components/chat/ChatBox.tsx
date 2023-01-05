import { MutableRefObject, useEffect } from 'react';
import { Socket } from 'socket.io-client';

import Message from '../Message';
import Response from '../Response';

import useResize from '../../hooks/useResize';
import useScrollToRef from '../../hooks/useScrollToRef';
import useGlobalStore from '../../store/useGlobalStore';

interface IChatBoxProps {
  socket: Socket;
  ref?: MutableRefObject<HTMLDivElement | null>;
}

const ChatBox = ({ socket, ref }: IChatBoxProps) => {
  const size = useResize();
  const { message, setMessage } = useGlobalStore();
  const { elementRef } = useScrollToRef(message);

  useEffect(() => {
    socket.on('response', (res: string) => setMessage({ isBot: true, content: res }));
  }, [socket]);

  return (
    <div
      className='flex-1 p-2 lg:p-4 h-full overflow-y-scroll scrollbar flex flex-col gap-y-2 lg:gap-y-4 scroll-smooth'
      style={{
        maxHeight:
          size.width && size.width < 1024
            ? size.height && size.height - 40 - 100
            : size.height && size.height - 64 - 116,
      }}
      ref={ref}
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
          <div ref={elementRef} />
        </>
      ) : (
        <div className='text-gray-400 text-center'>Hiện tại chưa có tin nhắn!</div>
      )}
    </div>
  );
};

export default ChatBox;
