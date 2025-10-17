import styled from "styled-components";
import Button from "../../../../components/button/Button";

export const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  display: flex;
  margin-left: auto;
  padding: 1rem 1.5rem;
`

export const Content = styled.div`
  display: grid;
  gap: 1rem;

  & > .header {
    font-weight: 700;
    letter-spacing: 0.5px;
  }
`

export const Total = styled.div`
  min-width: 300px;
  display: grid;
  gap: 1rem;
  font-size: var(--font-xs);

  & > div {
    display: flex;
    justify-content: space-between;
    padding-bottom: .5rem;

    &:not(:last-child) {
      border-bottom: 1px solid gray;
    }
    
  }
`

export const ProcessButton = styled(Button)`
  width: 80%;
  margin: auto;
  padding: 0.7rem;
  font-size: var(--font-xs);
`
