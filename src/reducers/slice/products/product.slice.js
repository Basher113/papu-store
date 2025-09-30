import { apiSlice } from "../api/api.slice";

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: (result, err, arg) => // eslint-disable-line
        result ? [...result.map(product => ({type: "Product", id: product.id})), {type: "Product", id: "LIST"}] : [{type: "Product", id: "LIST"}]
    }),

    getProductDetail: builder.query({
      query: (productId) => `/products/${productId}`,
      providesTags: (result, err, productId) => [{type: "Product", id: productId}]
    }),

    getProductsInCategory: builder.query({
      query: (categoryName) => `/products/category/${categoryName}`,
      providesTags: (result, err, categoryName) => 
        result ? [...result.map(product => ({type:"Product", id: product.id})), {type: "Category", id: categoryName}] : [{type: "Category", id: categoryName}]
    })
  })
});

export const {useGetAllProductsQuery, useGetProductDetailQuery, useGetProductsInCategoryQuery} = productApiSlice;