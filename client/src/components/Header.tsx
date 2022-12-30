import IconClose from './IconClose';
import IconMenu from './IconMenu';

import useGlobalStore from '../store/useGlobalStore';

const Header = () => {
  const { isOpenMenuSidebar, setOpenMenuSidebar } = useGlobalStore();
  return (
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
  );
};

export default Header;
