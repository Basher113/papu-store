import { ContentSection, SectionTitle, Divider } from "../../shared.styles";
import { SettingsCard, SettingItem, SettingInfo, SettingLabel, SettingDesc, SettingAction, ToggleSwitch  } from "./Settings.styles";
const Settings = () => {
  return (
    <ContentSection>
      <SectionTitle>Account Settings</SectionTitle>
      <SettingsCard>
        <SettingItem>
          <SettingInfo>
            <SettingLabel>Change Password</SettingLabel>
            <SettingDesc>Update your password regularly for security</SettingDesc>
          </SettingInfo>
          <SettingAction>Change</SettingAction>
        </SettingItem>
        <Divider />
        <SettingItem>
          <SettingInfo>
            <SettingLabel>Email Notifications</SettingLabel>
            <SettingDesc>Receive updates about your orders and promotions</SettingDesc>
          </SettingInfo>
          <ToggleSwitch>
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </ToggleSwitch>
        </SettingItem>
        <Divider />
        <SettingItem>
          <SettingInfo>
            <SettingLabel>SMS Notifications</SettingLabel>
            <SettingDesc>Get delivery updates via SMS</SettingDesc>
          </SettingInfo>
          <ToggleSwitch>
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </ToggleSwitch>
        </SettingItem>
        <Divider />
        <SettingItem>
          <SettingInfo>
            <SettingLabel>Delete Account</SettingLabel>
            <SettingDesc>Permanently delete your account and data</SettingDesc>
          </SettingInfo>
          <SettingAction danger>Delete</SettingAction>
        </SettingItem>
      </SettingsCard>
    </ContentSection>
  )
}

export default Settings