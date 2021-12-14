import React from 'react'
import RoomCard from '../web/rooms/integrate/RoomCard'
const Bookmark = () => {
    return (
        <div className='flex flex-col gap-y-7'>
            <div className='font-bold text-primaryBlue text-4xl'>
                <h1>Bookmarks</h1>
            </div>
            <p>This is bookmark section</p>
            <div className='grid grid-cols-3 gap-5 pb-10'>
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
            </div>
        </div>
    )
}

export default Bookmark
