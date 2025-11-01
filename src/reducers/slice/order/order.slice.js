import { apiSlice } from "../api/api.slice";

const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createOrderCashOnDelivery: builder.mutation({
      query: (body) => ({
        url: "orders/",
        method: "POST",
        body: body,
      })
      
    }),

    createOrderPayOnPaymongo: builder.mutation({
      query: (body) => ({
        url: "orders/paymongoCheckout",
        method: "POST",
        body: body
      })
    }),

    getOrderBySessionId: builder.query({
      query: (sessionId) => `"orders/session/${sessionId}`,
    }),

    getOrderByOrderId: builder.query({
      query: (orderId) => `"orders/${orderId}`,
    }),

   
  })
})

export const {useCreateOrderCashOnDeliveryMutation, useCreateOrderPayOnPaymongoMutation, useGetOrderByOrderIdQuery, useGetOrderBySessionIdQuery} = orderApiSlice;