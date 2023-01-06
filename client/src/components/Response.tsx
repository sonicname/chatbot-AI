import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import useGlobalStore from '../store/useGlobalStore';

/**
 * ! fix some stupid code
 */

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
      <span className='ml-2 text-sm text-gray-600'>AI CSKH tự động</span>
      <div className='max-w-xs lg:max-w-sm p-2 rounded-md bg-gray-300'>{children}</div>
      <div className='max-w-xs lg:max-w-sm'>
        {/**
         * ! Fix this stupid code
         */}
        {(tag == 'DELL' ||
          tag == 'Lenovo' ||
          tag == 'MSI' ||
          tag == 'Asus' ||
          tag == 'Acer' ||
          tag == 'platform_windows_10') && (
          <Swiper spaceBetween={20} grabCursor={true} slidesPerView={'auto'}>
            {new Array(5).fill(0).map((val, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className='border border-gray-400 rounded-md overflow-hidden'
                >
                  <img
                    src={`http://localhost:8000/static/${
                      tag && tag.toLocaleLowerCase() == 'platform_windows_10'
                        ? 'windows'
                        : tag.toLocaleLowerCase()
                    }/${
                      tag && tag.toLocaleLowerCase() == 'platform_windows_10'
                        ? 'windows'
                        : tag.toLocaleLowerCase()
                    }_${index + 1}.png`}
                    alt=''
                    className='w-full h-full'
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
      {isDev && (
        <span className='text-sm font-light text-gray-600'>
          Tag: {tag} - {percent && Math.floor(percent * 100)}%
        </span>
      )}
    </div>
  );
};

export default Response;
