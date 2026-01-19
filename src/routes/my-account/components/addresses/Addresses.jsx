import { ContentSection, SectionTitle } from "../../shared.styles"
import { AddressList, SectionHeader, AddButton, AddressCard, AddressHeader, AddressName, DefaultBadge, AddressText, AddressPhone, AddressActions, ActionLink } from './Addresses.styles';
import Modal from "../../../../components/modal/Modal";
import { useState } from "react";
import AddressForm from "./components/address-form/AddressForm";
import { useGetUserAddressesQuery } from "../../../../reducers/slice/address/address.slice";
const Addresses = () => {
  const [showAddressFormModal, setShowAddressFormModal] = useState(false);
  const [formMode, setFormMode] = useState("add");
  const [selectedAddress, setSelectedAddress] = useState(null);
  
  // Fetch addresses using RTK Query
  const { data: addresses = [], isLoading, isError, error } = useGetUserAddressesQuery();

  const handleShowAddressFormModal = (mode, address = null) => {
    setFormMode(mode);
    setSelectedAddress(address);
    setShowAddressFormModal(true);
  };

  // Loading state
  if (isLoading) {
    return (
      <ContentSection>
        <SectionHeader>
          <SectionTitle>My Addresses</SectionTitle>
        </SectionHeader>
        <p>Loading addresses...</p>
      </ContentSection>
    );
  }

  // Error state
  if (isError) {
    return (
      <ContentSection>
        <SectionHeader>
          <SectionTitle>My Addresses</SectionTitle>
        </SectionHeader>
        <p>Error loading addresses: {error?.data?.message || 'Something went wrong'}</p>
      </ContentSection>
    );
  }
  const formatAddress = (addr) => {
    return `${addr.street}, ${addr.barangay}, ${addr.city}, ${addr.postalCode}`;
  };

  return (
    <ContentSection>
      <SectionHeader>
        <SectionTitle>My Addresses</SectionTitle>
        <AddButton onClick={() => handleShowAddressFormModal("add")}>+ Add New Address</AddButton>
      </SectionHeader>
      <AddressList>
        {addresses.length === 0 ? (
          <p>No addresses found. Add your first address!</p>
        ) : (
          addresses.map(addr => (
            <AddressCard key={addr.id}>
              <AddressHeader>
                <AddressName>{addr.fullName}</AddressName>
                {addr.isDefault && <DefaultBadge>Default</DefaultBadge>}
              </AddressHeader>
              <AddressText>{formatAddress(addr)}</AddressText>
              <AddressPhone>{addr.phoneNumber}</AddressPhone>
              <AddressActions>
                <ActionLink onClick={() => handleShowAddressFormModal("edit", addr)}>
                  Edit
                </ActionLink>
                <ActionLink delete>Delete</ActionLink>
                {!addr.isDefault && <ActionLink>Set as Default</ActionLink>}
              </AddressActions>
            </AddressCard>
          ))
        )}
      </AddressList>

      {showAddressFormModal && (
        <Modal onClose={() => setShowAddressFormModal(false)} title={formMode === 'add' ? 'Add New Address' : 'Edit Address'}>
          <AddressForm 
            mode={formMode}
            editData={selectedAddress}
            onClose={() => setShowAddressFormModal(false)}
          />
        </Modal>
      )}
    </ContentSection>
  );
}

export default Addresses;