import { Wrapper, FooterContent, Title, LinkList, FooterSection, DowloadSection } from "./footer.styles";
import Qr from "../../assets/images/qr.webp";

const Footer = () => {
  return (
    <Wrapper>
      <FooterContent>
          
          <FooterSection>
            <Title>Customer Care</Title>
            <LinkList>
              <li>Help center</li>
              <li>How to buy</li>
              <li>Shipping & delivery</li>
              <li>How to return</li>
              <li>Question?</li>
              <li>Contact Us</li>
            </LinkList>
          </FooterSection>

          <FooterSection>
            <Title>Vilina</Title>
            <LinkList>
              <li>Help center</li>
              <li>How to buy</li>
              <li>Shipping & delivery</li>
              <li>How to return</li>
              <li>Question?</li>
              <li>Contact Us</li>
            </LinkList>
          </FooterSection>

          

          <FooterSection>
            <Title>Follow Us</Title>
            <LinkList>
              <li>Help center</li>
              <li>How to buy</li>
              <li>Shipping & delivery</li>
              <li>How to return</li>
              <li>Question?</li>
              <li>Contact Us</li>
            </LinkList>
          </FooterSection>

          <FooterSection>
            <Title>Download Vilina App</Title>
            <DowloadSection>
              <li><img src={Qr} alt="qr code" loading="lazy" width="50" height="50" /></li>
              <li>
                <div>
                  Google Play Store
                </div>
                <div>
                  App Store
                </div>
              </li>
            </DowloadSection>
          </FooterSection>
        
    
      </FooterContent>

    </Wrapper>
  )
}

export default Footer;