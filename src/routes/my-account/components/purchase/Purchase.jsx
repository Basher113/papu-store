import { ContentSection, SectionTitle } from "../../shared.styles";
import { OrderTabs, OrderTab, OrderList, OrderCard, OrderId, OrderStatus, OrderHeader, OrderDetails, OrderDetail, DetailLabel, DetailValue, OrderActions, ActionButton } from "./purchase.styles";
const Purchase = () => {
  const orders = [
    { id: '12345', date: '2024-10-28', status: 'Delivered', total: '₱1,299', items: 2 },
    { id: '12344', date: '2024-10-25', status: 'In Transit', total: '₱2,499', items: 1 },
    { id: '12343', date: '2024-10-20', status: 'Processing', total: '₱899', items: 3 },
  ];
  return (
    <ContentSection>
      <SectionTitle>My Orders</SectionTitle>
      <OrderTabs>
        <OrderTab active>All</OrderTab>
        <OrderTab>To Pay</OrderTab>
        <OrderTab>To Ship</OrderTab>
        <OrderTab>To Receive</OrderTab>
        <OrderTab>Completed</OrderTab>
      </OrderTabs>
      <OrderList>
        {orders.map(order => (
          <OrderCard key={order.id}>
            <OrderHeader>
              <OrderId>Order #{order.id}</OrderId>
              <OrderStatus status={order.status}>{order.status}</OrderStatus>
            </OrderHeader>
            <OrderDetails>
              <OrderDetail>
                <DetailLabel>Date:</DetailLabel>
                <DetailValue>{order.date}</DetailValue>
              </OrderDetail>
              <OrderDetail>
                <DetailLabel>Items:</DetailLabel>
                <DetailValue>{order.items} item(s)</DetailValue>
              </OrderDetail>
              <OrderDetail>
                <DetailLabel>Total:</DetailLabel>
                <DetailValue>{order.total}</DetailValue>
              </OrderDetail>
            </OrderDetails>
            <OrderActions>
              <ActionButton primary>View Details</ActionButton>
              {order.status === 'Delivered' && <ActionButton>Buy Again</ActionButton>}
            </OrderActions>
          </OrderCard>
        ))}
      </OrderList>
    </ContentSection>
  )
}

export default Purchase