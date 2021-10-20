import React from 'react';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';

const Sidebar: React.FC = () => {
  return (
    <div className='
      fixed
      top-20
    '>
      <MiniProfile/>
      <Suggestions/>
    </div>
  );
}
export default Sidebar;