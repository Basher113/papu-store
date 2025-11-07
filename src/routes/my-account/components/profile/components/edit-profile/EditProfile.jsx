import { useState } from 'react';
import { Form, FormActions, FormGroup, FormRow, Label, Input, Select, CancelButton, SaveButton } from '../../../../shared.styles';

const EditProfile = ({ userData, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    username: userData?.username || '',
    fullName: userData?.fullName || '',
    email: userData?.email || '',
    phone: userData?.phone || '',
    dateOfBirth: userData?.dateOfBirth || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <FormGroup full>
            <Label>Username *</Label>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup full>
            <Label>Full Name *</Label>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label>Email *</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </FormGroup>
          <FormGroup>
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
          <FormGroup>
            <Label>Gender</Label>
            <Select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>Date of Birth</Label>
            <Input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </FormGroup>
        </FormRow>

        <FormActions>
          <CancelButton type="button" onClick={onClose}>
            Cancel
          </CancelButton>
          <SaveButton type="submit">
            Save Changes
          </SaveButton>
        </FormActions>
      </Form>
  );
}

export default EditProfile