import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 2500, min: 1300 },
    items: 4,
    
  },
  laptop: {
    breakpoint: { max: 1300, min: 900 },
    items: 3,
    partialVisibilityGutter: 20,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    partialVisibilityGutter: 50,
  }
};

const CustomCarousel = ({children}) => {
  return (

      <Carousel swipeable={true} className="carousel" itemClass="carousel-item" containerClass="container-carousel" removeArrowOnDeviceType={["tablet", "mobile"]} partialVisbile={true} draggable responsive={responsive}>
        {children}
      </Carousel>

    
  )
}

export default CustomCarousel