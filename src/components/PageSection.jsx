import React from 'react';

const PageSection = ({title, name, subtitle, children}) => {
  return (
    <div name={name} className='mx-auto max-w-screen-xl h-fit' >
        <div className='text-center lg:text-left  mx-8 my-32'>
            <h1 className='text-5xl'>{title}</h1>
            <p className='mb-16 mt-8'>{subtitle}</p>

            {children}
        </div>
    </div>
  )
}

export default PageSection