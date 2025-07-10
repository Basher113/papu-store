import styled, {keyframes} from "styled-components";

const loader = keyframes`
  0% {
      transform: translateX(-150%);
  }
  50% {
      transform: translateX(-60%);
  }
  100% {
      transform: translateX(150%);
  }
`

export const ShimmerWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  opacity: 0.2;
  background-color: rgba(238, 238, 238, 0.966);
  transform: skewX(-20deg);
  animation: ${loader} 0.5s linear infinite;
`

