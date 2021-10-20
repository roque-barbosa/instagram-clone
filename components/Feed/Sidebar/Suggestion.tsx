import React from 'react';

interface Suggestionprops {
  img: string,
  username: string,
  companyName: string,
}

const Suggestion: React.FC<Suggestionprops> = ({img, username, companyName}) => {
  return (
    <div className='
      flex
      items-center
      justify-between
      mt-3
    '>
      <img className='
        w-10
        h-10
        rounded-full
        border
        p-[2px]
      '
        src={img}
        alt=""
      />
      <div className='
        flex-1
        ml-4
      '>
        <h2 className='
          font-semibold
          text-sm
        '>
          {username}
        </h2>
        <h3 className='
          text-xs
          text-gray-400
        '>
          {companyName}
        </h3>
      </div>
      <button className='
        text-blue-400
        font-bold
      '>
        Follow
      </button>
    </div>
  );
}
export default Suggestion;