import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import {
  HeartIcon as HeartIconFilled
} from '@heroicons/react/solid'

interface PostProps {
  id: string,
  username: string,
  userImg: string,
  img?: string
  caption?: string,
}

const Post: React.FC<PostProps> = ({id, username, userImg, img, caption}) => {
  return (
    <div className='
      bg-white
      my-7
      border
      rounded-sm
    '>
      {/* Header */}
      <div className='
        flex
        items-center
        p-5
      '>
        <img src={userImg} alt='' className='
          rounded-full
          h-12
          w-12
          object-contain
          border
          p-1
          mr-3
        ' />
        <p className='
          flex-1
          font-bold
        '>
          {username}
        </p>
        <DotsHorizontalIcon className='
          h=5
          w-5
        '/>
      </div>

      {/* Image */}
      <img src={img} alt="" className='
        object-cover
        w-full
      '/>

      {/* Buttons */}
      <div className='
        flex
        justify-between
        px-4
        pt-4
      '>
        <div className='
          flex space-x-4
        '>
          <HeartIcon className='button' />
          <ChatIcon className='button'/>
          <PaperAirplaneIcon className='button'/>
        </div>
        <BookmarkIcon className='button'/>
      </div>

      {/* Caption */}
      <p className='
        p-5 truncate
      '>
        <span className='
          font-bold
          mr-1
        '>
          {username}
        </span>
        {caption}
      </p>
      {/* Comments */}
      {/* InputBox */}

      <form className='
        flex items-center p-4
      '>
        <EmojiHappyIcon className='
          h-7
        '/>
        <input type="text" placeholder='Comment ...' className='
          border-none
          flex-1
          focus:ring-0
        '/>
        <button className='
          font-semibold
          text-blue-400
        '>
          Post
        </button>
      </form>
    </div>
  );
}
export default Post;