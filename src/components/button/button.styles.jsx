import styled from "styled-components";

export const BaseButton = styled.button`
  border-radius: 5px;
  border: none;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  padding: 0.4rem;
  background-color: #DB4444;
  color: white;

  &:hover {
    opacity: 0.875;
  }

  &:active {
    opacity: 0.775;
  }
`;

export const AddToCartButton = styled(BaseButton)`
  background-color: rgb(19, 19, 19);
`;

export const HelperButton = styled(BaseButton)`
  color: black;
  background-color: transparent;
  border: 0.5px solid black;

  &:hover {
    background-color: rgb(19, 19, 19);
    color: white;
  }
`


