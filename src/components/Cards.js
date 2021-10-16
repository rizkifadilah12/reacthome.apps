import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>cari tempat epic yang ada di dunia</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Jelajahi air terjun tersembunyi juah di dalam hutan amazon'
              label='petualangan'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Nikmati keindahan pulau private yang ada di bali'
              label='Kemewahan'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Berlayar mencari misteri yang ada di atlantika'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Nikmati bermain bola di atas bukit himalaya'
              label='petualangan'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Berkendara menaiki unta di atas gurun sahara'
              label='Adrenalin'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
