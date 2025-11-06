import { Container, PageWrapper, Sidebar, MenuSection, MenuItem, MenuIcon, MenuText, MenuTitle, MainContent } from './myAccount.styles';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Addresses from "./components/addresses/Addresses"
import Purchase from './components/purchase/Purchase';
import Settings from './components/settings/Settings';
import SidebarHeader from './components/sidebar-header/SidebarHeader';

const MyAccount = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams(); // eslint-disable-line
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const type = searchParams.get("type");
    setActiveSection(type)
  }, [searchParams]);

  const handleSideBar = (type) => {
    navigate(`?type=${type}`);
    setActiveSection(type);
  }

  

  const renderContent = () => { // eslint-disable-line
    switch(activeSection) {
      case "profile":
        return <Profile />
      case "addresses":
        return <Addresses />
      case 'purchase':
        return <Purchase />;
      case 'settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <PageWrapper>
        <Sidebar>
          <SidebarHeader />
          
          <MenuSection>
            <MenuTitle>MY ACCOUNT</MenuTitle>
            <MenuItem active={activeSection === 'profile'} onClick={() => { handleSideBar("profile") }}>
              <MenuIcon>👤</MenuIcon>
              <MenuText>My Profile</MenuText>
            </MenuItem>
            <MenuItem active={activeSection === 'addresses'} onClick={() => { handleSideBar("addresses")}}>
              <MenuIcon>📍</MenuIcon>
              <MenuText>Address Book</MenuText>
            </MenuItem>
          </MenuSection>

          <MenuSection>
            <MenuTitle>MY Purchase</MenuTitle>
            <MenuItem active={activeSection === 'purchase'} onClick={() => handleSideBar("purchase")}>
              <MenuIcon>📦</MenuIcon>
              <MenuText>My Purchase</MenuText>
            </MenuItem>
          </MenuSection>

          <MenuSection>
            <MenuTitle>SETTINGS</MenuTitle>
            <MenuItem active={activeSection === 'settings'} onClick={() => handleSideBar('settings')}>
              <MenuIcon>⚙️</MenuIcon>
              <MenuText>Account Settings</MenuText>
            </MenuItem>
            <MenuItem onClick={() => console.log('Logout')}>
              <MenuIcon>🚪</MenuIcon>
              <MenuText>Logout</MenuText>
            </MenuItem>
          </MenuSection>
        </Sidebar>

        <MainContent>
          {renderContent()}
        </MainContent>
      </PageWrapper>
    </Container>
  );
};





export default MyAccount;