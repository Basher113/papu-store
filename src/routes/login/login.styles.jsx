import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-height: 100%;
  padding: 1em 0;
`

export const LoginContentContainer = styled.div`
  display: flex;
  height: 600px;
  
`

export const ImageContainer = styled.div`
  background-color: gray;
  flex: 1.3;

  @media (max-width: 768px) {
    display: none;
  }
`

export const FormContainer = styled.form`
  padding: 2rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 0.8;
`

export const FormHeader = styled.div`
  & > div {
    font-size: var(--font-l);
  }
`

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;  

  & > input {
    border: none;
    border-bottom: 1px solid gray;
    background: none;
    font-size: 1rem;
    padding: 1rem 1rem 0.5rem 0.3rem;

    &:focus {
      outline: 2px solid #1273c2ff;
      border-radius: 5px;
    }

    &::placeholder {
      font-size: 0.8rem;
    }

   
  }
`

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  & > button {
    flex: 0.4;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    min-width: 100px;
  }

  a {
    color: #DB4444;
  }
`