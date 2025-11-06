import styled from "styled-components";
export const SettingsCard = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 1.5rem;
`;

export const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const SettingInfo = styled.div`
  flex: 1;
`;

export const SettingLabel = styled.div`
  font-weight: 600;
  color: #000;
  margin-bottom: 0.25rem;
`;

export const SettingDesc = styled.div`
  font-size: 0.85rem;
  color: #999;
`;

export const SettingAction = styled.button`
  background: none;
  border: 1px solid ${props => props.danger ? '#DB4444' : '#ddd'};
  color: ${props => props.danger ? '#DB4444' : '#666'};
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.danger ? '#FFF5F5' : '#f9f9f9'};
  }
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      background-color: #DB4444;
    }

    &:checked + .slider:before {
      transform: translateX(26px);
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.3s;
    border-radius: 24px;

    &:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: 0.3s;
      border-radius: 50%;
    }
  }
`;