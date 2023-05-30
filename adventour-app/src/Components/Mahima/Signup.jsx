import React from 'react'
import { useState, useReducer } from 'react'

import { Box, Heading, Center, FormControl, Stack, Input, Checkbox, Button, Text, HStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FcGoogle} from 'react-icons/fc';
import { Switch } from '@chakra-ui/react'

const initialState = {
  name: '',
  email: '',
  password: '',
  repeatPassword: '',
  termsAccepted: false
};

function reducer(state, action) {
  return { ...state, [action.input]: action.value };
}

function validateState(state) {
  return state.password === state.cpassword
    && state.termsAccepted
    && state.password.length > 3;
}

function Signup() {

  const[theme, setTheme] = useState(true);

  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  console.log(state);

  const handleClick = (e) => {
    e.preventDefault();
    alert(`Hey ${state.name} you have successfully Registered!`);
    navigate("/login")
  }
  const handleInput = (e) => {
    const { name, value, checked } = e.target
    const action = {
      input: name,
      value: name === "termsAccepted" ? checked : value,
    }
    dispatch(action);
  }
  return (
    // <Box bg='#101214' h='100vh'>
    //   <Center>
    // <Box borderRadius='20px' bg='gray.800' mt='15vh' >

    //   <Box mt='30' mb='25' color='white' ><Heading><Center>Sign up</Center></Heading></Box>


    //     <Box width='50vh' m='auto'>
    //       <Stack spacing={3}>
    //         <Input placeholder='Full Name' />
    //         <Input placeholder='Enter your email' size='md'/>
    //         <Input placeholder='Enter password' size='md'/>
    //         <Input placeholder='Confirm password' size='md'/>
    //       </Stack>
    //     </Box>

    //     <Checkbox colorScheme='blue' color='white' mt='8vh'>Send me special deals to my inbox</Checkbox>
    //     <Box color='white'>By loggingin, you accept out Terms of use,</Box>
    //     <Box> and Privacy & Cookies Statement.</Box>
    //     <Box><Button bg='#409cd1' color='white' width='50vh' mt='30'> Sign up</Button></Box>




    // </Box>
    // </Center>
    // </Box>

    //  --- New


    <>
    <Box  p='30px 0' bg= {theme ? '#101214' : 'gray.100' } >
      <Center>
        <Box borderRadius='20px'  bg= {theme ? '#191b1d' : 'white' } my='20px' p='30px' color={theme ? 'white' : 'black'}>

          <Box mt='3' mb='25' ><Heading><Center>Sign up</Center></Heading></Box>
          <Stack spacing={3}>

            <FormControl>
              <Input placeholder='Full Name' name="name" type="text" onChange={handleInput} variant='flushed'  colorScheme='none' />
            </FormControl>
            <FormControl>
              <Input placeholder='Enter your email' size='md' name="email" type="text" onChange={handleInput} variant='flushed' colorScheme='none' />

            </FormControl>
            <FormControl>
              <Input placeholder='Enter password' size='md' name="password" type="text" onChange={handleInput} variant='flushed' colorScheme='none' />
            </FormControl>
            <FormControl>
              <Input placeholder='Confirm password' size='md' name="cpassword" type="text" onChange={handleInput} variant='flushed' colorScheme='none' />
            </FormControl>

          </Stack>
          <Box width='50vh' m='auto'>

          </Box>
          <Box color='gray.300'>

            <Checkbox colorScheme='blue' mt='25px'><Text fontSize='14px' name="termsAccepted" onChange={handleInput} color={theme ? 'white' : 'blackAlpha.700'}>You accept our Terms and Privacy</Text></Checkbox>
            {/* <Box fontSize='14px' mt='10px'>By loggingin, you accept out Terms of use,</Box>
            <Box fontSize='14px'> and Privacy & Cookies Statement.</Box> */}

          </Box>
          <Box>

            <Button bg='#3DC6EF' width='85%' h='50px' mt='25' fontSize='18px' colorScheme='none'
              // isDisabled={!validateState(state)}
              className={!validateState(state) ? "Disabled" : null}
              onClick={handleClick}
              color={theme ? 'white' : 'blackAlpha.800'}
              _hover={{bg:'#74d4f0'}}
            > Sign up</Button>
{/* h='50px' width='100px' */}
          </Box>
          <Center mt='20px'  >
            <Button bg='#4086f3' width='85%' h='50px' fontSize='18px' color='white' colorScheme='none'>
              <HStack bg='white' py='8.5px'  px='10px' ml='-5px' borderRadius='5px 0 0 5px' ><FcGoogle size='30px'/></HStack>
              &nbsp;&nbsp; Sign up with Google &nbsp;&nbsp;
            </Button>
          </Center>


        </Box>
      </Center>
    </Box>
    <Switch size='sm' onChange={()=>setTheme(!theme)}/>
    </>



  )
}

export default Signup