import { useState } from "react";
import { Form, FormActions, FormRow, FormGroup, Label, Input, CancelButton, SaveButton, Checkbox, CheckboxLabel, TextArea, CheckboxWrapper } from "../../../../shared.styles";
const AddressForm = ({ mode, onClose, editData = null }) => {
  const [formData, setFormData] = useState({
    name: editData?.name || '',
    fullName: editData?.fullName || '',
    phone: editData?.phone || '',
    address: editData?.address || '',
    city: editData?.city || '',
    province: editData?.province || '',
    postalCode: editData?.postalCode || '',
    isDefault: editData?.isDefault || false,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "edit") {
      // do the edit
    } else if (mode === "add") {
      // add address
    }
    onClose();
  };
  return (
    <Form onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <Label>Address Label *</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Home, Office"
                />
              </FormGroup>
              <FormGroup>
                <Label>Full Name *</Label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Recipient's full name"
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup full>
                <Label>Phone Number *</Label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+63 912 345 6789"
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup full>
                <Label>Street Address *</Label>
                <TextArea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="House No., Building, Street Name"
                  rows="3"
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label>City *</Label>
                <Input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Quezon City"
                />
              </FormGroup>
              <FormGroup>
                <Label>Province *</Label>
                <Input
                  type="text"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Metro Manila"
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label>Postal Code *</Label>
                <Input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 1100"
                />
              </FormGroup>
            </FormRow>

            <CheckboxWrapper>
              <Checkbox
                type="checkbox"
                name="isDefault"
                checked={formData.isDefault}
                onChange={handleChange}
                id="isDefault"
              />
              <CheckboxLabel htmlFor="isDefault">
                Set as default address
              </CheckboxLabel>
            </CheckboxWrapper>

            <FormActions>
              <CancelButton type="button" onClick={onClose}>
                Cancel
              </CancelButton>
              <SaveButton type="submit">
                {editData ? 'Update Address' : 'Add Address'}
              </SaveButton>
            </FormActions>
          </Form>
  )
}

export default AddressForm