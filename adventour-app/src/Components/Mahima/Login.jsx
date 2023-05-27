import React, { useState } from "react";
import { Box, useColorMode, IconButton, Heading, FormControl, Flex, FormLabel, Input, Button, Switch, Center, Stack } from "@chakra-ui/react";


function Login() {
    const [colorMode, setColorMode] = useState(true);
    return (
        <>
            <Box p='30px 0' h='600px' bg={colorMode ? '#101214' : 'white'}>

                <Center>
                    <Box borderRadius='20px' my='20px' p='30px' bg={colorMode ? '#191b1d' : 'gray.500'} color={colorMode ? 'white' : 'black'}>
                        <Box mt='8' mb='25'><Heading><Center>Login</Center></Heading></Box>

                        <Stack spacing={3}>
                            <FormControl isRequired>
                                <FormLabel >Email</FormLabel>
                                <Input type="email"
                                    name="email" colorScheme='none'
                                    variant='flushed'
                                    placeholder="test@test.com" 
                                    color={colorMode ? 'white' : 'black'}
                                    />

                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder="**********"
                                    name="password" colorScheme='none'
                                    variant='flushed' 
                                    size='md' color={colorMode ? 'white' : 'black'}
                                />
                            </FormControl>
                            <Center >
                                <Button bg='#4086f3' width='85%' h='50px' 
                                fontSize='18px' color='white' colorScheme='none' mt='30px'
                                type="submit">
                                    Sign In
                                </Button>
                            </Center>
                            
                        </Stack>
                    </Box>
                </Center>
            </Box>
            <Switch onChange={() => { setColorMode(!colorMode); }} />
        </>
    )
}

export default Login;