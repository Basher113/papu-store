import { Container, ContentWrapper, IconWrapper, CheckmarkCircle, Checkmark, Title, Subtitle, OrderDetailsCard, OrderDetailRow, Label, Value, Message, ButtonGroup, PrimaryButton, SecondaryButton, SupportText, SupportLink } from './orderConfirmation.styles';
import { useNavigate } from 'react-router-dom';
import { BUTTON_TYPE_CLASSES } from '../../components/button/Button';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const sessionId = sessionStorage.getItem("sessionId"); // Id of checkout session id
  const orderId = sessionStorage.getItem("orderId");
  console.log(sessionId, "sessionId");
  console.log(orderId, "orderId");
  const id = sessionId ? sessionId : orderId ? orderId : null;

  if (!sessionId && !orderId) {
    return (

      <Container>
      <ContentWrapper>
        

        <Title>You have not made an order lately</Title>
        <Subtitle></Subtitle>

        <Message>
          You may now go back to the shop
        </Message>

        <ButtonGroup>
          <PrimaryButton onClick={() => navigate("/")}>
            Continue Shopping
          </PrimaryButton>
        </ButtonGroup>

        <SupportText>
          Need help? <SupportLink href="/contact">Contact our support team</SupportLink>
        </SupportText>
      </ContentWrapper>
    </Container>

    )
  }
  return (
    <Container>
      <ContentWrapper>
        <IconWrapper>
          <CheckmarkCircle>
            <Checkmark>✓</Checkmark>
          </CheckmarkCircle>
        </IconWrapper>

        <Title>Thank You for Your Order!</Title>
        <Subtitle>Your order has been confirmed and is being processed</Subtitle>

        <OrderDetailsCard>
          <OrderDetailRow>
            <Label>{sessionId ? "Session Number" : "Order Number"}:</Label>
            <Value>#{sessionId ? sessionId : orderId}</Value>
          </OrderDetailRow>
          <OrderDetailRow>
            <Label>Estimated Delivery:</Label>
            <Value>3-5 business days</Value>
          </OrderDetailRow>
        </OrderDetailsCard>

        <Message>
          We've sent a confirmation email with your order details. 
          You can track your order status anytime from your account dashboard.
        </Message>

        <ButtonGroup>
          <PrimaryButton onClick={() => navigate(`/orders/${id}`)}>
            View Order Details
          </PrimaryButton>
          <SecondaryButton buttonType={BUTTON_TYPE_CLASSES.helper} onClick={() => navigate('/')}>
            Continue Shopping
          </SecondaryButton>
        </ButtonGroup>

        <SupportText>
          Need help? <SupportLink href="/contact">Contact our support team</SupportLink>
        </SupportText>
      </ContentWrapper>
    </Container>
  );
};


export default OrderConfirmation;