import React from 'react'

function NavBar() {
    const linksList = [
        {
            link: 'HOME',
            id: 1
        },
        {
            link: 'PRODUCTS',
            id: 2
        },
        {
            link: 'DEVELOPER',
            id: 3
        },
        {
            link: 'CUSTOMERS',
            id: 4
        },
        {
            link: 'CONTACT',
            id: 5
        }
    ]


  return (
    <div className='w-full absolute bg-black h-24 text-white z-20'>
        <div className='flex mx-auto px-4 h-full items-center justify-between max-w-screen-xl'>
            <div>
                <h1 className='tracking-widest text-3xl text-tBlue'>
                    LAPAGE
                </h1>
            </div>
            <div className='md:flex items-center hidden'>
                <ul className='flex'>
                    {linksList.map(link => (
                        <li key={link.id} className='cursor-pointer p-4 duration-300 hover:text-tBlue'>
                            {link.link}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar