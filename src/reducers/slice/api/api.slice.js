import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import urlSecrets from '../../../secrets/url.secret';

console.log(urlSecrets.serverUrl);


const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.PROD ? urlSecrets.serverUrl : urlSecrets.ngrokTestServerUrl,
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
  tagTypes: ["User", "Product", "Category", "Cart", "Address"],
  keepUnusedDataFor: 60 * 5, // 5 minutes cache
  endpoints: () => ({}),
});