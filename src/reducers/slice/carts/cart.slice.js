import { apiSlice } from "../api/api.slice";

const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    getCart: builder.query({
      query: () => "/carts",
      providesTags: (result, err, arg) => // eslint-disable-line
        result ? [...result.map(cartItem => ({type: "Cart", id: cartItem.id}), {type: "Cart", id: "List"})] : [{type:"Cart", id: "List"}]
    }),

    addProductToCart: builder.mutation({
      query: (body) => ({
        url: "/carts/cartItems",
        method: "POST",
        body
      }),
      invalidatesTags: (result, err, arg) => // eslint-disable-line
        result && result.cartItem ? [{type: "Cart", id: result.cartItem.id}] : [{type: "Cart", id: "List"}]
    })
    
  })
});

export const {useGetCartQuery, useAddProductToCartMutation} = cartApiSlice;