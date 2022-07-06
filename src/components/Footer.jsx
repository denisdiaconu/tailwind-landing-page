import React from 'react';
import FooterCard from './FooterCard';

const Footer = () => {
    const links = [
        {
            id: 1,
            link: 'Link 1',
        },
        {
            id: 2,
            link: 'Link 2',
        },
        {
            id: 3,
            link: 'Link 3',
        },
        {
            id: 4,
            link: 'Link 4',
        },
    ]


  return (
    <div className='border-white border-t'>
        <div className='mx-auto my-20 max-w-screen-xl'>
            <div className='grid text-center gap-12 grid-cols-2 lg:grid-cols-4'>
                <FooterCard title='Company' list={links} />
                <FooterCard title='Developer' list={links} />
                <FooterCard title='Support' list={links} />
                <FooterCard title='Other' list={links} />
            </div>
        </div>
        <p className='text-center text-tBlue text-sm my-12 font-light'>© Copyright 2022 LAPAGE</p>
    </div>
  )
}

export default Footer