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

    getProductsInCategory: builder.infiniteQuery({
      
      query: (arg) => {
        const categoryName = arg.queryArg;
        const {limit, cursorId} = arg.pageParam;
        const params = new URLSearchParams();
        params.append("limit", limit.toString());
        if (cursorId) {
          params.append("cursorId", cursorId);
        }
        
        return `/products/category/${categoryName}?${params.toString()}`;
      }, 

      infiniteQueryOptions: {
        initialPageParam: {limit: 10},
        getNextPageParam: (lastPage) => lastPage.cursorId ? {cursorId: lastPage.cursorId, limit: 10} : undefined,
      },
    }),
  })
});

export const {useGetAllProductsQuery, useGetProductDetailQuery, useGetProductsInCategoryInfiniteQuery} = productApiSlice;