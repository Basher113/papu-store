import { apiSlice } from "../api/api.slice";

const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getOrders: builder.infiniteQuery({
      query: (arg) => {
        const {status = "all", search = "", } = arg.queryArg;
        const {limit, cursorId} = arg.pageParam;
        const params = new URLSearchParams();

        if (status !== 'all') params.append('status', status);
        if (search) params.append('search', search);
        if (cursorId) params.append("cursorId", cursorId);
      
        params.append('limit', limit);
        return `orders?${params.toString()}`
      },

      infiniteQueryOptions: {
        initialPageParam: {limit: 5},
        getNextPageParam: (lastPage) => lastPage.cursorId ? {cursorId: lastPage.cursorId, limit: 5} : undefined,
      },
    }),

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
      query: (orderId) => `orders/${orderId}`,
    }),

   
  })
})

export const {useGetOrdersInfiniteQuery, useCreateOrderCashOnDeliveryMutation, useCreateOrderPayOnPaymongoMutation, useGetOrderByOrderIdQuery, useGetOrderBySessionIdQuery} = orderApiSlice;