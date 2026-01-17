import { apiSlice } from "../api/api.slice";

const addressApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUserAddresses: builder.query({
      query: () => "/addresses",
      providesTags: (result, err, args) => // eslint-disable-line
      {
        console.log(result);
        return result ? [...result.map(address => ({type: "Address", id: address.id})),  {type: "Address", id: "LIST"}] : [{type:"Address", id: "LIST"}]
      }
    }),

    getDefaultAddress: builder.query({
      query: () => "/addresses/default",
      providesTags: (result, err, args) => result ? [{type: "Address", id: result.id}] : [{type:"Address", id: "LIST"}] // eslint-disable-line
    }),

    addAddress: builder.mutation({
      query: (body) => ({
        url: "/addresses/",
        method: "POST",
        body
      }),
      invalidatesTags: [{type: "Address", id: "LIST"}]
    }),

    updateAddress: builder.mutation({
      query: ({addressId, ...body}) => ({
        url: `/addresses/${addressId}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{type: "Address", id: "LIST"}]
    })
  })
})



export const {
  useGetUserAddressesQuery,
  useGetDefaultAddressQuery,
  useAddAddressMutation,
  useUpdateAddressMutation,
} = addressApiSlice;