import { useState } from 'react';
import { Container,
  Header,Title, SearchBar, SearchIcon, SearchInput,
  TabsContainer, Tab, TabCount, OrdersContent,
  OrdersList, OrderCard, OrderHeader, OrderInfo,
  OrderId, OrderDate, StatusBadge, ItemsList, ItemRow,
  ItemImage, ItemDetails, ItemName, ItemQuantity, ItemPrice, 
  OrderFooter, OrderTotal, OrderActions, TotalLabel, TotalAmount, ActionButton, DeadlineWarning, InfoText, CancelReason, AdditionalInfo,
  InfoItem, InfoValue, InfoLabel, EmptyIcon, EmptyState, EmptySubtext, EmptyText
   } from './purchase.styles';

const Purchase = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock orders data with different statuses
  const allOrders = [
    { 
      id: '12345', 
      date: '2024-11-05', 
      status: 'delivered', 
      total: '₱1,299', 
      items: [
        { name: 'Wireless Headphones', quantity: 1, price: '₱1,299', image: 'https://via.placeholder.com/80' }
      ],
      trackingNumber: 'TRK123456789',
      paymentMethod: 'Credit Card'
    },
    { 
      id: '12344', 
      date: '2024-11-03', 
      status: 'to_receive', 
      total: '₱2,499', 
      items: [
        { name: 'Smart Watch', quantity: 1, price: '₱2,499', image: 'https://via.placeholder.com/80' }
      ],
      trackingNumber: 'TRK123456788',
      estimatedDelivery: '2024-11-08',
      paymentMethod: 'GCash'
    },
    { 
      id: '12343', 
      date: '2024-11-02', 
      status: 'to_ship', 
      total: '₱899', 
      items: [
        { name: 'Phone Case', quantity: 2, price: '₱449', image: 'https://via.placeholder.com/80' },
        { name: 'Screen Protector', quantity: 1, price: '₱450', image: 'https://via.placeholder.com/80' }
      ],
      paymentMethod: 'COD'
    },
    { 
      id: '12342', 
      date: '2024-11-01', 
      status: 'to_pay', 
      total: '₱3,599', 
      items: [
        { name: 'Laptop Stand', quantity: 1, price: '₱1,299', image: 'https://via.placeholder.com/80' },
        { name: 'Mechanical Keyboard', quantity: 1, price: '₱2,300', image: 'https://via.placeholder.com/80' }
      ],
      paymentDeadline: '2024-11-03',
      paymentMethod: 'Bank Transfer'
    },
    { 
      id: '12341', 
      date: '2024-10-28', 
      status: 'cancelled', 
      total: '₱1,599', 
      items: [
        { name: 'USB Cable', quantity: 3, price: '₱533', image: 'https://via.placeholder.com/80' }
      ],
      cancelReason: 'Changed my mind',
      paymentMethod: 'GCash'
    },
    { 
      id: '12340', 
      date: '2024-10-25', 
      status: 'delivered', 
      total: '₱4,299', 
      items: [
        { name: 'Gaming Mouse', quantity: 1, price: '₱2,499', image: 'https://via.placeholder.com/80' },
        { name: 'Mouse Pad', quantity: 1, price: '₱1,800', image: 'https://via.placeholder.com/80' }
      ],
      trackingNumber: 'TRK123456787',
      paymentMethod: 'Credit Card'
    },
  ];

  const getFilteredOrders = () => {
    let filtered = allOrders;

    // Filter by tab
    if (activeTab !== 'all') {
      filtered = filtered.filter(order => order.status === activeTab);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(order => 
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  };

  const getOrderCount = (status) => {
    if (status === 'all') return allOrders.length;
    return allOrders.filter(order => order.status === status).length;
  };

  const getStatusDisplay = (status) => {
    const statusMap = {
      to_pay: { text: 'To Pay', color: '#FF6B35' },
      to_ship: { text: 'To Ship', color: '#F7931E' },
      to_receive: { text: 'To Receive', color: '#1E90FF' },
      delivered: { text: 'Delivered', color: '#4CAF50' },
      cancelled: { text: 'Cancelled', color: '#999' },
    };
    return statusMap[status] || { text: status, color: '#999' };
  };

  const handlePayNow = (orderId) => {
    console.log('Pay now for order:', orderId);
    // Navigate to payment page or open payment modal
  };

  const handleCancelOrder = (orderId) => {
    console.log('Cancel order:', orderId);
    // API call to cancel order
  };

  const handleTrackOrder = (orderId, trackingNumber) => {
    console.log('Track order:', orderId, trackingNumber);
    // Navigate to tracking page
  };

  const handleBuyAgain = (orderId) => {
    console.log('Buy again:', orderId);
    // Add items to cart
  };

  const handleViewDetails = (orderId) => {
    console.log('View details:', orderId);
    // Navigate to order details page
  };

  const filteredOrders = getFilteredOrders();

  return (
    <Container>
      <Header>
        <Title>My Orders</Title>
        <SearchBar>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search by order ID or product name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchBar>
      </Header>

      <TabsContainer>
        <Tab 
          active={activeTab === 'all'} 
          onClick={() => setActiveTab('all')}
        >
          All
          <TabCount>{getOrderCount('all')}</TabCount>
        </Tab>
        <Tab 
          active={activeTab === 'to_pay'} 
          onClick={() => setActiveTab('to_pay')}
        >
          To Pay
          {getOrderCount('to_pay') > 0 && <TabCount>{getOrderCount('to_pay')}</TabCount>}
        </Tab>
        <Tab 
          active={activeTab === 'to_ship'} 
          onClick={() => setActiveTab('to_ship')}
        >
          To Ship
          {getOrderCount('to_ship') > 0 && <TabCount>{getOrderCount('to_ship')}</TabCount>}
        </Tab>
        <Tab 
          active={activeTab === 'to_receive'} 
          onClick={() => setActiveTab('to_receive')}
        >
          To Receive
          {getOrderCount('to_receive') > 0 && <TabCount>{getOrderCount('to_receive')}</TabCount>}
        </Tab>
        <Tab 
          active={activeTab === 'delivered'} 
          onClick={() => setActiveTab('delivered')}
        >
          Completed
          {getOrderCount('delivered') > 0 && <TabCount>{getOrderCount('delivered')}</TabCount>}
        </Tab>
        <Tab 
          active={activeTab === 'cancelled'} 
          onClick={() => setActiveTab('cancelled')}
        >
          Cancelled
          {getOrderCount('cancelled') > 0 && <TabCount>{getOrderCount('cancelled')}</TabCount>}
        </Tab>
      </TabsContainer>

      <OrdersContent>
        {filteredOrders.length === 0 ? (
          <EmptyState>
            <EmptyIcon>📦</EmptyIcon>
            <EmptyText>No orders found</EmptyText>
            <EmptySubtext>
              {searchQuery 
                ? 'Try adjusting your search terms'
                : `You don't have any ${activeTab === 'all' ? '' : getStatusDisplay(activeTab).text.toLowerCase()} orders yet`
              }
            </EmptySubtext>
          </EmptyState>
        ) : (
          <OrdersList>
            {filteredOrders.map(order => {
              const statusInfo = getStatusDisplay(order.status);
              
              return (
                <OrderCard key={order.id}>
                  <OrderHeader>
                    <OrderInfo>
                      <OrderId>Order #{order.id}</OrderId>
                      <OrderDate>{new Date(order.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</OrderDate>
                    </OrderInfo>
                    <StatusBadge color={statusInfo.color}>
                      {statusInfo.text}
                    </StatusBadge>
                  </OrderHeader>

                  <ItemsList>
                    {order.items.map((item, index) => (
                      <ItemRow key={index}>
                        <ItemImage src={item.image} alt={item.name} />
                        <ItemDetails>
                          <ItemName>{item.name}</ItemName>
                          <ItemQuantity>Qty: {item.quantity}</ItemQuantity>
                        </ItemDetails>
                        <ItemPrice>{item.price}</ItemPrice>
                      </ItemRow>
                    ))}
                  </ItemsList>

                  <OrderFooter>
                    <OrderTotal>
                      <TotalLabel>Order Total:</TotalLabel>
                      <TotalAmount>{order.total}</TotalAmount>
                    </OrderTotal>

                    <OrderActions>
                      {/* To Pay Status */}
                      {order.status === 'to_pay' && (
                        <>
                          <DeadlineWarning>
                            Pay before {new Date(order.paymentDeadline).toLocaleDateString()}
                          </DeadlineWarning>
                          <ActionButton primary onClick={() => handlePayNow(order.id)}>
                            Pay Now
                          </ActionButton>
                          <ActionButton onClick={() => handleCancelOrder(order.id)}>
                            Cancel Order
                          </ActionButton>
                        </>
                      )}

                      {/* To Ship Status */}
                      {order.status === 'to_ship' && (
                        <>
                          <InfoText>Your order is being prepared</InfoText>
                          <ActionButton onClick={() => handleViewDetails(order.id)}>
                            View Details
                          </ActionButton>
                          <ActionButton onClick={() => handleCancelOrder(order.id)}>
                            Cancel Order
                          </ActionButton>
                        </>
                      )}

                      {/* To Receive Status */}
                      {order.status === 'to_receive' && (
                        <>
                          <InfoText>
                            Estimated delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}
                          </InfoText>
                          <ActionButton primary onClick={() => handleTrackOrder(order.id, order.trackingNumber)}>
                            Track Order
                          </ActionButton>
                          <ActionButton onClick={() => handleViewDetails(order.id)}>
                            View Details
                          </ActionButton>
                        </>
                      )}

                      {/* Delivered Status */}
                      {order.status === 'delivered' && (
                        <>
                          <ActionButton onClick={() => handleViewDetails(order.id)}>
                            View Details
                          </ActionButton>
                          <ActionButton primary onClick={() => handleBuyAgain(order.id)}>
                            Buy Again
                          </ActionButton>
                          <ActionButton>Leave Review</ActionButton>
                        </>
                      )}

                      {/* Cancelled Status */}
                      {order.status === 'cancelled' && (
                        <>
                          <CancelReason>Reason: {order.cancelReason}</CancelReason>
                          <ActionButton onClick={() => handleViewDetails(order.id)}>
                            View Details
                          </ActionButton>
                          <ActionButton primary onClick={() => handleBuyAgain(order.id)}>
                            Buy Again
                          </ActionButton>
                        </>
                      )}
                    </OrderActions>
                  </OrderFooter>

                  {/* Additional Info Section */}
                  {(order.trackingNumber || order.paymentMethod) && (
                    <AdditionalInfo>
                      {order.trackingNumber && (
                        <InfoItem>
                          <InfoLabel>Tracking Number:</InfoLabel>
                          <InfoValue>{order.trackingNumber}</InfoValue>
                        </InfoItem>
                      )}
                      <InfoItem>
                        <InfoLabel>Payment Method:</InfoLabel>
                        <InfoValue>{order.paymentMethod}</InfoValue>
                      </InfoItem>
                    </AdditionalInfo>
                  )}
                </OrderCard>
              );
            })}
          </OrdersList>
        )}
      </OrdersContent>
    </Container>
  );
};

// ============ STYLED COMPONENTS ============



export default Purchase;