import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1rem;
`;

export const SearchBar = styled.div`
  position: relative;
  max-width: 500px;
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 3rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #DB4444;
    box-shadow: 0 0 0 3px rgba(219, 68, 68, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
  overflow-x: auto;
  padding-bottom: 0;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 4px;
  }
`;

export const Tab = styled.button`
  background: none;
  border: none;
  padding: 1rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${props => props.active ? '#DB4444' : '#666'};
  border-bottom: 3px solid ${props => props.active ? '#DB4444' : 'transparent'};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
  margin-bottom: -2px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #DB4444;
  }
`;

export const TabCount = styled.span`
  background: ${props => props.theme?.active ? '#DB4444' : '#f0f0f0'};
  color: ${props => props.theme?.active ? 'white' : '#666'};
  padding: 0.125rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  min-width: 20px;
  text-align: center;
`;

export const OrdersContent = styled.div`
  min-height: 400px;
`;

export const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const OrderCard = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border-color: #DB4444;
  }
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: #fafafa;
  border-bottom: 1px solid #f0f0f0;
`;

export const OrderInfo = styled.div``;

export const OrderId = styled.div`
  font-weight: 600;
  color: #000;
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

export const OrderDate = styled.div`
  font-size: 0.85rem;
  color: #999;
`;

export const StatusBadge = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  background: ${props => props.color}15;
  color: ${props => props.color};
`;

export const ItemsList = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ItemRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
`;

export const ItemDetails = styled.div`
  flex: 1;
`;

export const ItemName = styled.div`
  font-weight: 500;
  color: #000;
  margin-bottom: 0.25rem;
`;

export const ItemQuantity = styled.div`
  font-size: 0.85rem;
  color: #999;
`;

export const ItemPrice = styled.div`
  font-weight: 600;
  color: #000;
  font-size: 1rem;
`;

export const OrderFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #f0f0f0;
  background: #fafafa;
`;

export const OrderTotal = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const TotalLabel = styled.span`
  font-size: 0.95rem;
  color: #666;
`;

export const TotalAmount = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #DB4444;
`;

export const OrderActions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
`;

export const ActionButton = styled.button`
  background: ${props => props.primary ? '#DB4444' : 'white'};
  color: ${props => props.primary ? 'white' : '#666'};
  border: ${props => props.primary ? 'none' : '1px solid #ddd'};
  padding: 0.625rem 1.25rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.primary ? '#c23a3a' : '#f9f9f9'};
    transform: translateY(-1px);
  }
`;

export const DeadlineWarning = styled.div`
  flex: 1;
  color: #FF6B35;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '⚠️';
    font-size: 1rem;
  }
`;

export const InfoText = styled.div`
  flex: 1;
  color: #666;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: 'ℹ️';
    font-size: 1rem;
  }
`;

export const CancelReason = styled.div`
  flex: 1;
  color: #999;
  font-size: 0.85rem;
  font-style: italic;
`;

export const AdditionalInfo = styled.div`
  padding: 1rem 1.5rem;
  background: white;
  border-top: 1px solid #f0f0f0;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const InfoLabel = styled.span`
  color: #999;
  font-size: 0.85rem;
`;

export const InfoValue = styled.span`
  color: #000;
  font-weight: 500;
  font-size: 0.85rem;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`;

export const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.3;
`;

export const EmptyText = styled.h3`
  font-size: 1.25rem;
  color: #000;
  margin-bottom: 0.5rem;
`;

export const EmptySubtext = styled.p`
  color: #999;
  font-size: 0.95rem;
`;