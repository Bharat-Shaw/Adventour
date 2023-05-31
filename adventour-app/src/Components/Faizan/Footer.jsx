import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import logo from './Images/logo.png'

function Footer({theme}) {
    return (
        <Box p={{base:'1rem 1.5rem',md:'3rem 3rem',lg:'4rem 4.5rem'}}>

            <Flex p='3.5rem 0' borderTop='1px solid #696969' justify='space-between' flexDirection={{base:'column', md:'column', lg:'row'}}>
                <Box w={{base:'90%', md:'80%', lg:'35%'}}>
                    <Flex >
                        <Image src={logo} w='2rem' />
                        <Heading fontSize="1rem" ml='0.7rem'>Advantour.</Heading>
                    </Flex>
                    <Text p='2rem 0' color={theme ? 'gray.500':'gray'}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
                    </Text>
                </Box>

                <Flex w={{base:'90%', md:'80%', lg:'50%'}} p='0 2rem' justify='space-between' flexWrap='wrap'>
                    <Box lineHeight='2.2rem' p={{base:'1rem 0', md:'0',lg:'0'}}>
                        <Heading mb='1.2rem' fontSize="1.2rem" fontWeight='600'>Sitemap</Heading>
                        <Text color={theme ? 'gray.500':'gray'}>Services</Text>
                        <Text color={theme ? 'gray.500':'gray'}>About Us</Text>
                        <Text color={theme ? 'gray.500':'gray'}>Booking</Text>
                        <Text color={theme ? 'gray.500':'gray'}>Cancellation</Text>
                    </Box>

                    <Box lineHeight='2.2rem' p={{base:'1rem 0', md:'0',lg:'0'}}>
                        <Heading mb='1.2rem' fontSize="1.2rem" fontWeight='600'>Company</Heading>
                        <Text color={theme ? 'darkgray':'gray'}>Careers</Text>
                        <Text color={theme ? 'darkgray':'gray'}>Our Team</Text>
                    </Box>

                    <Box lineHeight='2.2rem' p={{base:'1rem 0', md:'0',lg:'0'}}>
                        <Heading mb='1.2rem' fontSize="1.2rem" fontWeight='600'>Support</Heading>
                        <Text color={theme ? 'darkgray':'gray'}>Tower A, Block-C</Text>
                        <Text color={theme ? 'darkgray':'gray'}>Cempaka, Jakarta-3409</Text>
                        <Text color={theme ? 'darkgray':'gray'}>Advantour@gmail.com</Text>
                        <Text color={theme ? 'darkgray':'gray'}>(002) +62 243 543</Text>
                        <Text color={theme ? 'darkgray':'gray'}>Cancellation</Text>
                    </Box>
                </Flex>

            </Flex>
            <Box borderBottom='1px solid #696969'>
                <Text mb='1rem' fontSize='0.9rem'>Facebook • Instagram • Youtube</Text>
            </Box>

            <Flex justify='space-between' mt='1rem' flexWrap='wrap'>
                <Text color={theme ? 'darkgray':'gray'} fontSize='0.9rem' p={{base:'1rem 0', md:'0',lg:'0'}}>© 2023 Advantour All Right Reserved</Text>
                <Flex gap='2rem' flexWrap='wrap'>
                    <Text fontSize='0.9rem'>Terms & Condition</Text>
                    <Text fontSize='0.9rem'>Privacy</Text>
                    <Text fontSize='0.9rem'>Policy</Text>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Footer;