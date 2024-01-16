import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
   <>

   {/* // header and footer will be same but outlet can be changed */}
   <Header/>
    <Outlet/>         
    {/* // child components will be rendered here */}
   <Footer/>


   </>
  )
}

export default Layout