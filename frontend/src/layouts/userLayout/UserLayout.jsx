import React from 'react'
import FooterUser from './FooterUser'
import HeadersUser from './HeaderUser'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <HeadersUser />
      <main className=''>
        <Outlet /> 
      </main>
      <FooterUser />
    </div>
  )
}

export default UserLayout