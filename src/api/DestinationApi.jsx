import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const DestinationApi = createApi({
  "reducerPath": "api",
  baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
  endpoints: (builder) => ({
    //Query is used for GET request
    //Mutation is used for POST/PUT/DELETE request
    getAllDestination: builder.query({
      query: () => "destination"
    })
  })
})

export const { useGetAllDestinationQuery } = DestinationApi