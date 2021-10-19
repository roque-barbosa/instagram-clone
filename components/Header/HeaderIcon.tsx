import React from 'react';

interface HeaderIconProp {
  Icon: any
  title?: string
  count?: number
}

const HeaderIcon: React.FC<HeaderIconProp> = ({Icon, title, count}) => {
  return (
    <div className='relative nav-button'>
      <Icon />
      {count && (
        <div className='
          absolute
          -top-2
          -right-2
          w-5
          h-5
          text-xs
          bg-red-500
          rounded-full
          text-white
          flex
          items-center
          justify-center
          animate-pulse
        '>
          {count}
        </div>
      )}
    </div>
  );
}
export default HeaderIcon;