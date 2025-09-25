import React from 'react'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

export async function Navbar(){

    const {getUser} = getKindeServerSession()
    const user = await getUser()


  return (
    <>
        <nav className='py-5 flex items-center justify-between'>
            <div className='flex items-center gap-6'>
                <Link href='/'>
                    <h1 className='font-bold text-3xl'>
                        Blog<span className='text-blue-500'> Mahmoud </span>
                    </h1>
                </Link>

                <div className='hidden sm:flex items-center gap-6'>
                    <Link href="/" className='text-sm font-medium hover:text-blue-500 transition-colors'>Home</Link>

                    <Link href="/dashboard" className='text-sm font-medium hover:text-blue-500 transition-colors'>Dsshboard</Link>

                </div>
            </div>
            {user?(
                <div className='flex items-center gap-4'>
                    <p>{user.given_name}</p>
                    <LogoutLink className={buttonVariants({variant:'secondary'})}>Logout</LogoutLink>
                </div>
            ):(
                <div className='flex items-center gap-4'>
                    <LoginLink className={buttonVariants()}>Login</LoginLink>
                    <RegisterLink className={buttonVariants({variant:'secondary'})}>Sign up</RegisterLink>
                </div>
            )}
        </nav>
    </>
  )
}

