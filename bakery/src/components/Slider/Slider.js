import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
   image: require('../../assets/photos/banner11.jpg'), 
   caption:"Crea",
   description:""
  },
  {
    image:require('../../assets/photos/banner22.jpg'), 
    caption:"Esplora",
    description:""
   },
   {
    image:require('../../assets/photos/banner33.jpg'), 
    caption:"Le tue ricette preferite solo su Cakes&Sweets",
    description:""
   } 
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100 sliderImages" 
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default HomeCarousel;