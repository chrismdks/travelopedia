import React from 'react'
import { useDeleteDestinationMutation, useGetAllDestinationQuery } from '../api/destinationApi'

function DestinationList() {

  const {data, isLoading, isSuccess, isError, error} = useGetAllDestinationQuery();

  const [deleteDestinationMutation, results] = useDeleteDestinationMutation();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } 
  else if (isSuccess) {
    content = data.map(destination => {
      return (
        <div key={destination.id} className='row py-1'
          style={{borderBottom: "1px solid #333", borderTop: "1px solid #333"}}
        >
          <div className='col-3 offset-3'>
            {destination.city}, {destination.country}
          </div>
          <div className='col-1 text-warning'>
            {destination.daysNeeded} days
          </div>
          <div className='col-2'>
            <button className='btn btn-danger form-control'
            onClick={()=>deleteDestinationMutation({id: destination.id})}>
              Delete
            </button>
          </div>
        </div>
      );
    })
  }
  else if (isError) {
    content = <p>{error}</p>;
  }
  return <div className='pt-3'>{content}</div>;
}

export default DestinationList;