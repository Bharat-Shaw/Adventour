import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Heading, Image, IconButton, Spacer, Divider, Center, HStack, Stack, Button, Grid, GridItem, AspectRatio, Menu, MenuButton, MenuList, MenuItem, Input } from '@chakra-ui/react'
import { Card, CardBody } from '@chakra-ui/react'
import { SlLocationPin, SlCalender } from 'react-icons/sl'
import { FiSearch } from 'react-icons/fi'
import { ArrowForwardIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import modelOne1 from './Images/modelOne.png'
import iconOne from './Images/iconOne.png'
import iconTwo from './Images/iconTwo.png'
import iconThree from './Images/iconThree.png'
import iconFour from './Images/iconFour.png'
import modelTwo from './Images/modelTwo.png'
import Footer from './Footer'
import ReviewCarousel from './ReviewCarousel'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Firebase/Firebase'

function Home() {
  const [val, setval] = useState(0);
  const [location, setlocation] = useState('Place');
  const [date, setdate] = useState('');
  // const [theme, setTheme] = useState(true);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme);

  useEffect(()=>{

    window.scrollTo({
      top: 0, 
    });

    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({type: 'CURRENTUSER', payload: user})
    })

    return () => {
      unsub();
    }
  },[])

  const carouselData = [
    {
      id: "1",
      heading: '"Memorable Trip"',
      description: "This is a really memorable trip for me. Ut enim ad minim veniam, nostrud exercit tation ullamco laboris nisi ut aliquip exera commodo consequat aute irure sint.",
      avatar: "https://bit.ly/sage-adebayo",
      user: "Segun Adebayo",
      profession: "Creator, Chakra UI"
    },
    {
      id: "2",
      heading: '"Greate Tour Guide"',
      description: "This is a really memorable trip for me. Ut enim ad minim veniam, nostrud exercit tation ullamco laboris nisi ut aliquip exera commodo consequat aute irure sint.",
      avatar: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      user: "Chris Hemsworth",
      profession: "Traveller"
    },
    {
      id: "3",
      heading: '"This tour was so Amazing"',
      description: "This is a really memorable trip for me. Ut enim ad minim veniam, nostrud exercit tation ullamco laboris nisi ut aliquip exera commodo consequat aute irure sint.",
      avatar: "https://pixlr.com/images/index/remove-bg.webp",
      user: "Jennifer",
      profession: "Influencer"
    },
    {
      id: "4",
      heading: '"The UI is Simple and easy to use"',
      description: "This is a really memorable trip for me. Ut enim ad minim veniam, nostrud exercit tation ullamco laboris nisi ut aliquip exera commodo consequat aute irure sint.",
      avatar: "https://pfpmaker.com/_nuxt/img/blog-preview-2.db10f37.webp",
      user: "Emma",
      profession: "Tourister"
    },
    {
      id: "5",
      heading: '"Totally Worth it"',
      description: "This is a really memorable trip for me. Ut enim ad minim veniam, nostrud exercit tation ullamco laboris nisi ut aliquip exera commodo consequat aute irure sint.",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlnJNm22oYIpXVpYmslWoHbBfgF_E_L0esvlUKggZsw&usqp=CAU&ec=48600113",
      user: "Fatima",
      profession: "Creator"
    },
  ]

  const listfunc = () => {
    if (location === 'Place' || date === ' ') {
      alert('Please select loaction and date')
      return;
    }
    dispatch({ type: 'LIMITRESET' })
    navigate(`/tourlist/${location}`)
  }

  return (
    <>
      <Navbar />
      <Box p='3rem 0' color={theme ? 'white' : 'black'} bg={theme ? '#101214' : 'gray.100'} textAlign='left' >
        <Flex p={{ base: '0 1.5rem', md: '0 3rem', lg: '0 4.5rem' }} flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>
          <Box w={{ base: '90%', md: '80%', lg: '50%' }}>
            <Text fontWeight='500' color={theme ? '#3DC6EF':'#008cc9'}>All you need is Adventour.</Text>

            <Flex>
              <Heading fontSize='3.6rem' fontWeight='600'>
                Let's Enjoy Your Life, Explore Beautiful
                <HStack>
                  <Text color={theme ? "#3DC6EF" : "#008cc9"}>
                    Places.
                  </Text>
                  <Image boxSize='3rem' src='https://em-content.zobj.net/thumbs/160/apple/81/rocket_1f680.png' />
                </HStack>
              </Heading>
            </Flex>

            <Text p='2rem 0' color={theme ? 'darkgray' : 'gray'}>
              We are travel agency giving you marvelous experience. So, get your ticket with low price to your favourite destination.
            </Text>

            <Flex w={{ base: '90%', md: '100%', lg: '100%' }} flexDirection={{ base: 'column', md: 'row', lg: 'row' }} bg={theme ? '#191b1d' : 'white'} borderRadius='1.2rem' p='1.5rem' mt='2rem'>
              <Box w='100%'>
                <Flex gap={2} align='center'>
                  <IconButton icon={<SlLocationPin />} bg={theme ? 'rgb(36,45,54)' : 'gray.600'} size='xs' color='#3DC6EF' borderRadius='50%' fontSize='0.8rem' />
                  <Text color={theme ? 'darkgray' : 'blackAlpha.900'} fontWeight='500'>Location</Text>
                </Flex>
                {/* this one */}
                <Menu _hover={{ bg: "#191b1d" }}>
                  <MenuButton ml='1rem' variant='ghost' as={Button} colorScheme='none' rightIcon={<ChevronDownIcon />} _hover={theme ? { bg: "#191b1d" } : { bg: "whiteAlpha.100" }}>
                    {location}
                  </MenuButton>
                  <MenuList bg={theme ? '#191b1d' : 'white'} border='none' _hover={theme ? { bg: "#191b1d" } : { bg: "white" }}>
                    <MenuItem bg={theme ? '#191b1d' : 'white'} onClick={() => { setlocation('Asia') }}>Asia</MenuItem>
                    <MenuItem bg={theme ? '#191b1d' : 'white'} onClick={() => { setlocation('Europe') }}>Europe</MenuItem>
                    <MenuItem bg={theme ? '#191b1d' : 'white'} onClick={() => { setlocation('Latin_America') }}>Latin America</MenuItem>
                    <MenuItem bg={theme ? '#191b1d' : 'white'} onClick={() => { setlocation('Africa') }}>Africa</MenuItem>
                  </MenuList>
                </Menu>
              </Box>

              <Center height='50px'>
                <Divider display={{ base: 'none', md: 'block', lg: 'block' }} orientation='vertical' />
              </Center>

              <Box w='100%' pl={{ base: '0rem', md: '2rem', lg: '2rem' }}>
                <Flex gap={2} align='center'>
                  <IconButton icon={<SlCalender />} bg={theme ? 'rgb(36,45,54)' : 'gray.600'} size='xs' color='#3DC6EF' borderRadius='50%' fontSize='0.8rem' />
                  <Text color={theme ? 'darkgray' : 'blackAlpha.900'} fontWeight='500'>Date</Text>
                </Flex>

                <Input
                  m={{ base: '15px 0 15px 2rem', md: '0.5rem 0', lg: '0.5rem 0' }}
                  size='sm'
                  htmlSize={4}
                  variant='unstyled'
                  w={{ base: '7rem', md: '9rem', lg: '11rem' }}
                  placeholder=" Select Date and Time"
                  type="date"
                  onChange={(e) => { setdate(e.target.value) }}
                />
              </Box>

              <Flex align='center' mt={{ base: '1rem', md: '0' }}>
                <IconButton onClick={listfunc} bg={theme ? "#3DC6EF" : "#008cc9"} w={{ base: '100%', md: '80%', lg: '80%' }} size='lg' color={theme ? 'black' : 'white'} colorScheme='none' borderRadius='0.8rem' icon={<FiSearch />} />
              </Flex>
            </Flex>
          </Box>


          <Flex justify='flex-end' w={{ base: '95%', md: '80%', lg: '60%' }} mt={{ base: '2rem', md: '2rem', lg: '0' }}>
            <Flex w={{ base: '90%', md: '80%', lg: '80%' }} align='center'>
              <Image src={modelOne1} w='100%' />
            </Flex>
          </Flex>

        </Flex>

        {/* Card */}

        <Box mt='5rem' p={{ base: '0 1.5rem', md: '0 3rem', lg: '0 4.5rem' }}>
          <Box>
            <Text fontWeight='500' color={theme ? "#3DC6EF" : "#008cc9"}>
              Top Destination
            </Text>

            <Flex mt='0.7rem' flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>
              <Box w={{ base: '90%', md: '80%', lg: '25%' }}>
                <Heading>
                  WanderList for Your WanderLust
                </Heading>
              </Box>

              <Spacer />

              <Flex gap={3} align='end' p={{ base: '1rem 0', md: 'none', lg: 'none' }}>
                <IconButton
                  bg={theme ? "#3DC6EF" : "#008cc9"}
                  color={theme ? 'black' : 'white'}
                  colorScheme='none'
                  size='lg'
                  borderRadius='0.8rem'
                  icon={<IoIosArrowBack />}
                />

                <IconButton
                  bg={theme ? "#3DC6EF" : "#008cc9"}
                  color={theme ? 'black' : 'white'}
                  colorScheme='none'
                  size='lg'
                  borderRadius='0.8rem'
                  icon={<IoIosArrowForward />}
                />
              </Flex>
            </Flex>
          </Box>

          <Grid justifyContent='center' mt='4rem' templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}>

            <GridItem p={{ base: '1rem 0', md: '1rem 0', lg: '0' }}>
              <Card maxW='90%' borderRadius='1rem' bg={theme ? '#101214' : 'white'} _hover={theme ? { bg: "#191b1d" } : { bg: 'gray.200' }} m='auto' cursor='pointer'>
                <CardBody p='1rem'>
                  <AspectRatio ratio={1}>
                    <Image
                      src='https://wallpaper.dog/large/10769570.jpg'
                      alt='Green double couch with wooden legs'
                      borderRadius='1.1rem'
                    />
                  </AspectRatio>
                  <Stack mt='6' spacing='3'>
                    <Heading color={theme ? 'white' : 'black'} fontWeight='500' size='md'>7 Days Bali and Gili Islands Epid Experience</Heading>
                    <Text color='gray'>
                      Bali, Indonesia
                    </Text>
                    <HStack spacing={0}>
                      <Text color='blue.600' fontSize='2xl' fontWeight='bold'>
                        $
                      </Text>
                      <Text color={theme ? 'white' : 'black'} fontSize='2xl' fontWeight='600'>35</Text>
                      <Text color='gray' fontSize='xs' p='0 0.3rem'>/Person</Text>
                    </HStack>
                  </Stack>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem p={{ base: '1rem 0', md: '1rem 0', lg: '0' }}>
              <Card maxW='90%' borderRadius='1rem' bg={theme ? '#101214' : 'white'} _hover={theme ? { bg: "#191b1d" } : { bg: 'gray.200' }} m='auto' cursor='pointer'>
                <CardBody p='1rem'>
                  <AspectRatio ratio={1}>
                    <Image
                      src='https://www.elitehavens.com/magazine/wp-content/uploads/2019/09/darren-lawrence-HUPP2SzqGg-unsplash-scaled.jpg'
                      alt='Green double couch with wooden legs'
                      borderRadius='1.1rem'
                    />
                  </AspectRatio>
                  <Stack mt='6' spacing='3'>
                    <Heading color={theme ? 'white' : 'black'}  fontWeight='500' size='md'>Bali Bucket List Boutique 10 Day Tour Package</Heading>
                    <Text color='gray'>
                      Bali, Indonesia
                    </Text>
                    <HStack spacing={0}>
                      <Text color='blue.600' fontSize='2xl' fontWeight='bold'>
                        $
                      </Text>
                      <Text color={theme ? 'white' : 'black'} fontSize='2xl' fontWeight='600'>42</Text>
                      <Text color='gray' fontSize='xs' p='0 0.3rem'>/Person</Text>
                    </HStack>
                  </Stack>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem p={{ base: '1rem 0', md: '1rem 0', lg: '0' }}>
              <Card maxW='90%' borderRadius='1rem' bg={theme ? '#101214' : 'white'} _hover={theme ? { bg: "#191b1d" } : { bg: 'gray.200' }} m='auto' cursor='pointer'>
                <CardBody p='1rem'>
                  <AspectRatio ratio={1}>
                    <Image
                      src='https://images.unsplash.com/photo-1531778272849-d1dd22444c06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&w=1000&q=80'
                      alt='Green double couch with wooden legs'
                      borderRadius='1.1rem'
                    />
                  </AspectRatio>
                  <Stack mt='6' spacing='3'>
                    <Heading color={theme ? 'white' : 'black'} fontWeight='500' size='md'>The Best of Bali, Gilis and Penida Island Experience</Heading>
                    <Text color='gray'>
                      Bali, Indonesia
                    </Text>
                    <HStack spacing={0}>
                      <Text color='blue.600' fontSize='2xl' fontWeight='bold'>
                        $
                      </Text>
                      <Text color={theme ? 'white' : 'black'} fontSize='2xl' fontWeight='600'>76</Text>
                      <Text color='gray' fontSize='xs' p='0 0.3rem'>/Person</Text>
                    </HStack>
                  </Stack>
                </CardBody>
              </Card>
            </GridItem>

          </Grid>


        </Box>


        {/* category div */}

        <Box bg={theme ? '#191b1d' : 'gray.200'} mt='5rem' p='5rem 0 0 0'>

          <Flex justify='center'>
            <Box w={{ base: '50%', md: '60%', lg: '40%' }} textAlign='center'>
              <Text fontWeight='500' color={theme ? "#3DC6EF" : "#008cc9"}>Holiday Easily</Text>
              <Heading >
                Book Tickets and Plan Your Holiday Easily
              </Heading>
              <Text p='2rem 0' color={theme ? 'darkgray' : 'gray'}>
                Discover a place that suits your kind of trip. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
              </Text>
            </Box>
          </Flex>


          <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} p='4.5rem' >

            <GridItem lineHeight='2rem'>
              <Flex direction='column' minH='17rem' justifyContent='start' textAlign='center' gap='2rem'>
                <Box w='70%' mx='auto'>
                  <Flex justify='center'>
                    <Image src={iconOne} blendMode={theme ? 'lighten' : 'darken'} />
                  </Flex>

                  <Text fontWeight='500' fontSize='1.2rem'>
                    Easy to Buy Tickets
                  </Text>
                  <Text color='gray' fontWeight='500' >
                    Sed ut perspiciatis unde omnis iste natus.
                  </Text>
                </Box>
              </Flex>
            </GridItem>

            <GridItem lineHeight='2rem'>
              <Flex direction='column' minH='17rem' justifyContent={{ base: 'start', lg: 'end' }} textAlign='center' gap='1rem'>
                <Box w='70%' mx='auto'>
                  <Flex justify='center'>
                    <Image src={iconTwo} blendMode={theme ? 'lighten' : 'darken'} />
                  </Flex>

                  <Text fontWeight='500' fontSize='1.2rem'>
                    Easy to Buy Tickets
                  </Text>
                  <Text color='gray' fontWeight='500' >
                    Sed ut perspiciatis unde omnis iste natus.
                  </Text>
                </Box>
              </Flex>
            </GridItem>

            <GridItem lineHeight='2rem'>
              <Flex direction='column' minH='17rem' justifyContent='start' textAlign='center' gap='1rem'>
                <Box w='70%' mx='auto'>
                  <Flex justify='center'>
                    <Image src={iconThree} blendMode={theme ? 'lighten' : 'darken'} />
                  </Flex>

                  <Text fontWeight='500' fontSize='1.2rem'>
                    Easy to Buy Tickets
                  </Text>
                  <Text color='gray' fontWeight='500' >
                    Sed ut perspiciatis unde omnis iste natus.
                  </Text>
                </Box>
              </Flex>
            </GridItem>

            <GridItem lineHeight='2rem'>
              <Flex direction='column' minH='17rem' justifyContent={{ base: 'start', lg: 'end' }} textAlign='center' gap='1rem'>
                <Box w='70%' mx='auto'>
                  <Flex justify='center'>
                    <Image src={iconFour} blendMode={theme ? 'lighten' : 'darken'} />
                  </Flex>

                  <Text fontWeight='500' fontSize='1.2rem'>
                    Easy to Buy Tickets
                  </Text>
                  <Text color='gray' fontWeight='500' >
                    Sed ut perspiciatis unde omnis iste natus.
                  </Text>
                </Box>
              </Flex>
            </GridItem>

          </Grid>

        </Box>


        <Flex p={{ base: '2rem 1.5rem', md: '4rem 3rem', lg: '5rem 4.5rem' }} flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>

          <Flex w={{ base: '100%', md: '80%', lg: '50%' }} justify='center' >
            <Flex w={{ base: '90%', md: '80%', lg: '70%' }} >
              <Image src={modelTwo} w='100%' />
            </Flex>
          </Flex>

          <Box p='5rem 0' w={{ base: '90%', md: '100%', lg: '50%' }}>
            <Box w={{ base: '100%', md: '90%', lg: '70%' }}>
              <Text fontWeight='500' color={theme ? "#3DC6EF" : "#008cc9"}>Our Experiences</Text>

              <Heading mt='0.5rem'>
                Save More With Our Best Deals
              </Heading>

              <Text p='2rem 0' color={theme ? 'darkgray' : 'gray'}>
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
              </Text>

            </Box>

            <Flex w={{ base: '40%', md: '50%', lg: '60%' }} flexDirection={{ base: 'column', md: 'row', lg: 'row' }} justify='space-between'>
              <Box pt={{ base: '1rem', md: '0rem', lg: '0' }}>
                <Heading fontSize='2.1rem' mb='1rem' color={theme ? "#3DC6EF" : "#008cc9"}>12+</Heading>
                <Text color={theme ? 'darkgray' : 'gray'}>Years</Text>
                <Text color={theme ? 'darkgray' : 'gray'}>Experience</Text>
              </Box>

              <Box pt={{ base: '1rem', md: '0rem', lg: '0' }} px={{ base: '0', md: '1.5rem', lg: '0' }}>
                <Heading fontSize='2.1rem' mb='1rem' color={theme ? "#3DC6EF" : "#008cc9"}>15k+</Heading>
                <Text color={theme ? 'darkgray' : 'gray'}>Success</Text>
                <Text color={theme ? 'darkgray' : 'gray'}>Journey</Text>
              </Box>

              <Box pt={{ base: '1rem', md: '0rem', lg: '0' }} px={{ base: '0', md: '1rem', lg: '0' }}>
                <Heading fontSize='2.1rem' mb='1rem' color={theme ? "#3DC6EF" : "#008cc9"}>9+</Heading>
                <Text color={theme ? 'darkgray' : 'gray'}>Awards</Text>
                <Text color={theme ? 'darkgray' : 'gray'}>Winnig</Text>
              </Box>
            </Flex>

          </Box>
        </Flex>


        <Box mt='3rem' p={{ base: '0 1.5rem', md: '0 3rem', lg: '0 4.5rem' }}>
          <Text fontWeight='500' color={theme ? "#3DC6EF" : "#008cc9"}>
            What They Say
          </Text>

          <Flex mt='0.7rem' flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>
            <Box w={{ base: '90%', md: '80%', lg: '30%' }}>
              <Heading>
                Our Customers Say About Us
              </Heading>
            </Box>

            <Spacer />

            <Flex gap={3} align='end' p={{ base: '1rem 0', md: 'none', lg: 'none' }}>
              <IconButton
                onClick={() => { setval(val + 300) }} isDisabled={val === 0}
                bg={theme ? "#3DC6EF" : "#008cc9"}
                color={theme ? 'black' : 'white'}
                colorScheme='none'
                size='lg'
                borderRadius='0.8rem'
                icon={<IoIosArrowBack />}
              />

              <IconButton
                onClick={() => { setval(val - 300) }} isDisabled={val <= -900}
                bg={theme ? "#3DC6EF" : "#008cc9"}
                color={theme ? 'black' : 'white'}
                colorScheme='none'
                size='lg'
                borderRadius='0.8rem'
                icon={<IoIosArrowForward />}
              />
            </Flex>
          </Flex>


          <Box >
            <Box mt='2.5rem'>
              <Box overflow='hidden'>
                <div style={{ display: 'flex', translate: `${val}px 0px`, transition: '1s' }}>
                  {
                    carouselData.map((item) => {
                      return <ReviewCarousel theme={theme} {...item} />
                    })
                  }
                </div>
              </Box>
            </Box>
          </Box>


          <Flex align='center' justify='space-between' mt='5rem' flexWrap='wrap'>
            <Box >
              <Text p={{ base: '1rem 0', md: 'none', lg: 'none' }} fontWeight='500' color={theme ? "#3DC6EF" : "#008cc9"}>Stay Connected</Text>
              <Heading>Get Started with Adventour!</Heading>
            </Box>

            <Box p={{ base: '1rem 0', md: 'none', lg: 'none' }}>
              <Button onClick={()=>{
                window.scrollTo({
                  top: 0, 
                  behavior: 'smooth'
                });
              }} rightIcon={<ArrowForwardIcon />} bg={theme ? "#3DC6EF" : "#008cc9"} _hover={theme ? { bg: '#74d4f0' } : { bg: '#008cc9' }} color={theme ? 'black' : 'white'} borderRadius='0.8rem' p='0 2rem'><Text fontWeight='600'>Get Started</Text></Button>
            </Box>
          </Flex>

        </Box>


        <Footer theme={theme} />

      </Box>

    </>

  )
}

export default Home