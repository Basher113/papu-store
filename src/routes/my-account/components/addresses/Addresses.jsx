import { ContentSection, SectionTitle } from "../../shared.styles"
import { AddressList, SectionHeader, AddButton, AddressCard, AddressHeader, AddressName, DefaultBadge, AddressText, AddressPhone, AddressActions, ActionLink } from './Addresses.styles';
import Modal from "../../../../components/modal/Modal";
import { useState } from "react";
import AddressForm from "./components/address-form/AddressForm";
const Addresses = () => {
  const [showAddressFormModal, setShowAddressFormModal] = useState(false);
  const [formMode, setFormMode] = useState("add");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const addresses = [
    { id: 1, name: 'Home', address: '123 Main St, Quezon City, Metro Manila', phone: '+63 912 345 6789', isDefault: true },
    { id: 2, name: 'Office', address: '456 Business Ave, Makati City, Metro Manila', phone: '+63 912 345 6780', isDefault: false },
  ];

  const handleShowAddressFormModal = (mode, address = null) => {
    setFormMode(mode);
    setSelectedAddress(address);
    setShowAddressFormModal(true);
  };

  
  return (
    <ContentSection>
      <SectionHeader>
        <SectionTitle>My Addresses</SectionTitle>
        <AddButton onClick={() => handleShowAddressFormModal("add")}>+ Add New Address</AddButton>
      </SectionHeader>
      <AddressList>
        {addresses.map(addr => (
          <AddressCard key={addr.id}>
            <AddressHeader>
              <AddressName>{addr.name}</AddressName>
              {addr.isDefault && <DefaultBadge>Default</DefaultBadge>}
            </AddressHeader>
            <AddressText>{addr.address}</AddressText>
            <AddressPhone>{addr.phone}</AddressPhone>
            <AddressActions>
              <ActionLink onClick={() => handleShowAddressFormModal("edit", addr)}>
                Edit
              </ActionLink>
              <ActionLink delete>Delete</ActionLink>
              {!addr.isDefault && <ActionLink>Set as Default</ActionLink>}
            </AddressActions>
          </AddressCard>
        ))}
      </AddressList>

      {
        showAddressFormModal && (
          <Modal onClose={() => setShowAddressFormModal(false)} title={formMode === 'add' ? 'Add New Address' : 'Edit Address'}>
            <AddressForm 
              mode={formMode}
              editData={selectedAddress}
              onClose={() => setShowAddressFormModal(false)}
            />
          </Modal>
        )
      }
    </ContentSection>

  )
}

export default Addresses