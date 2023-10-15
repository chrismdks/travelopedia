import React from 'react'
import AddDestination from './AddDestination'
import DestinationList from './DestinationList';

function DestinationIndex() {
  return (
    <div className='text-white-50'>
      <h2 className='pt-2 text-success text-center'>Travel List</h2>
      <AddDestination/>
      <DestinationList/>
    </div>
  );
}

export default DestinationIndex