import classNames from 'classnames';

const IconMenu = ({ className, onClick }: { className?: string; onClick?: () => void }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={classNames('w-6 h-6 lg:w-8 lg:h-8', className)}
      onClick={onClick}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
      />
    </svg>
  );
};

export default IconMenu;
