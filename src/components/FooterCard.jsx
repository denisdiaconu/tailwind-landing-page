import React from 'react';

const FooterCard = ({title, list}) => {
  return (
    <div>
        <h1 className='font-bold mb-8 text-lg lg:text-2xl'>{title}</h1>
        <ul className='mt-1'>
        {
        list.map(i => (
            <li key={i.id} className='mb-2'>{i.link}</li>
        ))
        }
        </ul>
    </div>
  )
}

export default FooterCard