import { Wrapper } from "./hero.styles";
import Hero1440 from "../../assets/images/hero1440.avif";
const Hero = () => {
  return (
    <Wrapper>
        <img src={Hero1440} fetchPriority="high"/>
        
    </Wrapper>
  )
}

export default Hero