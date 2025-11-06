import styled from "styled-components";
export const ProfileCard = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 2rem;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  flex: 1;
`;

export const UserName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.25rem;
`;

export const UserEmail = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

export const EditButton = styled.button`
  background: #DB4444;
  color: white;
  border: none;
  padding: 0.625rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #c23a3a;
  }
`;



export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div``;

export const InfoLabel = styled.div`
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 0.5rem;
`;

export const InfoValue = styled.div`
  font-size: 1rem;
  color: #000;
  font-weight: 500;
`;