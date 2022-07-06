import React from 'react'

const Footer = () => {
  return (
    <div className='border-white border-t'>
        <div className='mx-auto my-20 max-w-screen-xl'>
            <div className='grid text-center gap-12 grid-cols-2 lg:grid-cols-4'>
                <div>
                    <h1 className='font-bold mb-8 text-lg lg:text-3xl'>Company</h1>
                    <ul className='mt-1'>
                        <li>Subment 1</li>
                        <li>Subment 2</li>
                        <li>Subment 3</li>
                        <li>Subment 4</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold mb-8 text-lg lg:text-3xl'>Developer</h1>
                    <ul className='mt-1'>
                        <li>Subment 1</li>
                        <li>Subment 2</li>
                        <li>Subment 3</li>
                        <li>Subment 4</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold mb-8 text-lg lg:text-3xl'>Support</h1>
                    <ul className='mt-1'>
                        <li>Subment 1</li>
                        <li>Subment 2</li>
                        <li>Subment 3</li>
                        <li>Subment 4</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold mb-8 text-xl lg:text-3xl'>Other</h1>
                    <ul className='mt-1'>
                        <li>Subment 1</li>
                        <li>Subment 2</li>
                        <li>Subment 3</li>
                        <li>Subment 4</li>
                    </ul>
                </div>
            </div>
        </div>
        <p className='text-center text-tBlue text-sm my-12 font-light'>© Copyright 2022 LAPAGE</p>
    </div>
  )
}

export default Footer