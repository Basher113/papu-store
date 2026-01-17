const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <ContactContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Contact Us</HeroTitle>
          <HeroSubtitle>
            We'd love to hear from you. Get in touch with us!
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <Container>
          <ContactGrid>
            <ContactFormSection>
              <FormTitle>Send us a Message</FormTitle>
              <ContactForm onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Full Name *</Label>
                  <Input type="text" placeholder="John Doe" required />
                </FormGroup>

                <FormGroup>
                  <Label>Email Address *</Label>
                  <Input type="email" placeholder="john@example.com" required />
                </FormGroup>

                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input type="tel" placeholder="+63 912 345 6789" />
                </FormGroup>

                <FormGroup>
                  <Label>Subject *</Label>
                  <Input type="text" placeholder="How can we help you?" required />
                </FormGroup>

                <FormGroup>
                  <Label>Message *</Label>
                  <TextArea 
                    rows="6" 
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </FormGroup>

                <SubmitButton type="submit">Send Message</SubmitButton>
              </ContactForm>
            </ContactFormSection>

            <ContactInfoSection>
              <InfoCard>
                <InfoIcon>📍</InfoIcon>
                <InfoTitle>Visit Us</InfoTitle>
                <InfoText>
                  Garden Mosque, Taguig Metro Manila
                </InfoText>
              </InfoCard>

              <InfoCard>
                <InfoIcon>📞</InfoIcon>
                <InfoTitle>Call Us</InfoTitle>
                <InfoText>
                  Phone: +63 2 1234 5678<br />
                  Mobile: +63 912 345 6789<br />
                  Mon-Fri: 9AM - 6PM
                </InfoText>
              </InfoCard>

              <InfoCard>
                <InfoIcon>✉️</InfoIcon>
                <InfoTitle>Email Us</InfoTitle>
                <InfoText>
                  General: papustore@yourstore.com<br />
                  Support: papustoresupport@yourstore.com<br />
                  Sales: papustoresales@yourstore.com
                </InfoText>
              </InfoCard>

              <InfoCard>
                <InfoIcon>💬</InfoIcon>
                <InfoTitle>Live Chat</InfoTitle>
                <InfoText>
                  Chat with our support team<br />
                  Available 24/7<br />
                  <ChatLink href="#chat">Start Chat →</ChatLink>
                </InfoText>
              </InfoCard>

              <SocialSection>
                <SocialTitle>Follow Us</SocialTitle>
                <SocialLinks>
                  <SocialLink href="#facebook">Facebook</SocialLink>
                  <SocialLink href="#instagram">Instagram</SocialLink>
                  <SocialLink href="#twitter">Twitter</SocialLink>
                  <SocialLink href="#linkedin">LinkedIn</SocialLink>
                </SocialLinks>
              </SocialSection>
            </ContactInfoSection>
          </ContactGrid>

          <MapSection>
            <MapTitle>Find Us Here</MapTitle>
            {/* Option 1: Google Maps Embed (Easy - No API Key needed) */}
            <MapContainer>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5779.000657815099!2d121.0518462765008!3d14.50039597951919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf3f1632c11f%3A0xf6e92cbb6710749d!2sGarden%20Mosque!5e1!3m2!1sen!2sph!4v1768637792980!5m2!1sen!2sph" width="100%" height="100%" style={{border: 0, borderRadius: "1rem"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </MapContainer>
          </MapSection>
        </Container>
      </ContentSection>
    </ContactContainer>
  );
};

export default Contact

import styled from "styled-components";

const ContactContainer = styled.div`
  min-height: 100vh;
  background: #fff;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #DB4444 0%, #c23a3a 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.95;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContentSection = styled.div`
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;


const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactFormSection = styled.div``;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1.5rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.875rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #DB4444;
    box-shadow: 0 0 0 3px rgba(219, 68, 68, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 0.875rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #DB4444;
    box-shadow: 0 0 0 3px rgba(219, 68, 68, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: #DB4444;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #c23a3a;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(219, 68, 68, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ContactInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoCard = styled.div`
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 12px;
  border-left: 4px solid #DB4444;
`;

const InfoIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const InfoTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const ChatLink = styled.a`
  color: #DB4444;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  margin-top: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialSection = styled.div`
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 12px;
  text-align: center;
`;

const SocialTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  padding: 0.5rem 1rem;
  background: #DB4444;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s;

  &:hover {
    background: #c23a3a;
    transform: translateY(-2px);
  }
`;

const MapSection = styled.div`
  margin-top: 2rem;
`;

const MapTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1.5rem;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 400px;
  background: #f0f0f0;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ddd;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const MapIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`;

const MapText = styled.p`
  color: #999;
  font-size: 1rem;
`;
