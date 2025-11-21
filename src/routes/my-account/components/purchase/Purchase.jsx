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

import { useGetOrdersInfiniteQuery } from '../../../../reducers/slice/order/order.slice';
import Button from '../../../../components/button/Button';
import Spinner from "../../../../components/spinner/Spinner"

const Purchase = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  let {
      data,
      isLoading,
      error,
      isFetchingNextPage,
      hasNextPage,
      fetchNextPage } = useGetOrdersInfiniteQuery({status: activeTab, search: searchQuery})

  // Mock orders data with different statuses
  const handleLoadMore = async () => {
    await fetchNextPage();
  }


  const getStatusDisplay = (status) => {
    const statusMap = {
      "PENDING": { text: 'To Pay', color: '#FF6B35' },
      "PROCESSING": { text: 'To Ship', color: '#F7931E' },
      "SHIPPED": { text: 'To Receive', color: '#1E90FF' },
      "DELIVERED": { text: 'Delivered', color: '#4CAF50' },
      "CANCELLED": { text: 'Cancelled', color: '#999' },
    };
    return statusMap[status] || { text: status, color: '#999' };
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

  const allResults = data?.pages.flat() ?? [];
  console.log(data, "data!!")
  console.log(allResults, "All Results")
 
  return (
    <Container>
    {
      error ? (
        <h2>{error?.data?.message || "Something went wrong"}</h2> 
      ) : isLoading ? ( 
        <Spinner />
      ) : (
          <>
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
              <TabCount>2</TabCount>
            </Tab>
            <Tab 
              active={activeTab === 'PENDING'} 
              onClick={() => setActiveTab('PENDING')}
            >
              To Pay
              <TabCount>3</TabCount>
            </Tab>
            <Tab 
              active={activeTab === 'PROCESSING'} 
              onClick={() => setActiveTab('PROCESSING')}
            >
              To Ship
            <TabCount>4</TabCount>
            </Tab>
            <Tab 
              active={activeTab === 'SHIPPED'} 
              onClick={() => setActiveTab('SHIPPED')}
            >
              To Receive
              <TabCount>2</TabCount>
            </Tab>
            <Tab 
              active={activeTab === 'DELIVERED'} 
              onClick={() => setActiveTab('DELIVERED')}
            >
              Completed
              <TabCount>4</TabCount>
            </Tab>
            <Tab 
              active={activeTab === 'CANCELLED'} 
              onClick={() => setActiveTab('CANCELLED')}
            >
              Cancelled
              <TabCount>8</TabCount>
            </Tab>
          </TabsContainer>

          <OrdersContent>
            {allResults[0].orders.length === 0 ? (
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
                {allResults.map(orders => orders.orders.map(order => {
                  const statusInfo = getStatusDisplay(order.status);
                  
                  return (
                    <OrderCard key={order.id}>
                      <OrderHeader>
                        <OrderInfo>
                          <OrderId>Order #{order.id}</OrderId>
                          <OrderDate>{new Date(order.createdAt).toLocaleDateString('en-US', { 
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
                        {order.orderItems.map((item) => (
                          <ItemRow key={item.id}>
                            <ItemImage src={item.product.imageUrl} alt={item.product.name} />
                            <ItemDetails>
                              <ItemName>{item.product.name}</ItemName>
                              <ItemQuantity>Qty: {item.quantity}</ItemQuantity>
                            </ItemDetails>
                            <ItemPrice>{item.product.price}</ItemPrice>
                          </ItemRow>
                        ))}
                      </ItemsList>

                      <OrderFooter>
                        <OrderTotal>
                          <TotalLabel>Order Total:</TotalLabel>
                          <TotalAmount>{order.payment.amount}</TotalAmount>
                        </OrderTotal>

                        <OrderActions>
                          {/* To Pay Status */}
                          {order.status === 'PENDING' && (
                            <>
                              
                              <ActionButton onClick={() => handleCancelOrder(order.id)}>
                                Cancel Order
                              </ActionButton>
                            </>
                          )}

                          {/* To Ship Status */}
                          {order.status === 'PROCESSING' && (
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
                          {order.status === 'SHIPPED' && (
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
                          {order.status === 'DELIVERED' && (
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
                          {order.status === 'CANCELLED' && (
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
                      {(order.trackingNumber || order.payment.paymentMethod) && (
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
                }))}
              </OrdersList>
            )}
            {hasNextPage && <Button onClick={handleLoadMore}>{isFetchingNextPage ? "Loading..." : "Load More"}</Button>}
          </OrdersContent>
        </>
      )
    }
  </Container>
  )
    
};

// ============ STYLED COMPONENTS ============



export default Purchase;