import React, { useState } from 'react'
import { useDeleteDestinationMutation, useUpdateDestinationMutation } from '../api/DestinationApi'

const Destination = ({destination}) => {

  const [deleteDestinationMutation] = useDeleteDestinationMutation();
  const [updateDestinationMutation, results] = useUpdateDestinationMutation();

  const [isUpdating, setIsUpdating] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");

  const handleUpdate = () => {
    updateDestinationMutation({id: destination.id,
      city: newCity==="" ? destination.city : newCity,
      country: newCountry==="" ? destination.country : newCountry,
      daysNeeded: destination.daysNeeded}
    )
    //reset
    setNewCity("")
    setNewCountry("")
    setIsUpdating(!isUpdating)
  }

  return (
    <div className='row py-1'
      style={{borderBottom: "1px solid #333", borderTop: "1px solid #333"}}
    >
      {isUpdating ?
        <input type="text" className='col-2 offset-1'
        placeholder="City..." defaultValue={destination.city}
        onChange={(e)=>setNewCity(e.target.value)}/>
      :
        <div className='col-2 offset-1'>
          {destination.city}
        </div>
      }
      {isUpdating ?
        <input type="text" className='col-2'
        placeholder="Country..." defaultValue={destination.country}
        onChange={(e)=>setNewCountry(e.target.value)}/>
      :
        <div className='col-2'>
          {destination.country}
        </div>
      }
      <div className='col-2 text-warning'>
        {destination.daysNeeded} days
      </div>
      <div className='col-1'>
        <button className='btn btn-warning' onClick={()=>setIsUpdating(!isUpdating)}>
          {isUpdating ? "Cancel" : "Edit"}
        </button>
      </div>
      {isUpdating &&
        <div className='col-1 mx-1'>
          <button className='btn btn-primary' onClick={handleUpdate}>
            Update
          </button>
        </div>
      }
      <div className='col-1 mx-1'>
        <button className='btn btn-danger' onClick={()=>deleteDestinationMutation({id: destination.id})}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Destination