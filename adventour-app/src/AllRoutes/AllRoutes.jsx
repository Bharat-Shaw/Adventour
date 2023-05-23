import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Faizan/Home'
import Tourdetail from '../Components/Bharat/Tourdetail'
import Signup from '../Components/Mahima/Signup'
import Payment from '../Components/Raj/Payment'
import Tourlist from '../Components/Vivek/Tourlist'

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tourdetail' element={<Tourdetail/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/tourlist' element={<Tourlist/>}/>
    </Routes>
  )
}

export default AllRoutes