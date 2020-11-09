import React, { useState, useEffect } from 'react';
import database from './firebase';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    database
      .collection('people')
      .onSnapshot(snapshot => setPeople(snapshot.docs.map(doc => doc.data())));
  }, []);

  return (
    <div className='tinderCards'>
      <h1>Tinder Card 1</h1>
      <div className='tinderCards__cardContainer'>
        {people.map(p => (
          <TinderCard
            className='swipe'
            key={p.name}
            preventSwipe={['up', 'down']}
          >
            <div className='card' style={{ backgroundImage: `url(${p.url})` }}>
              <h3>{p.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
