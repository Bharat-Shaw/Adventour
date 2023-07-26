import React, { useEffect } from 'react'
import NavBar from './NavBar'
import TourlistBody from './TourlistBody'
import { Box } from '@chakra-ui/react'
import Footer from '../Faizan/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import ExpandComp from '../Bharat/ExpandComp'

function Tourlist() {

  const theme=useSelector(state=>state.theme);
  const {location}=useParams();
  const limit=useSelector((state)=>state.limit);
  const dispatch=useDispatch()

  useEffect(() => {
    axios.get(`https://kind-erin-greyhound-hat.cyclic.app/api/${location}?_limit=${limit}`)
      .then((res) => {
        dispatch({type:'LIST', payload:res.data})
      })
  }, [limit])

  return (
    <Box bg={theme ? "#101214" : "gray.100"} color={theme ? "white" : "black"}>
      <NavBar  />
      <TourlistBody  />
      <Box m={'auto'}><ExpandComp /></Box>
      
      <Footer />
    </Box>

  )
}

export default Tourlist