import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`

export const DropDownContents = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  min-width: 180px;
  top: 40px;
  right: 0px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 10px;
  font-size: var(--font-s);


`

export const DropDownContent = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.5rem;
  color: black;
  justify-content: start;
  align-items: center;
  border-radius: 5px;

  &:hover {
    background-color: #ddd;
  }
`