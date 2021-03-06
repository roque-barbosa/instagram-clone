import React, { useEffect, useState } from 'react';
import faker from 'faker';
import Suggestion from './Suggestion';

const Suggestions: React.FC = () => {
  const [suggestions, setSuggestions] = useState(Array());

  useEffect(() => {
    const suggestions =[...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: Math.random(),
    }));
    setSuggestions(suggestions)
  }, []);

  return (
    <div className='
      mt-4
      ml-10
    '>
      <div className='
        flex
        justify-between
        text-sm
        mb-5
      '>
        <h3 className='
          text-sm
          font-bold
          text-gray-400
        '>
          Suggestions for you
        </h3>
        <button className='
          text-gray-600
          font-semibold
        '>
          See All
        </button>
      </div>
      {
        suggestions.map(profile => (
          <Suggestion
            key={Math.random()}
            img={profile.avatar}
            username={profile.username}
            companyName={profile.company.name}
          />
        ))
        
      }
    </div>
  );
}
export default Suggestions;