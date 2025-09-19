import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import urlSecrets from '../../../secrets/url.secret';


const baseQuery = fetchBaseQuery({
  baseUrl: urlSecrets.serverUrl,
  credentials: "include",
});

// CHECK OUT FOR REVIEW: https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#automatic-re-authorization-by-extending-fetchbasequery
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
 
  if (result.error && result.error.originalStatus === 401) {
    // try to get a new token
    const refreshResult = await baseQuery({url: 'auth/refreshToken', method: "POST"}, api, extraOptions); // backend change the cookies for access token if the refresh token is still valid
    if (refreshResult.data) {
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log(refreshResult.error);
    }
  };

  return result;
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User'],
  keepUnusedDataFor: 60 * 5, // 5 minutes cache
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => "users/profile",
      providesTags: ["User"],
    }),

    registerUser: builder.mutation({
      query: (credentials) => ({
        url: "auth/register",
        method: "POST",
        body: credentials
      })
    }),

    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials
      }),
      invalidatesTags: ["User"],
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST"
      }),
      invalidatesTags: ["User"],
    }),

  }),
});

export const {useGetCurrentUserQuery, useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation} = apiSlice;