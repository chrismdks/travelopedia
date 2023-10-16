import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const destinationApi = createApi({
  reducerPath: "apidestination",
  baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
  tagTypes: ["Destinations"], //supported tags
  endpoints: (builder) => ({
    //Query is used for GET request
    getAllDestination: builder.query({
      query: () => "destination",
      providesTags: ["Destinations"], // Tag
    }),
    //Mutation is used for POST/PUT/DELETE request
    addDestination: builder.mutation({
      query: (destination) => ({
        url: "destination",
        method: "POST",
        body: destination,
      }),
      invalidatesTags: ["Destinations"] // invalidate getAllDestination tag so RTK query execute it again
    }),
    updateDestination: builder.mutation({
      query: (destination) => ({
        url: `destination/${destination.id}`,
        method: "PUT",
        body: destination,
      }),
      invalidatesTags: ["Destinations"] // invalidate getAllDestination tag so RTK query execute it again
    }),
    deleteDestination: builder.mutation({
      query: ({id}) => ({
        url: `destination/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Destinations"] // invalidate getAllDestination tag so RTK query execute it again
    }),
  }),
});

export const { useGetAllDestinationQuery, 
  useAddDestinationMutation, 
  useUpdateDestinationMutation, 
  useDeleteDestinationMutation } = destinationApi