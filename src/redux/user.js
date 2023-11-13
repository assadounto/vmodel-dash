import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {backendURL} from './http';
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: backendURL,
    tagTypes: ["Admin"],
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) {
        // include token in req header
        headers.set('Authorization', `Token ${token}`);
        return headers;
      }
    },
  }),
  endpoints: builder => ({
    
    analytics: builder.query({
      query: (data)=> ({
        url: '/dashboard/analytics',
        method: 'GET',
        params: data
      }),
    }),
    getUsers: builder.query({
      query: (page) => ({
        url: '/users',
        method: 'GET',
        params : {
        page: page
        }
      
      }),
    }),

    getall: builder.query({
      query: (scope)=> ({
        url: '/admin?scope='+ scope,
        method: 'GET',
        invalidatesTags: ["Admin"],
      }),
    }),
    action: builder.mutation({
      query: data => ({
        url: `/admin/vendor/action`,
        method: 'POST',
        params: data
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
    getvendorstaff: builder.query({
      query: (id) => ({
        url: `/staff/${id}`,
        method: 'GET',
      }),
      invalidatesTags: ['Vendor'],
    }),
    createvendorstaff: builder.mutation({
      query: (data) => ({
        url: '/staff/',
        method: 'POST',
        params: data
      }),
    }),
    deletevendorstaff: builder.mutation({
      query: (data) => ({
        url: `/staff/${data.staff_id}?vendor_id=${data.id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {

  useVerifyPhoneMutation,
  useLoginMutation,
  useGetallQuery,
  useGetUsersQuery,
  useCreateVendorMutation,
  useGetApprovedVendorsQuery,
  useGetvendorstaffQuery,
  useCreatevendorstaffMutation,
  useDeletevendorstaffMutation,
  useActionMutation,
  useAnalyticsQuery
} = authApi;
