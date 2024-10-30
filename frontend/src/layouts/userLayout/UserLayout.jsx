import React from 'react'
import FooterUser from './FooterUser'
import HeadersUser from './HeaderUser'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      <HeadersUser />
      <main>
        <Outlet /> 
      </main>
      <FooterUser />
    </div>
  )
}

export default UserLayout