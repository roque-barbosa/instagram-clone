import React from 'react';

const MiniProfile: React.FC = () => {
  return (
    <div className='
      flex
      items-center
      justify-between
      mt-14
      ml-10
    '>
      <img
        src='https://leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/25.jpg'
        alt=''
        className='
          rounded-full
          border
          p-2
          w-16
          h-16
        '
      />
      <div className='
        flex-1
        mx-4
      '>
        <h2 className='
          font-bold
        '>
          Roque
        </h2>
        <h3 className='
          text-sm
          text-gray-400
        '>
          Welcome to instagram
        </h3>
      </div>
      <button className='
        text-blue-400
        font-semibold
        text-sm
      '>
        Sign Out
      </button>
    </div>
  );
}
export default MiniProfile;