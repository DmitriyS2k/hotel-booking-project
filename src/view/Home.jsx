import React from 'react';
import CarouselHome from '../components/CarouselHome';
import ImageListHome from '../components/ImageListHome';

const Home = () => {
  return (
    <div>
      <h1>Welcome to "Hotel Girske Povitria"</h1>
      <div className={'home-pic-container'}>
        <CarouselHome />
        <ImageListHome />
      </div>
    </div>
  );
};

export default Home;
