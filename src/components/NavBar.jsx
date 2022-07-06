import React from 'react';
import { Link } from 'react-scroll';
import GraButton from './button/GraButton';
import { FaTimes, FaBars } from 'react-icons/fa';

function NavBar({ isMenu, setIsMenu }) {
    const linksList = [
        {
            link: 'Home',
            id: 1
        },
        {
            link: 'Products',
            id: 2
        },
        {
            link: 'Developer Area',
            id: 3
        },
        {
            link: 'Customers',
            id: 4
        },
        {
            link: 'Contact',
            id: 5
        }
    ]


  return (
    <>
    <div className='w-full absolute bg-black h-24 text-white z-20'>
        <div className='flex mx-auto px-4 h-full items-center justify-between max-w-screen-xl'>
            <div>
                <h1 className='tracking-widest text-3xl text-tBlue'>
                    LAPAGE
                </h1>
            </div>
            <div className='lg:flex items-center hidden'>
                <ul className='flex'>
                    {linksList.map(link => (
                        <li key={link.id} className='cursor-pointer uppercase p-4 duration-300 hover:text-tBlue'>
                            <Link to={link.link} smooth duration={500}>
                            {link.link}
                            </Link>
                        </li>
                    ))}
                </ul>
                <GraButton name='GET LAPAGE' className='ml-4 hidden smb:flex' />
            </div>
            <div className='block lg:hidden' onClick={() => setIsMenu(!isMenu)}>
                {isMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
        </div>
    </div>

    <div className={` absolute z-10 h-fit py-12 text-2xl left-0 w-full duration-500 bg-black text-white lg:hidden flex text-center justify-center ${
        isMenu ? 'opacity-95 rounded-b-2xl top-24' : 'top-[-100%]'
    }`}>
        <ul>
            {linksList.map(link => (
                <li key={link.id} className='p-3'>
                    <Link onClick={() => setIsMenu(false)} to={link.link} smooth duration={500}>
                    {link.link}
                    </Link>
                </li>
            ))}
            <GraButton name='GET LAPAGE' className='mt-10' />
        </ul>
    </div>

    </>
  )
}

export default NavBar