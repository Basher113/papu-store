import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>About Us</HeroTitle>
          <HeroSubtitle>
            Your trusted online shopping destination for quality products and exceptional service
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <Container>
          <SectionTitle>Our Story</SectionTitle>
          <StoryText>
            Founded in 2020, we started with a simple mission: to make online shopping 
            accessible, reliable, and enjoyable for everyone. What began as a small startup 
            has grown into a trusted e-commerce platform serving thousands of satisfied customers.
          </StoryText>
          <StoryText>
            We believe in providing not just products, but experiences. Every item in our 
            catalog is carefully selected to ensure quality, value, and customer satisfaction. 
            Our team works tirelessly to bring you the best deals and the latest products.
          </StoryText>

          <ValuesGrid>
            <ValueCard>
              <ValueIcon>🎯</ValueIcon>
              <ValueTitle>Our Mission</ValueTitle>
              <ValueText>
                To provide a seamless shopping experience with quality products, 
                competitive prices, and outstanding customer service.
              </ValueText>
            </ValueCard>

            <ValueCard>
              <ValueIcon>👁️</ValueIcon>
              <ValueTitle>Our Vision</ValueTitle>
              <ValueText>
                To become the most trusted and customer-centric e-commerce platform 
                in the region, setting new standards for online shopping.
              </ValueText>
            </ValueCard>

            <ValueCard>
              <ValueIcon>💎</ValueIcon>
              <ValueTitle>Our Values</ValueTitle>
              <ValueText>
                Integrity, customer-first mindset, innovation, and commitment to 
                excellence in everything we do.
              </ValueText>
            </ValueCard>
          </ValuesGrid>

          <SectionTitle>Why Choose Us?</SectionTitle>
          <FeaturesList>
            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureContent>
                <FeatureTitle>Quality Guarantee</FeatureTitle>
                <FeatureDescription>
                  Every product is verified for quality and authenticity
                </FeatureDescription>
              </FeatureContent>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureContent>
                <FeatureTitle>Fast Delivery</FeatureTitle>
                <FeatureDescription>
                  Quick and reliable shipping to your doorstep
                </FeatureDescription>
              </FeatureContent>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureContent>
                <FeatureTitle>Secure Payments</FeatureTitle>
                <FeatureDescription>
                  Multiple payment options with bank-level security
                </FeatureDescription>
              </FeatureContent>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureContent>
                <FeatureTitle>24/7 Support</FeatureTitle>
                <FeatureDescription>
                  Our customer service team is always here to help
                </FeatureDescription>
              </FeatureContent>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureContent>
                <FeatureTitle>Easy Returns</FeatureTitle>
                <FeatureDescription>
                  Hassle-free return and refund policy
                </FeatureDescription>
              </FeatureContent>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureContent>
                <FeatureTitle>Best Prices</FeatureTitle>
                <FeatureDescription>
                  Competitive pricing and regular discounts
                </FeatureDescription>
              </FeatureContent>
            </FeatureItem>
          </FeaturesList>

          <StatsSection>
            <StatCard>
              <StatNumber>50K+</StatNumber>
              <StatLabel>Happy Customers</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>10K+</StatNumber>
              <StatLabel>Products</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>99%</StatNumber>
              <StatLabel>Satisfaction Rate</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Support</StatLabel>
            </StatCard>
          </StatsSection>
        </Container>
      </ContentSection>
    </AboutContainer>
  );
};

export default About

// ============================================
// ABOUT PAGE STYLED COMPONENTS - About.styles.js
// ============================================

const AboutContainer = styled.div`
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

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 2rem;
  margin-top: 3rem;

  &:first-child {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const StoryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem 0;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ValueCard = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const ValueIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #DB4444;
  margin-bottom: 1rem;
`;

const ValueText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const FeatureIcon = styled.div`
  width: 32px;
  height: 32px;
  background: #DB4444;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.25rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.5;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  padding: 3rem;
  background: #f9f9f9;
  border-radius: 12px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #DB4444;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #666;
  font-weight: 500;
`;
