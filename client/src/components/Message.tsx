import { ReactNode } from 'react';

const Message = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex justify-end'>
      <div className='max-w-xs lg:max-w-sm p-2 rounded-md bg-blue-500 text-white'>{children}</div>
    </div>
  );
};

export default Message;
