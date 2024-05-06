import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const storeApi = createApi({
  reducerPath: 'store',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),

  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: () => '/users',
    }),

    getCustomerById: builder.query({
      query: (userId) => `/users/${userId}`,
    }),
  }),
});

export const { useGetCustomersQuery, useGetCustomerByIdQuery } = storeApi;
