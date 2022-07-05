import React from 'react';
import PageSection from './PageSection';
import { FaTwitter ,FaGoogle, FaFacebook, FaApple, FaAmazon } from 'react-icons/fa';

const Customers = () => {
    const textInside = 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    const textSmall = 'Ipsum dolor sit amet, consectetur adipiscing elit.'
    const data = [
        {
            id: 1,
            title: '5 new countries',
            details: textSmall
        },
        {
            id: 2,
            title: '2 months faster',
            details: textSmall
        },
        {
            id: 3,
            title: '32% new',
            details: textSmall
        },
        {
            id: 4,
            title: '$32M',
            details: textSmall
        }
    ];

  return (
    <PageSection name='Customers' title='Customers' subtitle={textInside}>
        <>
        <div className='grid lg:grid-cols-4 mb-16 gap-8 text-left'>
            {
                data.map(d => (
                    <div key={d.id} className='rounded-lg p-4 text-black odd:bg-tBlue even:bg-tOrange text-center'>
                        <h1 className='mb-2 text-3xl font-bold'>{d.title}</h1>
                        <p>{d.details}</p>
                    </div>
                ))
            }
        </div>
        </>
    </PageSection>
  )
}

export default Customers