import styled from "styled-components";

export const Wrapper = styled.div`
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