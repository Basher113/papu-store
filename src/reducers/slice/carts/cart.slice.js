import { apiSlice } from "../api/api.slice";

const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    getCart: builder.query({
      query: () => "/carts",
      providesTags: (result, err, args) => // eslint-disable-line
        {
          console.log(result);
          return result ? [...result.map(cartItem => ({type: "Cart", id: cartItem.id})),  {type: "Cart", id: "LIST"}] : [{type:"Cart", id: "LIST"}]
        }
    }),

    addProductToCart: builder.mutation({
      query: (body) => ({
        url: "/carts/cartItems",
        method: "POST",
        body
      }),
      invalidatesTags: [{type: "Cart", id: "LIST"}]
    }),

    updateCartItem: builder.mutation({
      query: ({cartItemId, quantity }) => ({
        url: `/carts/cartItems/${cartItemId}`,
        method: "PATCH",
        body: {quantity}
      }),
      invalidatesTags: (result, err, args) => [{type: "Cart", id: args.cartItemId}]
    }),

    deleteCartItem: builder.mutation({
      query: (cartItemId) => ({
        url: `/carts/cartItems/${cartItemId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, err, cartItemId) => result ? [{type: "Cart", id: cartItemId}] : [{type: "Cart", id: "LIST"}]
    })
    
  })
});

export const {useGetCartQuery, useAddProductToCartMutation, useUpdateCartItemMutation, useDeleteCartItemMutation} = cartApiSlice;