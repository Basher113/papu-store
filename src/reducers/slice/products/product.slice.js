import { apiSlice } from "../api/api.slice";

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: (result, err, args) => // eslint-disable-line
        result ? [...result.map(product => ({type: "Product", id: product.id})), "Product"] : ["Product"]
    }),

    getProductsInCategory: builder.query({
      query: (categoryName) => `/products/category/${categoryName}`,
      providesTags: (result, err, arg) => 
        result ? [{type: "Product", id: arg}, "Product"] : ["Product"]
    })
  })
});

export const {useGetAllProductsQuery, useGetProductsInCategoryQuery} = productApiSlice;