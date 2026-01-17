import { useGetCurrentUserQuery } from "../../../../reducers/slice/users/user.slice";
import { ContentSection, SectionTitle, Divider } from "../../shared.styles";
import { ProfileCard, ProfileHeader, Avatar, ProfileInfo, UserName, EditButton, InfoGrid, InfoItem, InfoLabel, InfoValue } from "./profile.styles";
import Spinner from "../../../../components/spinner/Spinner"
import { useState } from "react";
import EditProfile from "./components/edit-profile/EditProfile";
import Modal from "../../../../components/modal/Modal";
const Profile = () => {
  const {data: currentUser, isLoading, error, } = useGetCurrentUserQuery();
  const [showEditProfile, setShowEditProfile] = useState(false);
  if (isLoading) return <Spinner />
  if (error) return <div>Something Went Wrong</div>
  return (
    <ContentSection>
    <SectionTitle>My Profile</SectionTitle>
    <ProfileCard>
      <ProfileHeader>
        
        <ProfileInfo>
          <Avatar src="https://i.pinimg.com/1200x/2c/47/d5/2c47d5dd5b532f83bb55c4cd6f5bd1ef.jpg" alt={currentUser.username} />
          <UserName>{currentUser.username}</UserName>
        </ProfileInfo>
        <EditButton onClick={() => setShowEditProfile(true)}>Edit Profile</EditButton>
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
    {showEditProfile && <Modal onClose={() => setShowEditProfile(false)} title="Edit Profile">
        <EditProfile userData={currentUser} onClose={() => setShowEditProfile(false)}/>
    </Modal>}
    
  </ContentSection>
  )
}

export default Profile