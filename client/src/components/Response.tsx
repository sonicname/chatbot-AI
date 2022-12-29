import { ReactNode } from 'react';

const Response = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex justify-start'>
      <div className='max-w-xs p-2 rounded-md bg-gray-300'>{children}</div>
    </div>
  );
};

export default Response;
