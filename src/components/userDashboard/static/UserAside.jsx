import React from 'react'
import {NavLink} from 'react-router-dom'
function UserAside() {
    return (
        <div className=' w-1/4'>
            <div className='flex flex-col gap-y-10 w-1/2 m-auto border-b-2 p-4 border-green-200'>
                <div className='font-bold text-xl text-primaryBlue'>
                    <h1>Settings</h1>
                </div>
                <div className='flex flex-col gap-y-3 text-primaryBlue'>
                    <p><NavLink exact to='/user' activeClassName="text-buttonBlue">User Profile</NavLink></p>
                    <p><NavLink exact to='/user/bookmarks' activeClassName="text-buttonBlue">Bookmarks</NavLink></p>
                    <p><NavLink exact to='/user/history' activeClassName="text-buttonBlue">History</NavLink></p>
                    <p><NavLink exact to='/user/faqs' activeClassName="text-buttonBlue">FAQ</NavLink></p>
                    <p><NavLink exact to='/user/contact-us' activeClassName="text-buttonBlue">Contact us</NavLink></p>
                    
                </div>
            </div>
        </div>
    )
}

export default UserAside
