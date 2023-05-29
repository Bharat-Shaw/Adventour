import { IconButton } from '@chakra-ui/react';
import React from 'react'
import { FaMoon, FaSun } from "react-icons/fa";

function Toggle({settheme, theme}) {
  return (
    <>
    <IconButton
        aria-label="toggle theme"
        rounded="full"
        size="md"
        position="fixed"
        bottom={4}
        left={4}
        zIndex={'4'}
        onClick={() => { settheme(!theme); }} icon={theme ? <FaSun /> : <FaMoon />}
      />
      </>
  )
}

export default Toggle