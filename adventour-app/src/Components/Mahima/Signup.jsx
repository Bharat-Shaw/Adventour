import React from 'react'
import { useState } from 'react'
import {
  Box, Heading, Center, FormControl, Stack,
  Input, Checkbox, Button, Text, HStack, InputGroup,
  InputRightElement, IconButton,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebase';

function Signup() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const theme = useSelector(state => state.theme);
  const [errMsg, setErrMsg] = useState("");
  const [chkBox, setChkBox] = useState(false);
  const [subBtnDisable, setSubBtnDisable] = useState(false);
  const navigate = useNavigate();

  // console.log(chkBox)

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    conPassword: ""
  });

  const handleSignUp = () => {
    if (!userData.name || !userData.email || !userData.password || !userData.conPassword) {
      setErrMsg("Please fill all the details !");
      return;
    }
    if (userData.password !== userData.conPassword) {
      setErrMsg("Password not matched !");
      return;
    }
    setErrMsg("");

    setSubBtnDisable(true);

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then(async (res) => {
        setSubBtnDisable(false)
        console.log(res)
        const user = res.user
        await updateProfile(user, {
          displayName: userData.name
        });
        navigate("/")
      })
      .catch((err) => {
        setSubBtnDisable(false)
        setErrMsg(err.message)
      })
  }

  // console.log(userData)

  return (
    <>
      <Box minH={'100vh'} p='30px 0' bg={theme ? '#101214' : 'gray.100'} >
        <Center>
          <Box w={{ base: "90%", md: "60%", lg: "28%" }} borderRadius='20px' bg={theme ? '#191b1d' : 'white'} my='20px' p='30px' color={theme ? 'white' : 'black'}>

            <Box mt='3' mb='25' ><Heading><Center>Sign up</Center></Heading></Box>
            <Stack spacing={3}>

              <FormControl>
                <Input onChange={(e) => { setUserData({ ...userData, name: e.target.value }) }} placeholder='Full Name' name="name" type="text" variant='flushed' colorScheme='none' />
              </FormControl>

              <FormControl>
                <Input onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} placeholder='Enter your email' size='md' name="email" type="text" variant='flushed' colorScheme='none' />
              </FormControl>

              <FormControl>
                <InputGroup>
                  <Input type={show ? 'text' : 'password'} onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} placeholder='Enter password' size='md' name="password" variant='flushed' colorScheme='none' />
                  <InputRightElement width='4.5rem'>
                    <IconButton
                      colorScheme='none'
                      onClick={handleClick}
                      icon={show ? <ViewOffIcon color={theme ? "white" : "black"} /> : <ViewIcon color={theme ? "white" : "black"} />}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <Input type={show ? 'text' : 'password'} onChange={(e) => { setUserData({ ...userData, conPassword: e.target.value }) }} placeholder='Confirm password' size='md' name="cpassword" variant='flushed' colorScheme='none' />
                  {/* <InputRightElement width='4.5rem'>
                    <IconButton
                      colorScheme='none'
                      onClick={handleClick}
                      icon={show ? <ViewOffIcon color={theme ? "white" : "black"} /> : <ViewIcon color={theme ? "white" : "black"} />}
                    />
                  </InputRightElement> */}
                </InputGroup>
              </FormControl>

            </Stack>
            <Box width='50vh' m='auto'>

            </Box>
            <Box color='gray.300'>

              <Checkbox onChange={() => setChkBox((prev) => !prev)} colorScheme='blue' mt='25px'><Text fontSize='14px' name="termsAccepted" color={theme ? 'white' : 'blackAlpha.700'}>You accept our Terms and Privacy</Text></Checkbox>


            </Box>

            <Text color={'red'} textAlign={'center'} pt={"15px"} fontSize={'17px'}>{errMsg}</Text>

            <Center>
              <Button bg='#3DC6EF' width={{ base: '90%', md: '70%', lg: '80%' }} h='50px' mt='15' fontSize='18px' colorScheme='none'
                color={theme ? 'white' : 'blackAlpha.800'}
                _hover={{ bg: '#74d4f0' }}
                onClick={handleSignUp}
                isDisabled={subBtnDisable || !chkBox}
              > Sign up</Button>
            </Center>

            <Center mt='30px'  >
              <Button bg='#4086f3' width={{ base: '90%', md: '70%', lg: '80%' }} h='50px' fontSize='18px' color='white' colorScheme='none'>
                <HStack bg='white' py='9px' px='10px' ml={{ base: '-12px', md: '-30px', lg: '-46px' }} borderRadius='5px 0 0 5px' ><FcGoogle size='30px' /></HStack>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sign up with Google
              </Button>
            </Center>

          </Box>
        </Center>
      </Box>
    </>
  )
}

export default Signup