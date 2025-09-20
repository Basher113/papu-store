import { useState } from "react";
import { toast } from "react-toastify";

import { Wrapper, AuthContentContainer, ImageContainer, FormContainer, FormHeader, FormInputContainer, FormButtonContainer, AuthFooter, LoginAndSignUpLink, ErrorMessage } from "../../components/auth-form/authForm.styles";
import Button from "../../components/button/Button";
import { useRegisterUserMutation } from "../../reducers/slice/api/api.slice";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const navigate = useNavigate()
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, username, password, confirmPassword} = formFields;
  const [register, {isLoading, isError, error}] = useRegisterUserMutation();

  const handleChange = (e) => {
    const {value, name} = e.target;
    setFormFields({...formFields, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register({email, username, password, confirmPassword}).unwrap();
      navigate("/login");
      toast.success("Account created successfully 🎉");
    } catch (err) {
      console.log("Register Error:", err);
    }
  }


  return (
    <Wrapper>
      <AuthContentContainer>
        <ImageContainer />
        <FormContainer onSubmit={handleSubmit}>
          <FormHeader>
            <div>Create an account</div>
            <p>Enter your details below</p>
          </FormHeader>
          {isError && 
            (<ErrorMessage>
              {error?.data?.message || "Something went wrong. Please try again."}
            </ErrorMessage>)
            }
          <FormInputContainer>
            <input onChange={handleChange} type="text" placeholder="Email address" name="email" value={email}/>
            <input onChange={handleChange} type="text" placeholder="username" name="username" value={username} />
            <input onChange={handleChange} type="password" placeholder="Password" name="password" value={password}/>
            <input onChange={handleChange} type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword}/>
          </FormInputContainer>
          <FormButtonContainer>
            <Button buttonType="base" type="submit" disabled={isLoading}>Create Account</Button>
          </FormButtonContainer>
          <AuthFooter>
            <div>Already have an account?</div>
            <LoginAndSignUpLink to="/login">Log in</LoginAndSignUpLink>
          </AuthFooter>
        </FormContainer>
      </AuthContentContainer>
    </Wrapper>
  )
}

export default SignUp