import React from 'react';
import Posts from './Posts/Posts';
import Sidebar from './Sidebar/Sidebar';
import Stories from './Stories/Stories';

const Feed: React.FC = () => {
  return (
    <main className='
      grid
      grid-cols-1
      md:grid-cols-2
      md:max-w-3xl
      xl:grid-cols-3
      xl:max-w-6xl
      mx-auto
    '>
      <section className='
        col-span-2
      '>
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>

      <section className='
        hidden
        xl:inline-grid
        md:col-span-1
      '>
        {/* Sidebar */}
        <Sidebar />
      </section>
    </main>
  );
}
export default Feed;