import styled from 'styled-components';

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message, confirmText = "Confirm", cancelText = "Cancel", isDestructive = false }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        
        <ModalBody>
          <ModalMessage>{message}</ModalMessage>
        </ModalBody>
        
        <ModalFooter>
          <CancelButton onClick={onClose}>
            {cancelText}
          </CancelButton>
          <ConfirmButton destructive={isDestructive} onClick={onConfirm}>
            {confirmText}
          </ConfirmButton>
        </ModalFooter>
      </ModalContainer>
    </Overlay>
  );
};

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
`;

const ModalBody = styled.div`
  padding: 24px;
`;

const ModalMessage = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
`;

const ModalFooter = styled.div`
  padding: 16px 24px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  
  &:hover {
    opacity: 0.9;
  }
`;

const CancelButton = styled(Button)`
  background-color: #f3f4f6;
  color: #374151;
  
  &:hover {
    background-color: #e5e7eb;
  }
`;

const ConfirmButton = styled(Button)`
  background-color: ${props => props.destructive ? '#ef4444' : '#3b82f6'};
  color: white;
  
  &:hover {
    background-color: ${props => props.destructive ? '#dc2626' : '#2563eb'};
  }
`;

export default ConfirmModal;