import styled from 'styled-components';
import Button from '../../components/button/Button';


export const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  background: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

export const IconWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const CheckmarkCircle = styled.div`
  width: 100px;
  height: 100px;
  background: #DB4444;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: scaleIn 0.5s ease-out;

  @keyframes scaleIn {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const Checkmark = styled.span`
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #718096;
  margin-bottom: 2rem;
`;

export const OrderDetailsCard = styled.div`
  background: #f7fafc;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid #e2e8f0;
`;

export const OrderDetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.span`
  color: #718096;
  font-weight: 500;
`;

export const Value = styled.span`
  color: #2d3748;
  font-weight: 600;
`;

export const Message = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 0.95rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;



export const PrimaryButton = styled(Button)`

  flex: 1;
  &:hover {
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
  }
`;

export const SecondaryButton = styled(Button)`
  flex: 1;
`;

export const SupportText = styled.p`
  color: #a0aec0;
  font-size: 0.875rem;
`;

export const SupportLink = styled.a`
  color:  #DB4444;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;