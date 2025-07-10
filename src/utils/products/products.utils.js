export const formatProductsByCategoriesMap = (products) => {
  console.log(products, "formatted?")
  const formattedProducts = products.reduce((acc, current) => {
    
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

export const getPopular = (products) => {
  return products.filter((product) => product.popular === true);
}