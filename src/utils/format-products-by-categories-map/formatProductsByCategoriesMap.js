export const formatProductsByCategoriesMap = (products) => {
  const formattedProducts = products.data.products.reduce((acc, current) => {
    
    const {id, title, image, price, discount, description, category} = current;

    if (acc[category]) {
      acc[category].push({id, title, image, price, discount, description});
    } else {
      acc[category] = [];
    }
    return acc;
  }, {})

  return formattedProducts;
}