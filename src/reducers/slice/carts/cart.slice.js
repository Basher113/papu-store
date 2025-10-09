import { apiSlice } from "../api/api.slice";

const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    getCart: builder.query({
      query: () => "/carts",
      providesTags: (result, err, arg) => // eslint-disable-line
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
    })
    
  })
});

export const {useGetCartQuery, useAddProductToCartMutation} = cartApiSlice;