import React from 'react';
import { Box, Image, Heading, Flex, Button, Text, useDisclosure, Icon, Menu, MenuButton, MenuList, MenuItem, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import logo from './Images/logo.png'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';

function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { theme, currentUser } = useSelector(state => state);

    console.log(currentUser)

    return (
        <Box p={{ base: '0 1.5rem', md: '0 3rem', lg: '0 4.5rem' }} color={theme ? 'darkgray' : 'blackAlpha.800'} bg={theme ? '#101214' : 'white'} justify='space-between'>
            <Flex p='1.2rem 0' align='center'>
                <Flex>
                    <Image src={logo} w='7%' />
                    <Heading fontSize="1.2rem" ml='1rem' color={theme ? 'white' : 'blackAlpha.800'}>Advantour.</Heading>
                </Flex>

                <Box display={{ base: 'none', md: 'none', lg: 'block' }}>
                    <Flex gap={10} align='center' flexDirection='row' >
                        <NavLink to={'/'}
                            style={({ isActive }) => {
                                return { color: isActive ? '#008cc9' : '' }
                            }}
                        ><Text fontWeight='600'>Discover</Text></NavLink>
                        <NavLink to={'/services'}
                            style={({ isActive }) => {
                                return { color: isActive ? '#008cc9' : '' }
                            }}
                        ><Text fontWeight='600'>Services</Text></NavLink>
                        <NavLink to={'#'}
                            style={({ isActive }) => {
                                return { color: isActive ? '' : '' }
                            }}
                        ><Text fontWeight='600'>Categorie</Text></NavLink>
                        <NavLink to={'#'}
                            style={({ isActive }) => {
                                return { color: isActive ? '' : '' }
                            }}
                        ><Text fontWeight='600' minW='5rem'>About Us</Text></NavLink>

                        {
                            currentUser ? <>
                                <Popover>
                                    <PopoverTrigger>
                                        <Button minW='6rem' colorScheme='none' bg={theme ? 'gray.800' : 'gray.200'} color='#008cc9' fontSize='1.2rem' fontWeight='700' borderRadius='0.8rem' p='0.5rem 0.5rem'>{currentUser.displayName}</Button>
                                    </PopoverTrigger>
                                    <PopoverContent w='6rem' border='none' borderRadius='1rem' bg={theme ? '#191b1d' : 'gray.200'} >
                                        <PopoverBody p='0'>
                                            <Text _hover={theme ? { bg: "#40494c" } : { bg: "gray.300" }} p='0.5rem 1rem' borderRadius='0.8rem' textAlign='center' fontWeight='500' cursor='pointer' onClick={() => { signOut(auth) }}>Log Out</Text>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </>
                                :
                                (
                                    <Popover>
                                        <PopoverTrigger>
                                            <Button minW='8rem' bg='#3DC6EF' _hover={{ bg: '#74d4f0' }} color='black' borderRadius='0.8rem' p='0.5rem 0rem'>Get Started</Button>
                                        </PopoverTrigger>
                                        <PopoverContent w='10rem' border='none' borderRadius='1rem' bg={theme ? '#191b1d' : 'white'} >
                                            <PopoverBody p='0'>
                                                <NavLink to='/login'><Text _hover={theme ? { bg: "#40494c" } : { bg: "gray.200" }} p='0.5rem 1rem' borderRadius='0.8rem 0.8rem 0 0' fontWeight='500' cursor='pointer'>Login</Text></NavLink>
                                                <NavLink to='/signup'><Text _hover={theme ? { bg: "#40494c" } : { bg: "gray.200" }} p='0.5rem 1rem' borderRadius='0 0 0.8rem 0.8rem' fontWeight='500' cursor='pointer'>Sign Up</Text></NavLink>
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                )
                        }

                    </Flex>
                </Box>


                <Icon as={HamburgerIcon} onClick={onOpen} display={{ base: 'block', md: 'block', lg: 'none' }} />
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent color={theme ? 'darkgray' : 'blackAlpha.800'} bg={theme ? '#101214' : 'white'}>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <Flex gap={10} align='left' pt='3rem' pl='2rem' flexDirection='column'>
                                <NavLink to={'/'}
                                    style={({ isActive }) => {
                                        return { color: isActive ? '#008cc9' : '' }
                                    }}
                                ><Text fontWeight='600'>Discover</Text></NavLink>
                                <NavLink to={'/services'}
                                    style={({ isActive }) => {
                                        return { color: isActive ? '#008cc9' : '' }
                                    }}
                                ><Text fontWeight='600'>Services</Text></NavLink>
                                <NavLink to={'#'}
                                    style={({ isActive }) => {
                                        return { color: isActive ? '' : '' }
                                    }}
                                ><Text fontWeight='600'>Categorie</Text></NavLink>
                                <NavLink to={'#'}
                                    style={({ isActive }) => {
                                        return { color: isActive ? '' : '' }
                                    }}
                                ><Text fontWeight='600' minW='5rem'>About Us</Text></NavLink>

                                {
                                    currentUser ? <>
                                        <Popover>
                                            <PopoverTrigger>
                                                <Button minW='6rem' colorScheme='none' bg={theme ? 'gray.800' : 'gray.200'} color='#008cc9' fontSize='1.2rem' fontWeight='700' borderRadius='0.8rem' p='0.5rem 0.5rem'>{currentUser.displayName}</Button>
                                            </PopoverTrigger>
                                            <PopoverContent w='6rem' border='none' borderRadius='1rem' bg={theme ? '#191b1d' : 'gray.200'} >
                                                <PopoverBody p='0'>
                                                    <Text _hover={theme ? { bg: "#40494c" } : { bg: "gray.300" }} p='0.5rem 1rem' borderRadius='0.8rem' textAlign='center' fontWeight='500' cursor='pointer' onClick={() => { signOut(auth) }}>Log Out</Text>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </>
                                        :
                                        (
                                            <Popover>
                                                <PopoverTrigger>
                                                    <Button minW='8rem' bg={theme ? '#3DC6EF':'#008cc9'} _hover={{ bg: '#74d4f0' }} color='black' borderRadius='0.8rem' p='0.5rem 0rem'>Get Started</Button>
                                                </PopoverTrigger>
                                                <PopoverContent w='10rem' border='none' borderRadius='1rem' bg={theme ? '#40494c' : 'gray.200'} >
                                                    <PopoverBody p='0'>
                                                        <NavLink to='/login'><Text _hover={theme ? { bg: "gray.200" }:{ bg: "#40494c" }} p='0.5rem 1rem' borderRadius='0.8rem 0.8rem 0 0' fontWeight='500' cursor='pointer'>Login</Text></NavLink>
                                                        <NavLink to='/signup'><Text _hover={theme ? { bg: "gray.200" }:{ bg: "#40494c" }} p='0.5rem 1rem' borderRadius='0 0 0.8rem 0.8rem' fontWeight='500' cursor='pointer'>Sign Up</Text></NavLink>
                                                    </PopoverBody>
                                                </PopoverContent>
                                            </Popover>
                                        )
                                }

                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </Box>
    );
}

export default Navbar;