import { useGetCurrentUserQuery } from "../../../../reducers/slice/users/user.slice";
import { ContentSection, SectionTitle, Divider } from "../../shared.styles";
import { ProfileCard, ProfileHeader, Avatar, ProfileInfo, UserName, UserEmail, EditButton, InfoGrid, InfoItem, InfoLabel, InfoValue } from "./profile.styles";
import Spinner from "../../../../components/spinner/Spinner"
const Profile = () => {
  const {data: currentUser, isLoading, error, } = useGetCurrentUserQuery();

  if (isLoading) return <Spinner />
  if (error) return <div>Something Went Wrong</div>
  return (
    <ContentSection>
    <SectionTitle>My Profile</SectionTitle>
    <ProfileCard>
      <ProfileHeader>
        <Avatar src={currentUser.avatar} alt={currentUser.username} />
        <ProfileInfo>
          <UserName>{currentUser.username}</UserName>
          <UserEmail>{currentUser.email}</UserEmail>
        </ProfileInfo>
        <EditButton>Edit Profile</EditButton>
      </ProfileHeader>
      <Divider />
      <InfoGrid>
        <InfoItem>
          <InfoLabel>Username</InfoLabel>
          <InfoValue>{currentUser.username}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Email</InfoLabel>
          <InfoValue>{currentUser.email}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Phone Number</InfoLabel>
          <InfoValue>{currentUser.phone}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Gender</InfoLabel>
          <InfoValue>Male</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Date of Birth</InfoLabel>
          <InfoValue>January 1, 1990</InfoValue>
        </InfoItem>
      </InfoGrid>
    </ProfileCard>
  </ContentSection>
  )
}

export default Profile