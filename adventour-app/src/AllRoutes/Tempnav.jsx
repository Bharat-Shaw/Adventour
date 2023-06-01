import React from 'react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Tempnav() {
  return (
    <Flex border={'1px solid black'} p={'5px'} bg={'green.300'}>
      <Spacer/>
      <Link to={'/'}>Home</Link>
      <Spacer/>
      <Link to={'/tourdetail'}>Tourdetail</Link>
      <Spacer/>
      <Link to={'/signup'}>Signup</Link>
      <Spacer/>
      <Link to={'/payment'}>Payment</Link>
      <Spacer/>
      <Link to={'/tourlist'}>Tourlist</Link>
      <Spacer/>
      <Link to={'/login'}>Login</Link>
    </Flex>
  )
}

export default Tempnav