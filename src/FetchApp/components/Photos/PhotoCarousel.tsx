import React, { useContext } from 'react';
import Slider from 'react-slick';
import { PhotoContext } from '../../contexts/PhotoContext';
import { Photo, responseType } from './../../types/data';
import './PhotoCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const PhotoCarousel = () => {
  var settings = {
    infinite: true,
    speed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const { photos } = useContext(PhotoContext) as responseType;
  return (
    <Slider {...settings}>
      {photos &&
        photos.map((photo: Photo) => (
          <div className='img-container' key={photo.id}>
            <img
              alt={photo.alt}
              src={photo.src.small}
              height= '200px'
              width='200px'
              object-fit='contain'
            />
          </div>
        ))}
    </Slider>
  );
};

export default PhotoCarousel;
