import { Wrapper, AuthContentContainer, ImageContainer, FormContainer, FormHeader, FormInputContainer, FormButtonContainer, ForgetPasswordLink, AuthFooter, LoginAndSignUpLink } from "../../components/auth-form/authForm.styles";
import Button from "../../components/button/Button";
const Login = () => {
  return (
    <Wrapper>
      <AuthContentContainer>
        <ImageContainer />
        <FormContainer>
          <FormHeader>
            <div>Log in to Exclusive</div>
            <p>Enter your details below</p>
          </FormHeader>
          <FormInputContainer>
            <input type="text" placeholder="Email" size={10}/>
            <input type="password" placeholder="Password" />
            <ForgetPasswordLink>Forget Password?</ForgetPasswordLink>
          </FormInputContainer>
          <FormButtonContainer>
            <Button buttonType="base">Log in</Button>
            <Button buttonType="helper">Log in with Google</Button>
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