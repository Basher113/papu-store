import { Wrapper, FormContainer, ImageContainer, LoginContentContainer, FormHeader, FormInputContainer, FormButtonContainer  } from "./login.styles";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Wrapper>
      <LoginContentContainer>
        <ImageContainer />
        <FormContainer>
          <FormHeader>
            <div>Log in to Exclusive</div>
            <p>Enter your details below</p>
          </FormHeader>
          <FormInputContainer>
              <input type="text" placeholder="Email" size={10}/>
              <input type="password" placeholder="Password" />
            </FormInputContainer>
          <FormButtonContainer>
            <Button buttonType="base">Log in</Button>
            <Link>Forget Password?</Link>
          </FormButtonContainer>
        </FormContainer>
      </LoginContentContainer>
    </Wrapper>
  )
}

export default Login