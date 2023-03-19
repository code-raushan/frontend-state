import baseApi from "./base"

export const examApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
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

export const { useExamRegisterMutation } = examApi;
