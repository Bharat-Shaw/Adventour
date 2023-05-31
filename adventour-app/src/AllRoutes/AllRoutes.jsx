import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Faizan/Home'
import Tourdetail from '../Components/Bharat/Tourdetail'
import Signup from '../Components/Mahima/Signup'
import Payment from '../Components/Raj/Payment'
import Tourlist from '../Components/Vivek/Tourlist'
import Login from '../Components/Mahima/Login'

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tourdetail/:location/:id' element={<Tourdetail/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/payment/:location/:id' element={<Payment/>}/>
      <Route path='/tourlist/:location' element={<Tourlist/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes