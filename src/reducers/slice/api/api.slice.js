import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { loggedOut, setCurrentUser } from '../user/user.slice';


const serverUrl = import.meta.env.NODE_ENV === "production" ? import.meta.env.SERVER_URL_PROD : import.meta.env.SERVER_URL_DEV;

const baseQuery = fetchBaseQuery({
  baseUrl: serverUrl,
  credentials: "include",
});

// CHECK OUT FOR REVIEW: https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#automatic-re-authorization-by-extending-fetchbasequery
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery('auth/refreshToken', api, extraOptions);
    console.log(refreshResult)
    if (refreshResult.data) {
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(loggedOut);
    }
  };
  return result;
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => "auth/profile",
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