import React, { useState } from 'react'
import Header from '../Header'
import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from '../Footer'
interface Props {
    children?: ReactNode
}

export default function Layout({ children, ...props }: Props) {
    const [navSelected, setNavSelected] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const capitalizeNav = navSelected.charAt(0).toUpperCase() + navSelected.slice(1);
    return (
        <>
            <Head>
                <title>{!navSelected ? 'Meloroids' : capitalizeNav}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header
                navSelected={navSelected}
                setNavSelected={setNavSelected}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <main onClick={() => setIsOpen(false)} className='min-h-screen'>{children}</main>
            <Footer />
        </>
    )
}
