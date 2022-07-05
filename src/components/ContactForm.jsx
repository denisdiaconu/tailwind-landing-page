import React from 'react';
import GraButton from './button/GraButton';

const ContactForm = () => {
  return (
    <div className='text-left p-4'>
        <form action="" method='POST'>
            <div className='grid lg:grid-cols-2 w-full py-2 gap-4'>
                <div className='flex flex-col col-span-2 lg:col-span-1'>
                    <label className='text-sm py-2 font-light'>
                        Name
                    </label>
                    <input type="text" name='name' className='flex border-2 rounded-lg text-gray-900 p-3 focus:outline-none' />
                </div>
                <div className='flex flex-col col-span-2 lg:col-span-1'>
                    <label className='text-sm py-2 font-light'>
                        Phone
                    </label>
                    <input type="text" name='phone' className='flex border-2 rounded-lg text-gray-900 p-3 focus:outline-none' />
                </div>
                <div className='flex flex-col col-span-2'>
                    <label className='text-sm py-2 font-light'>
                        Email
                    </label>
                    <input type="email" name='email' className='flex border-2 rounded-lg text-gray-900 p-3 focus:outline-none' />
                </div>
                <div className='flex flex-col col-span-2'>
                    <label className='text-sm py-2 font-light'>
                        Message
                    </label>
                    <textarea name='message' rows='9' className='flex border-2 rounded-lg text-gray-900 p-3 focus:outline-none' />
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <GraButton name='Send Message' className='ml-4 mt-4' />
            </div>
        </form>
    </div>
  )
}

export default ContactForm