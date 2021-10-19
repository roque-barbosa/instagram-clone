import React from 'react';
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
      </section>

      <section>
        {/* MiniProfile */}
        {/* Sugestions */}
      </section>
    </main>
  );
}
export default Feed;