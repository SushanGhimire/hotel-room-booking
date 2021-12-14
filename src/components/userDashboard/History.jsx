import React from 'react'
import {ReactComponent as DownloadIcon} from '../../assets/images/icons/download.svg';
import {ReactComponent as BackSpaceIcon} from '../../assets/images/icons/backspace.svg';
const History = () => {
    return (
        <div className=' w-1/3'>
            <div className='flex flex-col gap-y-5'>
                <div className='font-bold text-primaryBlue text-4xl'>
                    <h1>History</h1>
                </div>
                <p>Here user can see past billing-invoices</p>
                <div className='flex flex-col gap-y-4'>
                    {[1,2,3,4,5].map((num) => (
                     <div key={num} className='transform hover:scale-105 transition-all duration-300'>
                         <ListItem/>
                     </div>
                    ))}
                </div>
            </div>
        </div>
    )
}



const ListItem = () => {
    return(
        <>
            <div className='flex justify-between items-center bg-green-100 p-4 rounded-md shadow-md'>
                <div>
                    <h1 className='text-xl text-semibold'>A-star hotel</h1>
                    <small className='text-primaryBlue'>Invoic date:{new Date().toLocaleString()}</small>
                </div>
                <div className='flex gap-x-2'>
                    <DownloadIcon/>
                    <BackSpaceIcon/>
                </div>
            </div>
        </>
    )
}
export default History
