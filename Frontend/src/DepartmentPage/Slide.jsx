import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Slide({ images }) {
  return (<>
   <Carousel set showThumbs={false} showArrows={true} infiniteLoop={true} autoPlay={true} interval={2000}>
      {images.map((image, index) => (
        <div key={index}>
          <center> <img style={{height: "75vh"}} src={image} alt={`Image ${index + 1}`} />
          </center>
        </div>
        
      ))}
    </Carousel>
    </>

  );
}