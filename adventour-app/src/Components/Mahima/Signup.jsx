import React, { useEffect } from 'react'
import { useState, useReducer } from 'react'
import { Box, Heading, Center, FormControl, Stack, Input, Checkbox, Button, Text, HStack, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FcGoogle} from 'react-icons/fc';
import { Switch } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, updateProfile } from 'firebase/auth';
import {auth, provider} from '../Firebase/Firebase'

function Signup() {
  const dispatch = useDispatch()
  const [error,setError] = useState(false);
  const [user, setUser] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
  })

  const theme=useSelector(state=>state.theme);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.password || !user.confirmPassword) {
      setError(true);
      alert("Wrong Credentials !!");
      return;
    }
  
    setUser({ name: "", email: "", password: "", confirmPassword: "" });

    try {
      const res = await createUserWithEmailAndPassword(auth, user.email, user.password, user.confirmPassword);
  
      console.log(res);
      
      await updateProfile(res.user, {
        displayName: user.name
      });

      navigate('/login')
  
      console.log(user);

    } catch (error) {
      // setError(true);
      console.log(error);
      alert('This Credentials is already-registered')
    }
  };

  const handleGoogleSignIn = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <>
    <Box minH={'100vh'} p='30px 0' bg= {theme ? '#101214' : 'gray.100' } >
      <Center>
        <Box borderRadius='20px'  bg= {theme ? '#191b1d' : 'white' } my='20px' p='30px' color={theme ? 'white' : 'black'}>

          <Box mt='3' mb='25' ><Heading><Center>Sign up</Center></Heading></Box>
          <Stack spacing={3}>

            <FormControl>
              <Input placeholder='Full Name' name="name" type="text" onChange={(e)=>{setUser({...user, name:e.target.value})}} variant='flushed'  colorScheme='none' />
            </FormControl>
            <FormControl>
              <Input placeholder='Enter your email' size='md' name="email" type="text" onChange={(e)=>{setUser({...user, email:e.target.value})}} variant='flushed' colorScheme='none' />

            </FormControl>
            <FormControl>
              <Input placeholder='Enter password' size='md' name="password" type="password" onChange={(e)=>{setUser({...user, password:e.target.value})}} variant='flushed' colorScheme='none' />
            </FormControl>
            <FormControl>
              <Input placeholder='Confirm password' size='md' name="cpassword" type="password" onChange={(e)=>{setUser({...user, confirmPassword:e.target.value})}} variant='flushed' colorScheme='none' />
            </FormControl>

          </Stack>
          <Box width='50vh' m='auto'>

          </Box>
          <Box color='gray.300'>

            <Checkbox colorScheme='blue' mt='25px'><Text fontSize='14px' name="termsAccepted" color={theme ? 'white' : 'blackAlpha.700'}>You accept our Terms and Privacy</Text></Checkbox>
          </Box>
          <Flex flexDirection='column' align='center'>
            <Button bg='#3DC6EF' width='85%' h='50px' mt='25' fontSize='18px' colorScheme='none'
              onClick={handleClick}
              color={theme ? 'white' : 'blackAlpha.800'}
              _hover={{bg:'#74d4f0'}}
            > Sign up</Button>

            {error && <Text color='red' p='0.5rem'>something went wrong</Text>}
          </Flex>
          <Center mt='20px'  >
            <Button bg='#4086f3' width='85%' h='50px' fontSize='18px' color='white' colorScheme='none' onClick={handleGoogleSignIn}>
              <HStack bg='white' py='8.5px'  px='10px' ml='-5px' borderRadius='5px 0 0 5px' ><FcGoogle size='30px'/></HStack>
              &nbsp;&nbsp; Sign up with Google &nbsp;&nbsp;
            </Button>
          </Center>


        </Box>
      </Center>
    </Box>
    </>
  )
}

export default Signup