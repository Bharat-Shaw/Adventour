import React from 'react';
import { Box, Image, Heading, Flex, Button, Text, useDisclosure, Icon } from '@chakra-ui/react'
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

function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const theme=useSelector(state=>state.theme);
    return (
        <Box p={{base:'0 1.5rem',md:'0 3rem',lg:'0 4.5rem'}} color='darkgray' bg='#101214' justify='space-between'>
            <Flex borderBottom='1px solid #696969' p='1.2rem 0' align='center'>
                <Flex>
                    <Image src={logo} w='7%' />
                    <Heading fontSize="1.2rem" ml='1rem' color='white'>Advantour.</Heading>
                </Flex>

                {/* <Spacer /> */}

                <Box display={{ base: 'none', md: 'none', lg:'block'}}>
                    <Flex gap={10} align='center' flexDirection='row' >
                        <NavLink to={'/'}
                            style={({ isActive }) => {
                                return { color: isActive ? 'white' : '' }
                            }}
                        ><Text fontWeight='600'>Discover</Text></NavLink>
                        <NavLink to={'/tourdetail'}
                            style={({ isActive }) => {
                                return { color: isActive ? 'white' : '' }
                            }}
                        ><Text fontWeight='600'>Services</Text></NavLink>
                        <NavLink to={'/signup'}
                            style={({ isActive }) => {
                                return { color: isActive ? 'white' : '' }
                            }}
                        ><Text fontWeight='600'>Categorie</Text></NavLink>
                        <NavLink to={'/payment'}
                            style={({ isActive }) => {
                                return { color: isActive ? 'white' : '' }
                            }}
                        ><Text fontWeight='600' minW='5rem'>About Us</Text></NavLink>

                        <NavLink to={'/tourlist'}>
                            <Button bg='#3DC6EF' _hover={{ bg: '#74d4f0' }} color='black' borderRadius='0.8rem' p='0 2rem'><Text fontWeight='600'>Get Started</Text></Button>
                        </NavLink>
                    </Flex>
                </Box>


                <Icon as={HamburgerIcon} onClick={onOpen} display={{ base: 'block', md: 'block', lg: 'none' }} />
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent color='darkgray' bg='#101214'>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <Flex gap={10} align='left' pt='3rem' pl='2rem' flexDirection='column'>
                                <NavLink to={'/'}
                                    style={({ isActive }) => {
                                        return { color: isActive ? 'white' : '' }
                                    }}
                                ><Text fontWeight='600'>Discover</Text></NavLink>
                                <NavLink to={'/tourdetail'}
                                    style={({ isActive }) => {
                                        return { color: isActive ? 'white' : '' }
                                    }}
                                ><Text fontWeight='600'>Services</Text></NavLink>
                                <NavLink to={'/signup'}
                                    style={({ isActive }) => {
                                        return { color: isActive ? 'white' : '' }
                                    }}
                                ><Text fontWeight='600'>Categorie</Text></NavLink>
                                <NavLink to={'/payment'}
                                    style={({ isActive }) => {
                                        return { color: isActive ? 'white' : '' }
                                    }}
                                ><Text fontWeight='600' minW='5rem'>About Us</Text></NavLink>

                                <NavLink to={'/tourlist'}>
                                    <Button bg='#3DC6EF' _hover={{ bg: '#74d4f0' }} color='black' borderRadius='0.8rem' p='0 2rem'><Text fontWeight='600'>Get Started</Text></Button>
                                </NavLink>
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>

            </Flex>


        </Box>
    );
}

export default Navbar;