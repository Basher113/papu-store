export const addProductToCart = (existingCart, newProduct) => {
  const matchProduct = existingCart.find(cart => cart.product.id === newProduct.id);

  if (matchProduct) {
    return existingCart.map(cart => cart.product.id === newProduct.id ? {...cart, quantity: cart.quantity + 1} : cart)
  }

  return [...existingCart, {id: crypto.randomUUID(),  quantity: 1, product: newProduct,}]
}

export const getCartCount = (existingCart) => {
  let count = 0;
  for (let i =0; i < existingCart.length; i++) {
    count += existingCart[i].quantity;
  }
  return count;
}

export const updateCartProductQuantity = (existingCart, cartId, newQuantity) => {
  const matchCartProduct = existingCart.find(cart => cart.id === cartId);

  if (matchCartProduct) {
    return existingCart.map(cart => cart.id === cartId ? {...cart, quantity: newQuantity} : cart);
  }

  return existingCart;
}

