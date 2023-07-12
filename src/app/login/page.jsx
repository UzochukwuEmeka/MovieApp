'use client'
import React from 'react'
import Image from 'next/image'
import { useForm } from "react-hook-form"
import { useState } from 'react'
import useAuth from '../hooks/useAuth'

const Login = () => {
    const { signIn, signUp } = useAuth()
    const [login, setLogin] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async ({ email, password }) => {
        if (login) {
            await signIn(email, password)
        } else {
            await signUp(email, password)
        }
    }

    return (
        <div className='relative bg-black   h-full w-full flex md:justify-center md:items-center'>
            <Image src={'https://rb.gy/p2hphi'} objectFit='cover' layout='fill' className=' hidden  opacity-60 sm:inline' alt='Background Image' />
            <img
                src="https://rb.gy/ulxxee"
                alt="Logo"
                className=' absolute left-4 top-4 object-contain cursor-pointer  md:left-10 md:right-10'
                width={50}
                height={50}
            />


            <form className='relative mt-20 space-y-8 rounded bg-black/75 py-10 px-6 md:max-w-md md:mt-0 md:px-14' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-4xl font-semibold'>Sign In</h1>
                <div className="space-y-4">
                    <label className='inline-block w-full' >
                        <input type="email" placeholder='email' className='input' {...register("email", { required: true })} />
                        {errors.email && <span className='text-red-600 p-1 text-[13px] font-light'>Please enter a valid input</span>}
                    </label>
                    <label className='inline-block w-full' >
                        <input type="password" placeholder='password' className='input' {...register("password", { required: true })} />
                        {errors.password && <span className='text-red-600 p-1 text-[13px] font-light'>Please enter a valid input</span>}
                    </label>
                    <button className='w-full bg-[#e50914] rounded py-3' onClick={() => setLogin(true)}>Sign In</button>
                    <div className='text-[gray]' >
                        New to Netfilx?
                        <button type='submit' className='text-white hover:underline px-2' onClick={() => setLogin(false)}>Sign up now</button>

                    </div>
                </div>


            </form>


        </div>
    )
}

export default Login
