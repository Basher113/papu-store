import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../reducers/slice/api/api.slice";

import urlSecrets from "../../secrets/url.secret";

import { Wrapper, AuthContentContainer, ImageContainer, FormContainer, FormHeader, FormInputContainer, FormButtonContainer, ForgetPasswordLink, AuthFooter, LoginAndSignUpLink, ErrorMessage } from "../../components/auth-form/authForm.styles";
import Button from "../../components/button/Button";
const defaultFormFields = {
  email: "",
  password: "",
}
const Login = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const [login, {isLoading, isError, error}] = useLoginUserMutation();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formFields).unwrap();
      navigate("/");
    } catch (error) {
      console.log("Login Error:", error);
    }
  }

  const loginWithGoogle = () => {
    const loginWithGoogleUrl = `${urlSecrets.serverUrl}auth/google`
    window.location.href = loginWithGoogleUrl;
  }

  return (
    <Wrapper>
      <AuthContentContainer>
        <ImageContainer />
        <FormContainer method="POST" onSubmit={handleSubmit}>
          <FormHeader>
            <div>Log in to Exclusive</div>
            <p>Enter your details below</p>
          </FormHeader>
          {isError && 
            (<ErrorMessage>
              {error?.data?.message || "Something went wrong. Please try again."}
            </ErrorMessage>)
          }
          <FormInputContainer>
            <input onChange={handleChange} type="text" placeholder="Email" name="email" value={email} />
            <input onChange={handleChange} type="password" placeholder="Password" name="password" value={password} />
            <ForgetPasswordLink>Forget Password?</ForgetPasswordLink>
          </FormInputContainer>
          <FormButtonContainer>
            <Button buttonType="base" disabled={isLoading}>Log in</Button>
            <Button buttonType="helper" type="button" onClick={loginWithGoogle}>Log in with Google</Button>
          </FormButtonContainer>
          <AuthFooter>
            <div>Don't have an account?</div>
            <LoginAndSignUpLink to="/sign-up">Sign up</LoginAndSignUpLink>
          </AuthFooter>
          
        </FormContainer>
      </AuthContentContainer>
    </Wrapper>
  )
}

export default Login