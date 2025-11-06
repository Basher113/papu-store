import { Wrapper, SidebarAvatar, SidebarUserInfo, SidebarUserName, SidebarUserEmail } from "./SidebarHeader.styles"
import { useGetCurrentUserQuery } from "../../../../reducers/slice/users/user.slice";
import Spinner from "../../../../components/spinner/Spinner";
const SidebarHeader = () => {
  const {data: currentUser, isLoading, error, } = useGetCurrentUserQuery();
  
  if (isLoading) return <Spinner />
  if (error) return <div>Error Something is Wrong</div>
  return (
    <Wrapper>
      <SidebarAvatar src="https://i.pinimg.com/1200x/2c/47/d5/2c47d5dd5b532f83bb55c4cd6f5bd1ef.jpg" alt={currentUser.name} />
      <SidebarUserInfo>
        <SidebarUserName>{currentUser.username}</SidebarUserName>
        <SidebarUserEmail>{currentUser.email}</SidebarUserEmail>
      </SidebarUserInfo>
    </Wrapper>
  )
}

export default SidebarHeader