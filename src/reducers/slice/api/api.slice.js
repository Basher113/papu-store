import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { loggedOut, setCurrentUser } from '../user/user.slice';


const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api/",
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
        } catch {
          // 
        }
      },
    }),

  }),
});

export const {useGetCurrentUserQuery} = apiSlice;