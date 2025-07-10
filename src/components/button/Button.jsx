import {  BaseButton, AddToCartButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = { // eslint-disable-line
  base: "base",
  addToCart: "addToCart",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  let CustomButton = BaseButton;
  if (BUTTON_TYPE_CLASSES[buttonType] === BUTTON_TYPE_CLASSES.addToCart) {
    CustomButton = AddToCartButton;
  } 
  return CustomButton;
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;