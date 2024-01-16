import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'

import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import User from './User/User.jsx'

import { githubInfoLoader } from './Github/Github.jsx'

import Github from './Github/Github.jsx'
import ContactUs from './ContactUs/ContactUs.jsx'
import {  Route } from 'react-router-dom';



// const router = createBrowserRouter([
//   // it contains objects // first object is for main path

//   {
//     path: "/",
//     element : <Layout/>,
//     children : [
// {
//   path : '',
//   element : <Home/>
// }
// ,
// {
//   path : 'about',
//   element : <About/>  
// },

// {
//   path : 'contactus',
//   element : <ContactUs/>  
// }

//     ]


//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path = "/" element ={<Layout/>}>
 <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contactus' element={<ContactUs />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader = {githubInfoLoader}
      path = 'github'
      element = {<Github/>}
      />
   </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>        
 
  
  </React.StrictMode>,
)
