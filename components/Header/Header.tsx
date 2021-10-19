import React from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import HeaderIcon from './HeaderIcon'

const Header: React.FC = () => {
  return (
    <div className='
      shadow-sm
      border-b
      bg-white
      sticky
      top-0
      z-50
    '>
      <div className='
        flex
        justify-between
        bg-white
        max-w-6xl
        mx-5
        xl:mx-auto
      '>
        {/* Left */}
        <div className='
          hidden
          lg:inline-grid
          relative
          cursor-pointer
          w-24
        '>
          <Image
            src='https://links.papareact.com/ocw'
            layout='fill'
            objectFit='contain'
          />
        </div>

        <div className='
          lg:hidden
          flex-shrink-0
          relative
          cursor-pointer
          w-10
        '>
          <Image
            src='https://links.papareact.com/jjm'
            layout='fill'
            objectFit='contain'
          />
        </div>

        {/* Middle - Search Input Field */}
        <div className='
          max-w-xs
        '>
          <div className='
            flex
            items-center
            relative
            p-3
            rounded-md
            mt-1
          '>
            <div className='
              absolute
              inset-y-0
              pl-3
              flex
              items-center
              pointer-events-none
            '>
              <SearchIcon className='
                h-5
                w-5
                text-gray-400
              '
              />
            </div>
            <input type='text' placeholder='Search' className='
              bg-gray-50
              block
              w-full
              pl-10
              sm:text-sm
              border-gray-300
              rounded-md
              focus:ring-black
              focus:border-black
            ' />
          </div>
        </div>
        {/* Right */}
        <div className='
          flex
          items-center
          justify-end
          space-x-4
        '>
          <HeaderIcon Icon={HomeIcon} />
          <HeaderIcon Icon={PaperAirplaneIcon} count={1} />
          <HeaderIcon Icon={PlusCircleIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
          <HeaderIcon Icon={HeartIcon} />
          <MenuIcon className='h-6 md:hidden cursor-pointer'/>
          <img
            src='https://leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/25.jpg'
            alt='profile pic'
            className='
              h-10
              rounded-full
              cursor-pointer
            '
          />
        </div>
      </div>
    </div>
  );
}
export default Header;