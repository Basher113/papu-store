import styled from "styled-components";

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const AddButton = styled.button`
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


export const AddressList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

export const AddressCard = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 1.5rem;
`;

export const AddressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const AddressName = styled.h4`
  font-weight: 600;
  color: #000;
  font-size: 1rem;
`;

export const DefaultBadge = styled.span`
  background: #DB4444;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const AddressText = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
`;

export const AddressPhone = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const AddressActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ActionLink = styled.button`
  background: none;
  border: none;
  color: ${props => props.delete ? '#DB4444' : '#666'};
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: ${props => props.delete ? '#c23a3a' : '#DB4444'};
  }
`;


