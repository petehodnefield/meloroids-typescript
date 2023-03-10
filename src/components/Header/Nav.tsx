import Link from 'next/link'
import React from 'react'

interface NavProps {
    navSelected: string
    setNavSelected: React.Dispatch<React.SetStateAction<string>>
}


const Nav = ({ setNavSelected, navSelected }: NavProps) => {
    const liStyle: string = 'text-0.75 hover:text-dark duration-200 '
    const loginStyle: string = 'font-semibold h-8 bg-white text-primary rounded-full w-24 flex items-center justify-center hover:opacity-90 duration-200'

    const selectedNavItem: string = 'underline  text-dark duration-200'
    console.log(navSelected)
    return (
        <nav>
            <ul className='flex gap-6 items-center text-white'>
                <li className={`${liStyle} ${navSelected === 'about' ? selectedNavItem : ''}`}>
                    <Link
                        onClick={() => setNavSelected('about')}
                        href='/about'>About
                    </Link>
                </li>
                <li className={`${liStyle}  ${navSelected === 'train' ? selectedNavItem : ''}`}>
                    <Link
                        onClick={() => setNavSelected('train')}
                        href='/train'>Train
                    </Link>
                </li>
                <li className={`${liStyle}  ${navSelected === 'chords' ? selectedNavItem : ''}`}>
                    <Link
                        onClick={() => setNavSelected('chords')}
                        href='/chords'>Chords
                    </Link>
                </li>
                <li className={`${liStyle}  ${navSelected === 'login' ? selectedNavItem : ''}  `}>
                    <Link
                        onClick={() => setNavSelected('login')}
                        className={`${loginStyle}`}
                        href='/login'>Login
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav