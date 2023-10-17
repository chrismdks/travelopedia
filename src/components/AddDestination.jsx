import React, {useState} from 'react'
import { useAddDestinationMutation } from '../api/DestinationApi';

function AddDestination() {

  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");

  // addDestinationMutation: trigger to our mutation (name it as you like)
  const [addDestinationMutation, results] = useAddDestinationMutation(); // hook

  const handleSubmit = (e) => {
    e.preventDefault();

    //call mutation
    addDestinationMutation({
      id: Math.random() * 100,
      city: newCity,
      country: newCountry,
      daysNeeded: parseInt(Math.random() * 10) + 1
    });

    // when data are updated, i have to refresh the page to actually see the new data.
    // Use of Tags to automatically re-fetch data when update is complete!
    // See destinationApi.jsx
    
    setNewCity("");
    setNewCountry("");
  }

  return (
    <div className='m-4 p-4 border'>
      <form onSubmit={handleSubmit}>
        <div className='row col-8 offset-2'>
          <h4>Enter a new destination</h4>
          <div className='col-5 p-1'>
            <input 
              type='text' 
              className='form-control' 
              placeholder='Enter city...'
              value={newCity}
              onChange={e=>setNewCity(e.target.value)}
            />
          </div>
          <div className='col-5 p-1'>
            <input 
              type='text' 
              className='form-control' 
              placeholder='Enter country...'
              value={newCountry}
              onChange={e=>setNewCountry(e.target.value)}
            />
          </div>
          <div className='col-2 p-1'>
            <button className='btn btn-success form-control'>Add</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddDestination