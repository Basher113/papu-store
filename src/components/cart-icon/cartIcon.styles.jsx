import styled from "styled-components"
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  & > img {
    cursor: pointer;
     &:hover {
      transform: scale(1.1)
    }
  }

  & > span {
    text-align: center;
    position: absolute;
    font-size: 10px;
    top: -6px;
    right: -6px;
    color: white;
    background-color: #DB4444;
    
    border-radius: 50%;
    font-size: 10px;
    padding: 1.5px 6px;
    pointer-events: none;
  }
`