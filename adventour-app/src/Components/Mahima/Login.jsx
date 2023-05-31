import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Switch, Center, Stack } from "@chakra-ui/react";
import { useSelector } from "react-redux";


function Login() {
    const theme=useSelector(state=>state.theme);
    return (
        <>
            <Box p='30px 0' minH={'100vh'} bg={theme ? '#101214' : 'gray.100'}>

                <Center>
                    <Box borderRadius='20px' my='20px' p='30px' width='350px'  bg={theme ? '#191b1d' : 'white'} color={theme ? 'white' : 'black'}>
                        <Box mt='8' mb='25'><Heading><Center>Login</Center></Heading></Box>

                        <Stack spacing={3}>
                            <FormControl isRequired>
                                <FormLabel >Email</FormLabel>
                                <Input type="email"
                                    name="email" colorScheme='none'
                                    variant='flushed'
                                    placeholder="test@test.com" 
                                    
                                    color={theme ? 'white' : 'black'}
                                    />

                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder="**********"
                                    name="password" colorScheme='none'
                                    variant='flushed' 
                                     color={theme ? 'white' : 'black'}
                                />
                            </FormControl>
                            <Center >
                                <Button bg='#4086f3' width='85%' h='50px' 
                                fontSize='18px' color='white' colorScheme='none' mt='30px'
                                type="submit" _hover={{bg:'#74d4f0'}}>
                                    Sign In
                                </Button>
                            </Center>
                            
                        </Stack>
                    </Box>
                </Center>
            </Box>

        </>
    )
}

export default Login;