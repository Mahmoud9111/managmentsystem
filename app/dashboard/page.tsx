import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function page () {

  const {getUser} = getKindeServerSession()
  const user = await getUser()

  if(!user){
    return redirect('/api/auth/register')
  }
  
  return (
    <>
        <h1>dashborad</h1>
    </>
  )
}

