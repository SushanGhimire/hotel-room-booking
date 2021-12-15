import React,{useState} from 'react'
import {ReactComponent as FacebookIcon} from '../../assets/images/icons/facebook.svg';
import {ReactComponent as GmailIcon} from '../../assets/images/icons/gmail.svg';
import {ReactComponent as PhoneIcon} from '../../assets/images/icons/phone.svg'
const ContactUs = () => {
    const [inquiry, setInquiry] = useState({
        subject:'',
        username:'',
        complain:''
    })
    const submitHandler = (e) => {
        e.preventDefault();
        setInquiry({
            subject:'',
            username:'',
            complain:''
        })
        alert(`subject:${inquiry.subject} \nusername:${inquiry.username} \ncomplain:${inquiry.complain}`)
    }
    const changeHandler = (e) => {
       const {name, value} = e.target;
       setInquiry({
           ...inquiry,
           [name]:value
       })
    }
    return (
        <div className='w-1/2'>
            <div className='flex flex-col gap-y-4 pb-5 border-b-2 border-green-200'>
                <div className='text-4xl text-primaryBlue font-bold'>
                    <h1>Contact Us</h1>
                </div>
                <p>Contact our teams at time of difficulties</p>
                <div className='text-gray-500 flex flex-col gap-y-2'>
                    <p className='flex gap-x-2'><PhoneIcon></PhoneIcon>98459292</p>
                    <p className='flex gap-x-2'><GmailIcon></GmailIcon>something@gmail.com</p>
                    <p className='flex gap-x-2'><FacebookIcon></FacebookIcon>facebook.com/something</p>
                </div>
            </div>
            <div className='flex flex-col gap-y-5 mt-10'>
                <div className='font-bold text-4xl text-primaryBlue'>
                    <h1>Inquiry Us</h1>
                </div>
                <p>Write a inquiry to help us solve your troubles.</p>
                <form onSubmit={submitHandler} className='flex flex-col gap-y-3'>
                    <input type="text" name='subject' value={inquiry.subject} placeholder='Subject' onChange={changeHandler}/>
                    <input type="text" name='username' value={inquiry.username} placeholder='Username/Email' onChange={changeHandler}/>
                    <textarea name="" id="" name='complain' value={inquiry.complain} cols="30" rows="10" placeholder='Text Here...' onChange={changeHandler}></textarea>
                    <button className='px-5 py-2 bg-buttonBlue text-white w-2/12 rounded-md hover:bg-primaryBlue transition-all duration-300'>Submit</button>
                </form>
                <p className='text-primaryBlue pb-3 w-full'>Note: It may take couple of hours or days to reply your inquiry, we hope our valuable customers to be patient</p>
            </div>
        </div>
    )
}

export default ContactUs
