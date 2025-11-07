import styled from "styled-components";

export const ContentSection = styled.div``

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1.5rem;
`;

export const Divider = styled.div`
  height: 1px;
  background: #f0f0f0;
  margin: 1.5rem 0;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(2px);
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: ${props => props.small ? '500px' : '700px'};
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #f0f0f0;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #999;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover {
    color: #000;
  }
`;

export const ModalBody = styled.div`
  padding: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: ${props => props.full ? '1 / -1' : 'auto'};
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.error ? '#DB4444' : '#ddd'};
  border-radius: 6px;
  font-size: 0.95rem;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? '#DB4444' : '#DB4444'};
    box-shadow: 0 0 0 3px ${props => props.error ? 'rgba(219, 68, 68, 0.1)' : 'rgba(219, 68, 68, 0.1)'};
  }

  &::placeholder {
    color: #999;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  font-family: inherit;
  resize: vertical;
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

export const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  background: white;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: #DB4444;
    box-shadow: 0 0 0 3px rgba(219, 68, 68, 0.1);
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #DB4444;
`;

export const CheckboxLabel = styled.label`
  font-size: 0.9rem;
  color: #000;
  cursor: pointer;
  user-select: none;
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const ErrorText = styled.span`
  color: #DB4444;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  font-weight: 500;
`;

export const HelperText = styled.span`
  color: #999;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;

export const FormActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
  margin-top: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.75rem 2rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
`;

export const SaveButton = styled(Button)`
  background: #DB4444;
  color: white;

  &:hover {
    background: #c23a3a;
  }
`;

export const CancelButton = styled(Button)`
  background: white;
  color: #666;
  border: 1px solid #ddd;

  &:hover {
    background: #f9f9f9;
  }
`;
