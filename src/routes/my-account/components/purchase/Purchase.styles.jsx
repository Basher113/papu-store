import styled from "styled-components";


export const OrderTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #f0f0f0;
  overflow-x: auto;
`;

export const OrderTab = styled.button`
  background: none;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => props.active ? '#DB4444' : '#666'};
  border-bottom: 2px solid ${props => props.active ? '#DB4444' : 'transparent'};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
  margin-bottom: -2px;

  &:hover {
    color: #DB4444;
  }
`;

export const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const OrderCard = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 1.5rem;
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const OrderId = styled.span`
  font-weight: 600;
  color: #000;
`;

export const OrderStatus = styled.span`
  padding: 0.375rem 0.875rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  background: ${props => {
    switch(props.status) {
      case 'Delivered': return '#E8F5E9';
      case 'In Transit': return '#E3F2FD';
      case 'Processing': return '#FFF3E0';
      default: return '#F5F5F5';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'Delivered': return '#2E7D32';
      case 'In Transit': return '#1565C0';
      case 'Processing': return '#E65100';
      default: return '#666';
    }
  }};
`;

export const OrderDetails = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const OrderDetail = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const DetailLabel = styled.span`
  color: #999;
  font-size: 0.9rem;
`;

export const DetailValue = styled.span`
  color: #000;
  font-weight: 500;
  font-size: 0.9rem;
`;

export const OrderActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ActionButton = styled.button`
  background: ${props => props.primary ? '#DB4444' : 'white'};
  color: ${props => props.primary ? 'white' : '#DB4444'};
  border: ${props => props.primary ? 'none' : '1px solid #DB4444'};
  padding: 0.625rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.primary ? '#c23a3a' : '#FFF5F5'};
  }
`;