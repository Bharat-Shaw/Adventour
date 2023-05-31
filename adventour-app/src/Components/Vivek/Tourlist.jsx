import React, { useEffect } from 'react'
import NavBar from './NavBar'
import TourlistBody from './TourlistBody'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import Footer from '../Faizan/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'

function Tourlist() {

  const [theme, setTheme] = useState(false);
  const {location}=useParams();
  const limit=useSelector((state)=>state.limit);
  const dispatch=useDispatch()

  useEffect(() => {
    axios.get(`https://weak-rose-seahorse-tutu.cyclic.app/api/${location}?_limit=${limit}`)
      .then((res) => {
        dispatch({type:'LIST', payload:res.data})
      })
  }, [limit])

  return (
    <Box bg={theme ? "gray.100" : "#101214"} color={theme ? "black" : "white"}>
      <NavBar setTheme={setTheme} theme={theme} />
      <TourlistBody setTheme={setTheme} theme={theme} />
      <Footer />
    </Box>

  )
}

export default Tourlist