import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Faizan/Home'
import Tourdetail from '../Components/Bharat/Tourdetail'
import Signup from '../Components/Mahima/Signup'
import Payment from '../Components/Raj/Payment'
import Tourlist from '../Components/Vivek/Tourlist'
import Login from '../Components/Mahima/Login'
import Services from '../Components/Faizan/Services'
import PrivateRoutes from './PrivateRoutes'
import Thankyou from '../Components/Raj/Thankyou'

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tourdetail/:location/:id' element={<Tourdetail/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/payment/:location/:id' element={<PrivateRoutes><Payment/></PrivateRoutes>}/>
      <Route path='/tourlist/:location' element={<Tourlist/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/services' element={<Services />} />
      <Route path='/payment-successful' element={<Thankyou/>}/>
    </Routes>
  )
}

export default AllRoutes