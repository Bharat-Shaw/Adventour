import React from 'react'
import { useState } from 'react'
import { Box, Heading, Center, FormControl, Stack, Input, Checkbox, Button, Text, Flex, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth, provider } from '../Firebase/Firebase'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

function Signup() {
  const [show, setShow] = React.useState(false)
  const handleShow = () => setShow(!show)
  const [errMsg, setErrMsg] = useState("");
  const [chkBox, setChkBox] = useState(false);
  const [subBtnDisable, setSubBtnDisable] = useState(false);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const theme = useSelector(state => state.theme);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.password || !user.confirmPassword) {
      setErrMsg("Please fill all the details !");
      return;
    }
    if (user.password !== user.confirmPassword) {
      setErrMsg("Password not matched !");
      return;
    }
    setErrMsg("");

    setSubBtnDisable(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, user.email, user.password, user.confirmPassword);
      setSubBtnDisable(false)
      console.log(res);

      await updateProfile(res.user, {
        displayName: user.name
      });

      navigate('/login')

      console.log(user);

    } catch (error) {
      setSubBtnDisable(false)
      setErrMsg(error.message)
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

    <Box minH={'100vh'} p='30px 0' bg={theme ? '#101214' : 'gray.100'} >

      <Box w={{ base: "90%", md: "70%", lg: "28%" }} m={'auto'} borderRadius='20px' bg={theme ? '#191b1d' : 'white'} my='20px' p='30px' color={theme ? 'white' : 'black'}>

        <Box mt='3' mb='25' ><Heading><Center>Sign up</Center></Heading></Box>
        <Stack spacing={3}>

          <FormControl>
            <Input placeholder='Full Name' name="name" type="text" onChange={(e) => { setUser({ ...user, name: e.target.value }) }} variant='flushed' colorScheme='none' />
          </FormControl>
          <FormControl>
            <Input placeholder='Enter your email' size='md' name="email" type="text" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} variant='flushed' colorScheme='none' />

          </FormControl>
          <FormControl>
            <InputGroup>
              <Input type={show ? 'text' : 'password'} placeholder='Enter password' size='md' name="password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} variant='flushed' colorScheme='none' />
              <InputRightElement width='4.5rem'>
                <IconButton
                  colorScheme='none'
                  onClick={handleShow}
                  icon={show ? <ViewOffIcon color={theme ? "white" : "black"} /> : <ViewIcon color={theme ? "white" : "black"} />}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl>
            <Input type={show ? 'text' : 'password'} placeholder='Confirm password' size='md' name="cpassword" onChange={(e) => { setUser({ ...user, confirmPassword: e.target.value }) }} variant='flushed' colorScheme='none' />
          </FormControl>

        </Stack>

        <Box color='gray.300'>
          <Checkbox onChange={() => setChkBox((prev) => !prev)} colorScheme='blue' mt='25px'><Text fontSize='14px' name="termsAccepted" color={theme ? 'white' : 'blackAlpha.700'}>You accept our Terms and Privacy</Text></Checkbox>
        </Box>

        <Text color={'red'} textAlign={'center'} pt={"15px"} fontSize={'17px'}>{errMsg}</Text>

        <Flex flexDirection='column' align='center'>
          <Button bg='#3DC6EF' width='80%' h='50px' mt='25' fontSize='18px' colorScheme='none'
            onClick={handleClick}
            color={theme ? 'white' : 'blackAlpha.800'}
            _hover={{ bg: '#74d4f0' }}
            isDisabled={subBtnDisable || !chkBox}
          > Sign up</Button>
        </Flex>

        <Box w={'80%'} m={'auto'} mt='20px'>
          <Button bg='#4086f3' width='100%' px={'1px'} m={'auto'} h='50px' fontSize='18px' color='white' colorScheme='none' onClick={handleGoogleSignIn}>
            <Flex alignItems={'center'} w={'100%'}>
              <Box bg='white' py='8.5px' px='10px' borderRadius='5px 0 0 5px' ><FcGoogle size='30px' /></Box>
              <Box w={'80%'}>
                <Text>Sign up with Google</Text>
              </Box>
            </Flex>
          </Button>
        </Box>


      </Box>

    </Box>

  )
}

export default Signup