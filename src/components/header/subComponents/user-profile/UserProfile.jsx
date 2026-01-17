import { useRef, useState, useEffect } from "react";
import profileSvg from "../../../../assets/icons/profile.svg";
import { useLogoutUserMutation } from "../../../../reducers/slice/users/user.slice";
import { toast } from "react-toastify";
import { DropDownContent, DropDownContents, Wrapper } from "./userProfile.styles";
import { useNavigate } from "react-router-dom";
const UserProfile = () => {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [dropdownIsVisible, setDropdownIsVisible] = useState(false)
  const [logout] = useLogoutUserMutation();
  const toggleDropdownHandler = () => {
    setDropdownIsVisible(!dropdownIsVisible)
  }

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      toast.success("logout successfully!")
    } catch (error) {
      console.log("Error logout", error)
    }
  }

 useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownIsVisible && 
      dropdownRef.current && 
      !dropdownRef.current.contains(event.target)
    ) {
      setDropdownIsVisible(false);
    }
  };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [dropdownIsVisible]);

  return (

    <Wrapper ref={dropdownRef}>
      <img src={profileSvg} onClick={toggleDropdownHandler}/>

      {
        dropdownIsVisible && (
          <DropDownContents >
            <DropDownContent onClick={() => navigate("user?type=profile")}>
              My Account
            </DropDownContent>

            <DropDownContent onClick={() => navigate("user?type=purchase")}>
              My Purchase
            </DropDownContent>

            <DropDownContent onClick={handleLogout}>
              Logout
            </DropDownContent>
          </DropDownContents>
        )
      }
    </Wrapper>
    
  )
}

export default UserProfile