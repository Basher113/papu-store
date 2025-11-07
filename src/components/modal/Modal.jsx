import { ModalOverlay, ModalContent, ModalHeader, ModalTitle, ModalBody, CloseButton } from "./Modal.styles"
const Modal = ({children, onClose, title,}) => {
  console.log(title);
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal