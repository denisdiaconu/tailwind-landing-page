import React from 'react';
import PageSection from './PageSection';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import codePerson from '../assets/code-person.jpg';
import ContactForm from './ContactForm';

const Contact = () => {
    const textInside = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.';

  return (
    <PageSection name='Contact' title='Contact' subtitle={textInside}>
        <div className='mt-4 gap-8 flex flex-col lg:flex-row'>
            <div className='flex justify-center text-center items-center flex-col p-4 h-full w-full lg:w-1/2'>
                <img src={codePerson} alt="code" className='object-cover shadow-lg shadow-tPurple h-72 w-72 rounded-full' />
                <p className='max-w-md py-12'>{textInside}</p>
                <div className='grid grid-cols-2 w-3/5 mx-auto gap-10'>
                    <div className='flex justify-center items-center p-3 cursor-pointer shadow-md shadow-tPurple rounded-full duration-200 hover:scale-125'>
                        <FaLinkedin size={25} />
                    </div>
                    <div className='flex justify-center items-center p-3 cursor-pointer shadow-md shadow-tPurple rounded-full duration-200 hover:scale-125'>
                        <FaTwitter size={25} />
                    </div>
                </div>
            </div>
            <div className='p-4 h-full w-full lg:w-1/2 rounded-xl'>
                <ContactForm />
            </div>
        </div>
    </PageSection>
  )
}

export default Contact