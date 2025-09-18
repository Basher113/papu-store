import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { loggedOut, setCurrentUser } from '../user/user.slice';

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
      api.dispatch(loggedOut());
    }
  };

  return result;
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => "users/profile",
      async onQueryStarted (args, {dispatch, queryFulfilled}) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCurrentUser(data)); // store the currentUser data in redux.
        } catch (error) {
          console.log("getCurrentUser endpoint Error:", error);
        }
      },
    }),

    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials
      }),
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setCurrentUser(data)); // store the currentUser data in redux.
        } catch (error) {
          console.log("loginUser Endpoint Error:", error);
        }
      }
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST"
      }),
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          console.log(data);
          dispatch(loggedOut());
        } catch (error) {
          console.log("LogoutUser Endpoint Error:", error);
        }
      }
    })

  }),
});

export const {useGetCurrentUserQuery, useLoginUserMutation, useLogoutUserMutation} = apiSlice;