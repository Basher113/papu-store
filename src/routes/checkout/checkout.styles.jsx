import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 80vh;
  justify-content: space-evenly;
  padding: 5rem;
`

export const BillingDetailsForm = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`

export const BillingDetailsInputs = styled.div`
  flex: 0.5;
  display: grid;
`

export const FormTitle = styled.h1`
  font-size: var(--font-m);
  font-weight: 500;
  margin-bottom: 2rem;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  & > label {
    font-size: var(--font-xs);
    color: rgba(0, 0, 0, 0.70);
  }

  & > input {
    border: none;
    background-color: #ecececff;
    padding: 0.4rem;
    
    &:focus {
      outline: None;
    }
  }

  &.checkbox { // Checkbox style
    flex-direction: row;
    gap: 1rem;
    & > label {
      font-size: var(--font-xs);
      color: black;
      
    }
  }

  
`

export const OrderInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: var(--font-xs);

  & > Button {
    width: 50%;
    padding: 0.8rem;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PaymentOption = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  & > img {
    margin-left: auto; 
  }
  
  & > label {
    font-size: var(--font-s);
    cursor: pointer;
    display: flex;

    & > input[type="radio"] {
      margin-right: 0.5rem;
      cursor: pointer;
    }
  }
`



