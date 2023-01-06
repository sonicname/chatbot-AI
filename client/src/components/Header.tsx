import classNames from 'classnames';

import IconSetting from './icons/IconSetting';

import useGlobalStore from '../store/useGlobalStore';

const Header = () => {
  const { isDev, setIsDev } = useGlobalStore();
  return (
    <div className='p-2 lg:p-4 shadow-md flex items-center justify-between'>
      <IconSetting
        className={classNames('cursor-pointer rounded-md p-1', isDev && 'bg-green-400')}
        onClick={() => setIsDev(!isDev)}
      />
      <div className='flex items-center gap-x-2 lg:gap-x-3'>
        <h2 className='uppercase font-semibold text-sm lg:text-lg'>AI chăm sóc khách hàng</h2>
        <div className='w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-500'></div>
      </div>
    </div>
  );
};

export default Header;
