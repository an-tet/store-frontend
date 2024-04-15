import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const storeApi = createApi({
  reducerPath: 'store',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),

  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => '/users',
    }),

    getUserById: builder.query({
      query: (userId) => `/users/${userId}`,
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = storeApi;
