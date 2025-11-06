import { ContentSection, SectionTitle } from "../../shared.styles"
import { AddressList, SectionHeader, AddButton, AddressCard, AddressHeader, AddressName, DefaultBadge, AddressText, AddressPhone, AddressActions, ActionLink } from './Addresses.styles';

const Addresses = () => {

  const addresses = [
    { id: 1, name: 'Home', address: '123 Main St, Quezon City, Metro Manila', phone: '+63 912 345 6789', isDefault: true },
    { id: 2, name: 'Office', address: '456 Business Ave, Makati City, Metro Manila', phone: '+63 912 345 6780', isDefault: false },
  ];
  
  return (
    <ContentSection>
      <SectionHeader>
        <SectionTitle>My Addresses</SectionTitle>
        <AddButton>+ Add New Address</AddButton>
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
              <ActionLink>Edit</ActionLink>
              <ActionLink delete>Delete</ActionLink>
              {!addr.isDefault && <ActionLink>Set as Default</ActionLink>}
            </AddressActions>
          </AddressCard>
        ))}
      </AddressList>
    </ContentSection>
  )
}

export default Addresses