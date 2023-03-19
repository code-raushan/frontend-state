import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASEURL } from '../../../utlis/constant'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASEURL}/` }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: `login`,
        method: "POST",
        body: {
          email,
          password
        }
      })
    }),
    register: builder.mutation({
      query: ({ name, email, password }) => ({
        url: `register`,
        method: "POST",
        body: {
          name,
          email,
          password
        }
      })
    }),
    examRegister: builder.mutation({
      query: ({ name, age, qualification, state }) => ({
        url: `exam/register`,
        method: "POST",
        body: {
          name,
          age,
          qualification,
          state
        }
      })
    })
  }),
})

export const { useLoginMutation, useRegisterMutation } = authApi