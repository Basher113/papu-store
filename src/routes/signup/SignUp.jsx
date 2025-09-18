import { Wrapper, AuthContentContainer, ImageContainer, FormContainer, FormHeader, FormInputContainer, FormButtonContainer, AuthFooter, LoginAndSignUpLink } from "../../components/auth-form/authForm.styles";
import Button from "../../components/button/Button";

const SignUp = () => {
  return (
    <Wrapper>
      <AuthContentContainer>
        <ImageContainer />
        <FormContainer>
          <FormHeader>
            <div>Create an account</div>
            <p>Enter your details below</p>
          </FormHeader>
          <FormInputContainer>
              <input type="text" placeholder="username" name="username"/>
              <input type="text" placeholder="Email address" size={10} name="email"/>
              <input type="password" placeholder="Password" name="password"/>
            </FormInputContainer>
          <FormButtonContainer>
            <Button buttonType="base">Create Account</Button>
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