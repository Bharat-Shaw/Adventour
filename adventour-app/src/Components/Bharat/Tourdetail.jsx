import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Flex, HStack, Heading, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Spacer, Tag, Text, Textarea, useDisclosure, useToast } from '@chakra-ui/react'
import { DownloadIcon, QuestionOutlineIcon } from '@chakra-ui/icons'
import brochure from './ext/brochure.pdf'
import { AiOutlineHeart, AiOutlineFieldTime } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import { RiFileCopy2Line } from "react-icons/ri";
import { MdGroup, MdVerified } from "react-icons/md";
import Toggle from './toggle';
import { BiShieldQuarter } from "react-icons/bi";
import { MdOutlineTipsAndUpdates, MdOutlineVerified } from "react-icons/md";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { IoMdBed } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { MdTour } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import styles from './ext/Tourdetail.module.css'
import ExpandComp from './ExpandComp';
import Footer from '../Faizan/Footer';
import NavBar from '../Vivek/NavBar';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


function Tourdetail() {
  const dispatch=useDispatch()
  const ref = useRef(null)
  const {location}=useParams()
  const {id}=useParams()
  const theme=useSelector(state=>state.theme);
  const storedata=useSelector(state=>state.detail)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast()
  const [val, setval] = useState(-10);
  const imgarr = ['https://cdn.tourradar.com/s3/tour/1500x800/14263_5df8b6cf672a0.jpg',
    'https://cdn.tourradar.com/s3/tour/1500x800/14263_c52ec9.jpg',
    'https://cdn.tourradar.com/s3/review/1500x800/14263_5df8b793b7481.jpg',
    'https://cdn.tourradar.com/s3/tour/1500x800/14263_4a0e0afd.jpg'];
  const [image, setimage] = useState(imgarr[0])
  const [wish, setwish]=useState(false)

  useEffect(() => {
    axios.get(`https://weak-rose-seahorse-tutu.cyclic.app/api/${location}/${id}`)
    .then((res)=>{dispatch({type:'DETAIL', payload:res.data})})

    window.scrollTo({
      top: 0, 
    });
    // timer()
    // return () => {
    //   clearTimeout(ref.current)
    // }
  }, [])

  const timer=()=>{
    let i = 0;
    ref.current = setInterval(() => {
      if (i === imgarr.length) { i = 0; }
      setimage(imgarr[i])
      i++;
    }, 2000)
  }

  return (
    <Box bgColor={theme ? '#101214' : 'gray.100'} minH={'100vh'}>
      {/* <Box>
          <Image w={'300px'} src={image}/>
        </Box> */}
      <Toggle  />
      <NavBar/>


      <Box m={'auto'} pt={'100px'} w={{ base: '90%', md: '76%', lg: '76%' }} color={theme ? 'white' : 'blackAlpha.800'}>


        <Flex flexDirection={{ base: 'column', md: 'column', lg: 'row' }} >
          {/* <AspectRatio ratio={16/9}> */}
          <Image src={image} boxShadow={'md'} mb={{ base: '30px' }} borderRadius={'20px'} width={{ base: '100%', md: '100%', lg: '60%' }} h={{ base: '100%', md: '100%', lg: '40%' }}/>
          {/* </AspectRatio> */}
          <Box textAlign={'left'} pl={'40px'} w={{ base: '90%', md: '70%', lg: '38%' }}>
            <Heading size='xl' pb={'15px'}>{storedata?.title}</Heading>
            <Text pb={'10px'}><strong> {storedata?.tour_length} days • {storedata?.rating}</strong> ⭐ ({storedata?.reviews})</Text>
            <Text pb={'15px'}>From <strong>Cusco</strong> to <strong>Juliaca</strong></Text>
            <Box w={'80%'} mb={'15px'}>
              <Tag mr={'10px'} color={theme ? 'whiteAlpha.900' : 'blackAlpha.800'} bg='#3DC6EF' mb={'15px'}>Explorer</Tag>
              <Tag mr={'10px'} color={theme ? 'whiteAlpha.900' : 'blackAlpha.800'} bg='#3DC6EF' mb={'15px'}>Family</Tag>
              <Tag mr={'10px'} color={theme ? 'whiteAlpha.900' : 'blackAlpha.800'} bg='#3DC6EF' mb={'15px'}>Private</Tag>
              <Tag mr={'10px'} color={theme ? 'whiteAlpha.900' : 'blackAlpha.800'} bg='#3DC6EF' mb={'15px'}>Group</Tag>
              <Tag mr={'10px'} color={theme ? 'whiteAlpha.900' : 'blackAlpha.800'} bg='#3DC6EF' mb={'15px'}>Historical</Tag>
              <Tag mr={'10px'} color={theme ? 'whiteAlpha.900' : 'blackAlpha.800'} bg='#3DC6EF' mb={'15px'}>Fully Guided</Tag>
            </Box>
            <Box>

              <SimpleGrid templateColumns='repeat(2, 1fr)' gap={1}>
                <Text><strong>Tour Operator:</strong><br />Inkayni Peru Tours</Text>
                <Text><strong>Max group size:</strong><br />{storedata?.group_size}</Text>
                <Text><strong>Age range:</strong><br />{storedata?.age_range} yrs</Text>
                <Text><strong>Operated in:</strong><br />English</Text>
              </SimpleGrid >
            </Box>
          </Box>
        </Flex>

        <Box w={{ base: '100%', md: '100%', lg: '60%' }} textAlign={'left'} >
          <Flex alignItems={'center'} flexDirection={{ base: 'column', md: 'row' }} px={'30px'} bgColor={theme ? '#191b1d' : 'white'} color={'black'} mt={{ base: '30px', md: '20px', lg: '5px' }} borderRadius={'20px'} boxShadow={'md'}>
            <Text fontWeight={'700'} color={theme ? 'white' : 'blackAlpha.800'} py={'20px'} px={'10px'} fontSize={'14px'}>Plan your adventure:</Text>
            <Spacer />
            <HStack cursor={'pointer'} color={'#3DC6EF'} py={'20px'} px={'10px'}><Link href={brochure} download={true}> <DownloadIcon color={'#3DC6EF'} />&nbsp;</Link><Text fontSize={'14px'}> Download PDF Brochure</Text></HStack>
            <Spacer />
            <HStack onClick={onOpen} cursor={'pointer'} color={'#3DC6EF'} py={'20px'} px={'10px'}><Link><QuestionOutlineIcon color={'#3DC6EF'} />&nbsp;</Link><Text fontSize={'14px'}>Ask a Question</Text></HStack>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent bg={theme ? '#101214 ' : 'gray.100'} color={theme ? 'white' : '#101214 '}>
                <ModalHeader mt={'20px'}>Ask a Question</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <Text fontWeight={600} mb={'15px'}>Title:</Text>
                  <Input mb={'15px'} placeholder='title' />
                  <Text mb={'15px'} fontWeight={600}>Description:</Text>
                  <Textarea placeholder='description........' />
                </ModalBody>
                <ModalFooter>
                  <Button mb={'15px'} color={'white'} colorScheme='cyan' mr={3} onClick={() => {
                    onClose();
                    toast({
                      title: 'Submitted.',
                      description: "Your query has been submitted.",
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                    })
                  }}>
                    Submit
                  </Button>
                </ModalFooter>

              </ModalContent>
            </Modal>

          </Flex>
        </Box>

        <Flex mt={'20px'} flexDirection={{ base: 'column', md: 'column', lg: 'row' }} alignItems={'center'}>
          <Box h={'300px'} borderRadius={'20px'} overflow='hidden' position={'relative'} w={{ base: '100%', md: '100%', lg: '60%' }}>
            <IconButton borderRadius={'50%'} h={'40px'} position={'absolute'} top={'42%'} left={'0%'} zIndex={'2'} onClick={() => { setval(val + 300) }} colorScheme='none' bg={'blackAlpha.700'} isDisabled={val === -10}
              icon={<AiOutlineCaretLeft size={'20px'} />} />
            <IconButton borderRadius={'50%'} h={'40px'} position={'absolute'} top={'42%'} right={'0%'} zIndex={'2'} onClick={() => { setval(val - 300) }} colorScheme='none' bg={'blackAlpha.700'} isDisabled={val < -800}
              icon={<AiOutlineCaretRight size={'20px'} />} />
            <div style={{ height: '100%', display: 'flex', translate: `${val}px 0px`, transition: '1s' }}>
              {storedata?.places_see_img?.map((el)=>{
                return <Image borderRadius={'30px'} p={'10px'} w={'60%'} height='100%' src={el} />
              })}
            </div>
          </Box>

          <div className={styles.posi}>
            <Flex bg={theme ? '#191b1d' : 'white'} direction={'column'} w={{ base: '100%', md: '110%', lg: '350px' }} boxShadow={'md'} border={'1px solid silver'} p={'20px'} mt={{ base: '40px', md: '10px' }} ml={{ base: '0px', md: '0px', lg: '40px' }} borderRadius={'20px'}>
              <Flex w={{ base: '100%', md: '100%', lg: '300px' }}>
                <Text><s>From ₹{(storedata?.str_price)?.toLocaleString("en-US")}</s> </Text><Spacer /> <Tag colorScheme='red' color={'red'}>-{storedata?.off}%</Tag>
              </Flex>
              <Text w={{ base: '100%', md: '100%', lg: '300px' }} textAlign={'left'} fontSize='4xl' fontWeight={'700'}>₹{(storedata?.act_price)?.toLocaleString("en-US")}</Text>
              <Flex mb={'20px'} w={{ base: '100%', md: '100%', lg: '300px' }} alignItems={'center'} pt={'10px'} pb={'10px'}>
                <Link to={`/payment/${location}/${id}`}><Button h={'45px'} w={{ base: '85%', md: '85%', lg: '230px' }} colorScheme='none' fontWeight={'700'} bg={theme ? "#3DC6EF" : "#008cc9"} color={theme ? 'white' : 'blackAlpha.700'} borderRadius={'40px'}>Check Availability</Button></Link>
                <Spacer />
                <IconButton onClick={()=>{
                  if(!wish){
                    toast({
                      title: 'Added to WishList.',
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                    })
                  }else {
                    toast({
                      title: 'Removed from Wishlist',
                      status: 'info',
                      duration: 3000,
                      isClosable: true,
                    })
                  }
                  setwish(!wish)
                }} rounded="full" size="md" boxShadow={'md'} h={'45px'} w={'45px'} shadow='md' colorScheme='none' bg={wish?'red.200':'white'} color={'blackAlpha.700'} icon={<AiOutlineHeart size={'30px'} />} />
              </Flex>
              <Flex mb={'20px'}><AiOutlineFieldTime size={'25px'} /><Text lineHeight={'20px'} w={{ base: '100%', md: '100%', lg: '85%' }} pl={'10px'} textAlign={'left'}>Pay over time with smaller, interest-free instalments. <Link> Learn More</Link></Text></Flex>
              <Flex color={!theme ? 'blackAlpha.800' : 'whiteAlpha.900'}><MdOutlineVerified size={'25px'} /><Text lineHeight={'20px'} w={{ base: '100%', md: '100%', lg: '85%' }} pl={'10px'} textAlign={'left'}>Book once and share the cost with split payments.<Link> Learn More</Link></Text></Flex>
            </Flex>
          </div>
        </Flex>

        <Box>
          <Image mt={{ base: '20px', md: '30px', lg: '40px' }} h={'250px'} borderRadius={'20px'} w={{ base: '100%', md: '100%', lg: '60%' }} src={storedata?.map_img} />
        </Box>

        <Flex direction={'column'} mt={'55px'} textAlign={'left'} lineHeight={'30px'}>
          <Text pb={'20px'} fontSize='2xl' fontWeight={'600'}>Highlights</Text>
          <HStack pb={'10px'}><BsCheck2 size={'25px'} /> <Text pl={'10px'} fontSize='lg'>Arrive at Machu Picchu before sunrise and the crowds</Text></HStack>
          <HStack pb={'10px'}><BsCheck2 size={'25px'} /> <Text pl={'10px'} fontSize='lg'>Witness the locals in their element with Andean weaving</Text></HStack>
          <HStack pb={'10px'}><BsCheck2 size={'25px'} /> <Text pl={'10px'} fontSize='lg'>Capture a photo with Peru’s resident alpacas and llamas</Text></HStack>
          <HStack pb={'10px'}><BsCheck2 size={'25px'} /> <Text pl={'10px'} fontSize='lg'>Cruise to the Uros Floating Islands of tranquil Titicaca</Text></HStack>
        </Flex>

        <Flex direction={'column'} mt={'40px'} textAlign={'left'}>
          <Text mb={'35px'} fontSize={'25px'} fontWeight={'500'}>Ready-to-book adventures, personalized</Text>
          <SimpleGrid columns={2} w={'69%'} lineHeight={'25px'} spacing={'20px'}>
            <Flex>
              <RiFileCopy2Line size={'25px'} />
              <Text pl={'18px'}><strong>Personal</strong><br />Make your adventure more you </Text>
            </Flex>
            <Flex>
              <MdGroup size={'25px'} />
              <Text pl={'18px'}><strong>Private</strong><br />Enjoy a tour focused solely on your travel group </Text>
            </Flex>
            <Flex>
              <MdOutlineTipsAndUpdates size={'25px'} />
              <Text pl={'18px'}><strong>Professional</strong><br />Access our Travel Experts’ insider knowledge</Text>
            </Flex>
            <Flex>
              <BiShieldQuarter size={'25px'} />
              <Text pl={'18px'}><strong>Protected</strong><br />Travel within your own bubble </Text>
            </Flex>
          </SimpleGrid>
        </Flex>

        <Flex direction={'column'} mt={'40px'} pb={'30px'} lineHeight={'50px'}>
          <HStack pb={'20px'}><Text fontSize={'25px'} fontWeight={'600'}>What's Included</Text></HStack>
          <Box pl={'10px'}>
            <HStack><MdVerified /><Text>Accommodation</Text></HStack>
            <HStack><MdVerified /><Text>Accommodation</Text></HStack>
            <HStack><MdVerified /><Text>Guide</Text></HStack>
            <HStack><MdVerified /><Text>Meals</Text></HStack>
            <HStack><MdVerified /><Text>Additional Services</Text></HStack>
            <HStack><MdVerified /><Text>Transport</Text></HStack>
            <HStack><MdVerified /><Text>Flights</Text></HStack>
            <HStack><MdVerified /><Text>Insurance</Text></HStack>
            <HStack><MdVerified /><Text>Optional</Text></HStack>
            <HStack><MdVerified /><Text>Additional Services</Text></HStack>
          </Box>
        </Flex>

        <Flex direction={'column'} >
          <Text textAlign={'left'} fontSize={'25px'} fontWeight={'600'} pb={'25px'}>Customer Reviews</Text>
          <HStack shadow='md' bg={theme ? 'gray.900' : 'blue.100'} borderRadius={'20px 20px 0 0'} mb={'2px'} px={'20px'} py={'10px'} w={{ base: '90%', md: '76%', lg: '62%' }}>
            <HStack textAlign={'left'}><BsStars /><Text>Overall Rating<br />Excellent</Text></HStack>
            <Spacer />
            <Text>4.4 ⭐</Text>
          </HStack>

          <SimpleGrid columns={{ base: '1', md: '1', lg: '2' }} gap={'2px'} w={{ base: '90%', md: '76%', lg: '62%' }}>
            <HStack bg={theme ? '#191b1d' : 'white'} shadow='md' px={'20px'} py={'5px'} w={'100%'}>
              <HStack textAlign={'left'}><FaClipboardList /><Text>Itinerary<br />Excellent</Text></HStack>
              <Spacer />
              <Text>4.4 ⭐</Text>
            </HStack>
            <HStack bg={theme ? '#191b1d' : 'white'} shadow='md' px={'20px'} py={'5px'} w={'100%'}>
              <HStack textAlign={'left'}><FaUserCheck /><Text>Guide<br />Excellent</Text></HStack>
              <Spacer />
              <Text>4.9 ⭐</Text>
            </HStack>
            <HStack bg={theme ? '#191b1d' : 'white'} shadow='md' px={'20px'} py={'5px'} w={'100%'}>
              <HStack textAlign={'left'}><GiCarWheel /><Text>Transport<br />Excellent</Text></HStack>
              <Spacer />
              <Text>4.2 ⭐</Text>
            </HStack>
            <HStack bg={theme ? '#191b1d' : 'white'} shadow='md' px={'20px'} py={'5px'} w={'100%'}>
              <HStack textAlign={'left'}><IoMdBed /><Text>Accommodation<br />Good</Text></HStack>
              <Spacer />
              <Text>4.8 ⭐</Text>
            </HStack>
            <HStack bg={theme ? '#191b1d' : 'white'} shadow='md' borderRadius={{ base: '0 0 0 0', md: '0 0 0 0', lg: '0 0 0 20px' }} px={'20px'} py={'5px'} w={'100%'}>
              <HStack textAlign={'left'}><ImSpoonKnife /><Text>Food<br />Good</Text></HStack>
              <Spacer />
              <Text>4.4 ⭐</Text>
            </HStack>
            <HStack bg={theme ? '#191b1d' : 'white'} shadow='md' borderRadius={{ base: '0 0 20px 20px', md: '0 0 20px 20px', lg: '0 0 20px 0 ' }} px={'20px'} py={'5px'} w={'100%'}>
              <HStack textAlign={'left'}><MdTour /><Text>Tour Operator<br />Excellent</Text></HStack>
              <Spacer />
              <Text>4.0 ⭐</Text>
            </HStack>
          </SimpleGrid>
        </Flex>

        

        
      </Box>
      <ExpandComp />
      <Footer />
    </Box>
  )
}

export default Tourdetail