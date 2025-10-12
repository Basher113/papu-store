import AppliancesIcon from "../../../../assets/icons/appliances.svg"
import GamingIcon from "../../../../assets/icons/gaming.svg"
import HeadphonesIcon from "../../../../assets/icons/headphones.svg"
import PhoneIcon from "../../../../assets/icons/phone.svg"
import LaptopIcon from "../../../../assets/icons/laptop.svg"


import { CategoriesList, CategoryItem, Title, Wrapper } from "./categories.styles"
import { useNavigate } from "react-router-dom"
import { useGetCategoriesQuery } from "../../../../reducers/slice/products/product.slice"

 

const Categories = () => {
  const navigate = useNavigate();
  const {data: categories, isLoading,} = useGetCategoriesQuery()
  console.log
  if (isLoading) return;
  return (
    <Wrapper>
      <Title>Browse By Category</Title>
      <CategoriesList>
        {categories && categories.map(category => (
          <CategoryItem key={category.id} onClick={() => navigate(`products/${category.name}`)}>
            <img src={category.iconUrl} alt={category.name + " icon"} height="30" width="30" loading="lazy"/>
            <div>{category.name}</div>
          </CategoryItem>
        ))}
        
      </CategoriesList>
    </Wrapper>
  )
}

export default Categories