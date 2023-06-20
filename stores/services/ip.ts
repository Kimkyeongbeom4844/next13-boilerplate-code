import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ipApi = createApi({
  reducerPath: "ipApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.ipify.org/?format=json/" }),
  endpoints: (builder) => ({
    getMyIp: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetMyIpQuery } = ipApi;
