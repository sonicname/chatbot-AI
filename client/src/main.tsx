import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import IconClose from './components/IconClose';
import IconMenu from './components/IconMenu';
import IconSend from './components/IconSend';
import Message from './components/Message';
import Response from './components/Response';

import useGlobalStore from './store/useGlobalStore';

const App = () => {
  const { isOpenMenuSidebar, setOpenMenuSidebar } = useGlobalStore();
  return (
    <div className='relative w-full h-full'>
      <div className='flex flex-col gap-y-1 lg:gap-y-2 select-none'>
        <div className='p-2 lg:p-4 uppercase font-semibold text-lg shadow-md flex items-center justify-between'>
          {isOpenMenuSidebar ? (
            <IconMenu className='cursor-pointer' onClick={setOpenMenuSidebar} />
          ) : (
            <IconClose className='cursor-pointer' onClick={setOpenMenuSidebar} />
          )}
          <div className='flex items-center gap-x-2 lg:gap-x-3'>
            <h2>AI chăm sóc khách hàng</h2>
            <div className='w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-500'></div>
          </div>
        </div>

        <div className='flex-1 p-2 lg:p-4 h-full overflow-y-scroll lg:max-h-[600px] max-h-[566px] scrollbar-thin flex flex-col gap-y-2 lg:gap-y-4'>
          <Message>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt ab veritatis
            assumenda ipsa eligendi voluptatum. Quia delectus laudantium dicta voluptatibus
            consectetur quasi possimus, natus omnis consequatur optio consequuntur iste.
          </Message>
          <Response>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti officiis libero ea
            quo iure enim vitae dolores iste quis. Enim esse nobis mollitia molestiae cupiditate
            quidem. Voluptatibus ducimus obcaecati quibusdam.
          </Response>
        </div>
      </div>
      <div className='p-2 lg:p-4 absolute bottom-0 flex w-full gap-x-2 lg:gap-x-4 items-center'>
        <input
          type='text'
          className='flex-1 w-full border-2 border-gray-300 active:border-gray-600 rounded-md p-2'
        />
        <IconSend className='cursor-pointer hover:scale-110 duration-100 active:scale-90' />
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
