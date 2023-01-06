import { ReactNode } from 'react';

import useGlobalStore from '../store/useGlobalStore';

const Response = ({
  children,
  percent,
  tag,
}: {
  children: ReactNode;
  tag?: string;
  percent?: number;
}) => {
  const { isDev } = useGlobalStore();

  return (
    <div className='flex justify-start flex-col gap-y-1'>
      <div className='max-w-xs p-2 rounded-md bg-gray-300'>{children}</div>
      {isDev && (
        <span className='text-xs font-light text-gray-500'>
          Tag: {tag} - {percent && Math.floor(percent * 100)}%
        </span>
      )}
    </div>
  );
};

export default Response;
