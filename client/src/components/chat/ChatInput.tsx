import { useRef } from 'react';
import { Socket } from 'socket.io-client';
import { Swiper, SwiperSlide } from 'swiper/react';

import IconSend from '../icons/IconSend';

import handleKeyPress from '../../hooks/handleKeyPress';
import useGlobalStore from '../../store/useGlobalStore';

const suggestQuestion = [
  'Có ai ở đây không?',
  'Địa chỉ cửa hàng',
  'Thời gian mở cửa',
  'AI có thể giúp gì?',
  'Cửa hàng có những kiểu thanh toán nào?',
  'Tôi cần tư vấn mua máy tính?',
  'Cửa hàng có những hãng máy tính nào?',
  'Tôi muốn mua máy tính chơi game',
  'Tôi muốn mua máy tính văn phòng',
  'Tôi muốn tư vấn về hệ điều hành',
  'Tư vấn thêm',
];

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
    <div className='p-2 lg:p-4 absolute bottom-0 w-full flex flex-col gap-y-2 select-none'>
      <Swiper spaceBetween={30} grabCursor={true} slidesPerView={'auto'}>
        {suggestQuestion.map((ques, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              if (!messageRef.current) return;
              messageRef.current.value = ques;
            }}
          >
            <span className='cursor-pointer text-md line-clamp-1 p-1'>{ques}</span>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex gap-x-2 lg:gap-x-4 items-center'>
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

export default ChatInput;
