import styled from "styled-components";

export const Wrapper = styled.footer`
  padding: 2rem;
  width: 100vw;
  border-top: 1px solid black;
  background-color: black;
  color: white;
`

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  
`

export const FooterSection = styled.div`
  padding: 0rem 0.5rem;

`

export const Title = styled.h3`
  border-bottom: 0.5px solid rgb(180, 180, 180);
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
`

export const LinkList = styled.ul`
  padding: 0rem 0.5rem;

  & > li {
    font-size: var(--font-xs);
  }
`

export const DowloadSection = styled(LinkList)`
  display: flex;
  gap: 0.8rem;
`


