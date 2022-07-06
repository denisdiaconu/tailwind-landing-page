import React from 'react';
import PageSection from './PageSection';
import { FaRoad, FaRobot, FaRocket, FaSatellite } from 'react-icons/fa';

const Products = () => {
    const textInside = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan. Viverra maecenas accumsan lacus vel. Tempor nec feugiat nisl pretium fusce id. Egestas sed sed risus pretium quam.';
    const products = [
        {
            id: 1,
            title: 'Product 1',
            icon: <FaRobot size={50} className='text-white' />,
            subtitle: textInside
        },
        {
            id: 2,
            title: 'Product 2',
            icon: <FaRoad size={50} className='text-white' />,
            subtitle: textInside
        },
        {
            id: 3,
            title: 'Product 3',
            icon: <FaRocket size={50} className='text-white' />,
            subtitle: textInside
        },
        {
            id: 4,
            title: 'Product 4',
            icon: <FaSatellite size={50} className='text-white' />,
            subtitle: textInside
        }
    ]


  return (
    <PageSection name='Products' title='Products' subtitle={textInside} >
    
        <div className='grid lg:grid-cols-2 text-black gap-12'>
            {
                products.map(({id, title, icon, subtitle}) => (
                    <div key={id} className='flex flex-col justify-center items-center p-8 text-center group rounded-lg bg-gradient-to-r from-tOrange to-tBlue'>
                        <div className='flex justify-center items-center duration-300 group-hover:scale-110'>
                            <div className='rounded-full p-5 m-4 bg-black'>{icon}</div>
                        </div>
                        <h1 className='my-8 text-3xl lg:text-5xl'>{title}</h1>
                        <p className='text-lg'>{subtitle}</p>
                    </div>
                ))
            }
        </div>
    </ PageSection >
  )
}

export default Products