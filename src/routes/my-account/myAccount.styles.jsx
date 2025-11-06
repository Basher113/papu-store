import styled from "styled-components";

export const Container = styled.div`
  background: #f5f5f5;
  min-height: 100vh;
  padding: 2rem 0;
`;

export const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  height: fit-content;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const MenuSection = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MenuTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: #999;
  margin-bottom: 0.75rem;
  letter-spacing: 0.5px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  margin-bottom: 0.25rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${props => props.active ? '#FFF5F5' : 'transparent'};
  color: ${props => props.active ? '#DB4444' : '#000'};

  &:hover {
    background: ${props => props.active ? '#FFF5F5' : '#f9f9f9'};
  }
`;

export const MenuIcon = styled.span`
  font-size: 1.2rem;
`;

export const MenuText = styled.span`
  font-size: 0.9rem;
  font-weight: ${props => props.active ? '600' : '500'};
`;

export const MainContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  min-height: 600px;
`;