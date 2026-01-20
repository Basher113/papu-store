import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const CustomCarousel = ({children, responsive}) => {
  if (!Array.isArray(children)) return;
  return (
      <Carousel swipeable={true} className="carousel" itemClass="carousel-item" containerClass="container-carousel"  partialVisbile={true} draggable responsive={responsive}>
        {children}
      </Carousel>
  )
}

export default CustomCarousel