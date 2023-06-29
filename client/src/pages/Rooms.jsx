import React from 'react'
import  roomType  from '../utils/roomType'
import RoomType from '../components/RoomType'

const Rooms = () => {
  return (
    <>
    <div className='flex gap-4 p-4'>
    {
        roomType.map((roomType)=>

            <RoomType key={roomType.id} roomType={roomType}/>
        
        )

    }
    
    </div>
      
    </>
  )
}

export default Rooms
