import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 2500, min: 1300 },
    items: 4,
    partialVisibilityGutter: 20,
  },
  laptop: {
    breakpoint: { max: 1300, min: 900 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 900, min: 500 },
    items: 2,
    partialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    partialVisibilityGutter: 80,
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