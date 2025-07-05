import { Wrapper } from "./hero.styles";
import Hero500 from "../../assets/images/m-t-uoUuGpYR79c-unsplash_5_ousymc_c_scale,w_500.jpg";
import Hero1024 from "../../assets/images/m-t-uoUuGpYR79c-unsplash_5_ousymc_c_scale,w_1024.jpg";
import Hero768 from "../../assets/images/m-t-uoUuGpYR79c-unsplash_5_ousymc_c_scale,w_768.jpg";
import Hero1400 from "../../assets/images/m-t-uoUuGpYR79c-unsplash_5_ousymc_c_scale,w_1400.jpg";
const Hero = () => {
  return (
    <Wrapper>

        <img
        sizes="
        (max-width: 500px) 500px,
        (max-width: 768px) 768px,
        (max-width: 1024px) 1024px,
        (min-width: 1400px) 1400px
        "
        srcSet={`
          ${Hero500} 500w,
          ${Hero768} 768w,
          ${Hero1024} 1024w,
          ${Hero1400} 1400w,
        `}
        src={Hero1400}
        alt="" />
      
    </Wrapper>
  )
}

export default Hero