import React from 'react'
import NavBar from './NavBar'
import TourlistBody from './TourlistBody'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'

function Tourlist() {

  const [theme, setTheme] = useState(false);

  return (
    <Box bg={theme ? "gray.100" : "#101214"} color={theme ? "black" : "white"}>
      <NavBar setTheme={setTheme} theme={theme} />
      <TourlistBody setTheme={setTheme} theme={theme} />  
    </Box>

  )
}

export default Tourlist