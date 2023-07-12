'use client'
import React from 'react'
import Image from 'next/image'
import { SearchIcon, BellIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth'


const Header = () => {

    const {logOut } = useAuth()
    const [isScroll, setIsScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true)
                console.log('Was scrolled')
                console.log(scrollY)
            } else {
                setIsScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)


    }, [])




    return (
        <header className={` ${isScroll && 'bg-[#141414]'}`} >
            <div className='flex space-x-3 md:space-x-10'>
                <img src={'https://rb.gy/ulxxee'} width={100} height={100} alt='Netfilx' />
                <ul className='hidden md:flex space-x-3'>
                    <li className='ListLink'>Home</li>
                    <li className='ListLink'>Movies</li>
                    <li className='ListLink'>Tv Series</li>
                    <li className='ListLink'>New & Popular</li>
                    <li className='ListLink'>My List</li>
                    <li className='ListLink'>Concession snacks</li>
                </ul>
            </div>
            <div className='flex items-center space-x-4 font-light text-sm '>
                <SearchIcon className='hidden h-6 w-6 sm:inline' />
                <p className='hidden lg:inline'>Kids</p>
                <BellIcon className=' h-6 w-6 ' />
                <Link href={'/account'} onClick={logOut}>
                    <img
                        src="https://rb.gy/g1pwyx"
                        alt=""
                        className='cursor-pointer rounded'
                    />
                </Link>

            </div>
        </header>
    )
}

export default Header
