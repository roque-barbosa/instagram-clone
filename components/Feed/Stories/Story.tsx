import React from "react";

interface StoryProps {
  img: string,
  username: string
}

const Story: React.FC<StoryProps> = ({img, username}) => {
  return (
    <div>
      <img src={img} alt='' className='
        h-14
        w-14
        rounded-full
        p-[1.5px]
        border-2
        object-contain
        cursor-pointer
        border-red-500
        hover:scale-110
        transition
        transform
        duration-200
        ease-out
      ' />
      <p className='
        text-xs
        w-14
        truncate
        text-center
      '>
        {username}
      </p>
    </div>
  );
}
export default Story;