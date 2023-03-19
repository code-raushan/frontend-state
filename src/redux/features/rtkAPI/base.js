import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASEURL } from '../../../utlis/constant';

const baseApi = createApi({
    reducerPath: 'baseApiReducer',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASEURL}/`,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().user.token || localStorage.getItem('token');
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({

    }),
});

// export const { useExamRegisterMutation } = baseApi;
export default baseApi;