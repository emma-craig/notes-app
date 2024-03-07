import React, { useContext } from "react";
import Slider from "react-slick";
import { PhotoContext } from "../../contexts/PhotoContext";
import { Photo, responseType } from "./../../types/data";
import "./PhotoCarousel.css";

const PhotoCarousel = () => {
  var settings = {
    infinite: true,
    speed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const { photos } = useContext(PhotoContext) as responseType;

  return (
    <div>
      <Slider {...settings}>
        {photos &&
          photos.map((photo: Photo) => (
            <div key={photo.id}>
              <div>
                <img alt={photo.alt} src={photo.src.small} />
              </div>
              <div>image title</div>
              <div>{photo.alt}</div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default PhotoCarousel;
