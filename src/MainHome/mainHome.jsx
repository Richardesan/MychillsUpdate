import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/footer'
import {Outlet} from "react-router-dom";


const MainHome = () => {
  return (
    <div className=''>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainHome