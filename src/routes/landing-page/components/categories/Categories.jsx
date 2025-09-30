import AppliancesIcon from "../../../../assets/icons/appliances.svg"
import GamingIcon from "../../../../assets/icons/gaming.svg"
import HeadphonesIcon from "../../../../assets/icons/headphones.svg"
import PhoneIcon from "../../../../assets/icons/phone.svg"
import LaptopIcon from "../../../../assets/icons/laptop.svg"


import { CategoriesList, CategoryItem, Title, Wrapper } from "./categories.styles"
import { useNavigate } from "react-router-dom"

 const categories = [
    {
      id: 1,
      title: "phones",
      icon: PhoneIcon
    },
    {
      id: 2,
      title: "gaming",
      icon: GamingIcon
    },
    {
      id: 3,
      title: "computer",
      icon: LaptopIcon
    },
    {
      id: 5,
      title: "camera",
      icon: HeadphonesIcon
    },
    {
      id: 4,
      title: "accessories",
      icon: AppliancesIcon
    }
  ] 

const Categories = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Title>Browse By Category</Title>
      <CategoriesList>
        {categories.map(category => (
          <CategoryItem key={category.id} onClick={() => navigate(`products/${category.title}`)}>
            <img src={category.icon} alt="phone icon" height="30" width="30" loading="lazy"/>
            <div>{category.title}</div>
          </CategoryItem>
        ))}
        
      </CategoriesList>
    </Wrapper>
  )
}

export default Categories