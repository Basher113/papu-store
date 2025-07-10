import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  
  max-height: 640px;
  position: relative;
  display: grid;
  align-items: center;
  & > img {
    widght: 100vw;
    height: 100%;
    
  }

  @media (max-width: 1440px) {
    width: 100vw;
  }
`
