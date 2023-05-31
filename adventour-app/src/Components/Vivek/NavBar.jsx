import {
  Box, Flex, Text, Input, Image, InputGroup,
  InputLeftElement, Popover, PopoverTrigger,
  Button, PopoverContent, PopoverHeader,
  PopoverBody, HStack, useDisclosure,
  Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton,
  DrawerHeader, DrawerBody, Divider
} from '@chakra-ui/react'
import Logo from './Logos/LogoPic.png'
import { SearchIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CgProfile } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";

import {
  faMessage, faPercent, faCamera, faLocationDot, faBars,
  faArrowRightFromBracket, faSliders, faStar, faHeart, faTicket,
  faEnvelopeOpen, faCircleUser, faFontAwesome, faWandMagicSparkles,
  faPersonHiking, faShip, faBicycle, faUtensils, faFilm, faCompass,
  faEnvelope, faPhone, faEarthAmericas
} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function NavBar() {
  const theme=useSelector(state=>!state.theme);

  return (
    <Box w={"100%"} position={'fixed'} zIndex={'1'} bg={theme ? "white" : "#191b1d"}>
      <Box w={{ base: '95%', md: '95%', lg: '76%' }} py={"3"} m="auto" bg={theme ? "white" : "#191b1d"} color={theme ? "blackAlpha.800" : "white"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box alignItems={"center"} w={{ base: '25%', md: '25%', lg: '20%' }}>
            <Link to={'/'}><Flex alignItems={"center"}>
              <Image src={Logo} alt='logo' w={"70px"} px={"8px"} />
              <Text fontSize={"1.2rem"} fontWeight={"800"} display={{ base: 'none', md: 'flex', lg: 'flex' }}>Adventour.</Text>
            </Flex></Link>
          </Box>
          <Box w={{ base: '50%', md: '50%', lg: '35%' }} px={"10px"} >
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <SearchIcon color={theme ? "#101214" : "white"} />
              </InputLeftElement>
              <Input type='text' placeholder='Where do you want to go' />
            </InputGroup>
          </Box>
          <Flex alignItems={"center"} w={"40%"} justifyContent={"space-between"} ml={"20px"} display={{ base: 'none', md: 'none', lg: 'flex' }} >
            <Box>
              <Popover trigger={"hover"}>
                <PopoverTrigger>
                  <Button colorScheme='none' borderRadius={"50px"} fontSize={"17px"} color={theme ? "blackAlpha.800" : "white"}>Destinations</Button>
                </PopoverTrigger>
                <PopoverContent mt={"10px"} w={"100%"} py={"10px"} boxShadow='lg' bg={theme ? "white" : "#191b1d"} border={'none'}>
                  <PopoverHeader border={"none"} textAlign={"left"} fontSize={"20px"} fontWeight={"700"} pl={"25px"}>Destination</PopoverHeader>
                  <Divider pb={'5px'} />
                  <PopoverBody >
                    <HStack>
                      <Box mr={"30px"} pl={"20px"}>
                        <Text textAlign={"left"} fontSize={"16px"} fontWeight={"700"} py={"10px"}>Africa</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Tanzania</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Egypt</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Morocco</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Kenya</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Uganda</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>South Africa</Text>
                      </Box>
                      <Box px={"30px"}>
                        <Text textAlign={"left"} fontSize={"16px"} fontWeight={"700"} py={"10px"}>Asia</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>India</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Nepal</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Vietnam</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>China</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>SriLanka</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Thiland</Text>
                      </Box>
                      <Box px={"30px"} >
                        <Text textAlign={"left"} fontSize={"16px"} fontWeight={"700"} py={"10px"}>Australia/Oceania</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Australia</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>New Zealand</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Papua New Guinea</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Fiji</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"45px"}></Text>
                      </Box>
                      <Box px={"30px"}>
                        <Text textAlign={"left"} fontSize={"16px"} fontWeight={"700"} py={"10px"}>Europe</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Iceland</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Spain</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Scotland</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Ireland</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Croatia</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Greece</Text>
                      </Box>
                      <Box px={"30px"}>
                        <Text textAlign={"left"} fontSize={"16px"} fontWeight={"700"} py={"10px"}>North America</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>USA</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Canada</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Greenland</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"65px"}></Text>
                      </Box>
                      <Box px={"30px"}>
                        <Text textAlign={"left"} fontSize={"16px"} fontWeight={"700"} py={"10px"}>Latin America</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Peru</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Ecuador</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Argentina</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Costa Rica</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Mexico</Text>
                        <Text textAlign={"left"} fontSize={"16px"} py={"10px"}>Brazil</Text>
                      </Box>
                    </HStack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
            <Box>
              <Popover trigger={"hover"} >
                <PopoverTrigger>
                  <Button colorScheme='none' fontSize={"17px"} color={theme ? "blackAlpha.800" : "white"}>Adventure Styles</Button>
                </PopoverTrigger>
                <PopoverContent w={"60%"} py={"10px"} bg={theme ? "white" : "#191b1d"} m={"auto"} mt={"10px"} border={'none'}>
                  <PopoverHeader border={"none"} textAlign={"left"} fontSize={"20px"} fontWeight={"700"} pl={"35px"}>Destination</PopoverHeader>
                  <Divider pb={'5px'} />
                  <PopoverBody pt={'20px'}>
                    <Flex justifyContent={"space-between"}>
                      <Box ml={"25px"} w={"30%"} bg={theme ? "gray.100" : "gray.800"} p={"10px"} borderRadius={"20px"} color={theme ? "black" : "white"}>
                        <Text textAlign={"left"} fontSize={"20px"} fontWeight={"700"} paddingBottom={"20px"}>Adventure Styles</Text>
                        <Text textAlign={"left"}>
                          Go wild, go slow, go smooth, go solo - an adventure is what you make of it. Choose one style or create a package, fill your passports with adventures together.
                        </Text>
                      </Box>
                      <Box w={"32%"} p={"10px"} ml={"50px"}>
                        <HStack py={"10px"}>
                          <FontAwesomeIcon icon={faFontAwesome} />
                          <Text textAlign={"left"} paddingLeft={"5px"}>Active Adventure</Text>
                        </HStack>
                        <HStack py={"10px"}>
                          <FontAwesomeIcon icon={faWandMagicSparkles} />
                          <Text textAlign={"left"} paddingLeft={"5px"}>Festival & Events</Text>
                        </HStack>
                        <HStack py={"10px"}>
                          <FontAwesomeIcon icon={faPersonHiking} />
                          <Text textAlign={"left"} paddingLeft={"5px"}>Hiking & Trakking</Text>
                        </HStack>
                        <HStack py={"10px"}>
                          <FontAwesomeIcon icon={faShip} />
                          <Text textAlign={"left"} paddingLeft={"5px"}>River Cruise</Text>
                        </HStack>
                      </Box>
                      <Box w={"32%"} ml={"-50px"} >
                        <HStack py={"20px"}>
                          <FontAwesomeIcon icon={faBicycle} />
                          <Text textAlign={"left"} paddingLeft={"5px"}>Bicycle</Text>
                        </HStack>
                        <HStack py={"10px"}>
                          <FontAwesomeIcon icon={faUtensils} />
                          <Text textAlign={"left"} paddingLeft={"5px"}>Food & Culinary</Text>
                        </HStack>
                        <HStack py={"10px"}>
                          <FontAwesomeIcon icon={faFilm} />
                          <Text textAlign={"left"} paddingLeft={"5px"}>In-depth Cultural</Text>
                        </HStack>
                        <HStack py={"10px"}>
                          <FontAwesomeIcon icon={faCompass} />
                          <Text textAlign={"left"} paddingLeft={"5px"}>Safari</Text>
                        </HStack>
                      </Box>

                    </Flex>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
            <Popover trigger={"hover"}>
              <PopoverTrigger>
                <Button colorScheme='none' borderRadius={"50px"} fontSize={"17px"} color={theme ? "black" : "white"}>Contact</Button>
              </PopoverTrigger>
              <PopoverContent mt={"10px"} w={"100%"} p={"10px"} boxShadow='lg' bg={theme ? "white" : "#191b1d"} border={'none'}>
                <PopoverHeader border={"none"} fontSize={"20px"} fontWeight={"700"}>Contect Us</PopoverHeader>
                <Divider pb={'5px'} />
                <PopoverBody w={"280px"}>
                  <Box>
                    <Text py={"8px"}><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp; www.adventour.gmail.com</Text>
                    {/* <Text textAlign={"left"} py={"3px"}>www.adventour.gmail.com</Text> */}
                    <Text py={"8px"}><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp; +91 9997124529</Text>
                    {/* <Text textAlign={"left"} py={"3px"}>+91 9997124529</Text> */}
                    <Text py={"8px"}><FontAwesomeIcon icon={faEarthAmericas} />&nbsp;&nbsp; www.adventour.com</Text>
                    {/* <Text textAlign={"left"} py={"3px"}>www.adventour.com</Text> */}
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Box>
              <HStack display={'none'}>
                {/*-------- After login Popover --------*/}
                <Popover trigger={"hover"} >
                  <PopoverTrigger>
                    <Box colorScheme='none' borderRadius={"50%"} fontSize={"20px"} fontWeight={"700"} border={"2px solid #3DC6EF"} color={"#3DC6EF"} px={'9px'} ml={'20px'}>V</Box>
                  </PopoverTrigger>
                  <PopoverContent mt={"10px"} w={"100%"} p={"10px"} boxShadow='lg' bg={theme ? "white" : "#191b1d"} border={'none'}>
                    <PopoverHeader border={"none"} textAlign={"left"} fontSize={"22px"} fontWeight={"700"} ml={"5px"}>Hi, User</PopoverHeader>
                    <Divider pb={'5px'} />
                    <PopoverBody w={"250px"}>
                      <Flex flexDirection={"column"} alignItems={"start"} ml={"-10px"}>
                        <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                          <FontAwesomeIcon icon={faCircleUser} fontSize={"20px"} />&nbsp;&nbsp; My Account
                        </Button>
                        <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                          <FontAwesomeIcon icon={faEnvelopeOpen} fontSize={"20px"} />&nbsp;&nbsp; Inbox
                        </Button>
                        <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                          <FontAwesomeIcon icon={faTicket} fontSize={"20px"} />&nbsp;&nbsp; Tour
                        </Button>
                        <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                          <FontAwesomeIcon icon={faStar} fontSize={"20px"} />&nbsp;&nbsp; My Reviews
                        </Button>
                        <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                          <FontAwesomeIcon icon={faHeart} fontSize={"20px"} />&nbsp;&nbsp; Saved Tours
                        </Button>
                        <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                          <FontAwesomeIcon icon={faSliders} fontSize={"20px"} />&nbsp;&nbsp; Account Settings
                        </Button>
                        <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                          <FontAwesomeIcon icon={faArrowRightFromBracket} fontSize={"20px"} />&nbsp;&nbsp; Logout
                        </Button>
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </HStack>

              {/*-------- Before login Popover --------*/}
              <HStack >
                <Popover trigger={"hover"} >
                  <PopoverTrigger>
                    <Button colorScheme='none' borderRadius={"50%"} color={"#3DC6EF"} px={"-10px"} ml={'20px'}><FaUserCircle size={'25px'} /></Button>
                  </PopoverTrigger>
                  <PopoverContent mt={"10px"} w={"100%"} boxShadow='lg' bg={theme ? "white" : "#191b1d"} border={'none'}>
                    <PopoverHeader border={"none"} textAlign={"center"} fontSize={"20px"} py={'15px'} fontWeight={"700"} >My Account</PopoverHeader>
                    <Divider color={'gray'} />
                    <PopoverBody w={"250px"}>
                      <Flex flexDirection={"column"} alignItems={"start"} >
                        <Button colorScheme='none' fontSize={'17px'} fontWeight={'700'} py={'22px'} w={'65%'} m={'auto'} mt={'20px'} color={theme ? "white" : "black"} bg={theme ? "#008cc9" : "#3DC6EF"}>
                          Log In
                        </Button>
                        <Button colorScheme='none' fontSize={'17px'} fontWeight={'700'} py={'22px'} w={'65%'} m={'auto'} my={'20px'} color={theme ? "white" : "black"} bg={theme ? "#008cc9" : "#3DC6EF"}>
                          Sign Up
                        </Button>
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                {/* <Text fontWeight={"620"}></Text> */}
              </HStack>
            </Box>
          </Flex>
          <Box display={'none'}>
            <Box display={{ base: 'flex', md: 'flex', lg: 'none' }}>
              <HemBurgerMenuLogedIn theme={theme} />
            </Box>
          </Box>
          <Box >
            <Box display={{ base: 'flex', md: 'flex', lg: 'none' }}>
              <HemBurgerMenuLogedOut theme={theme} />
            </Box>
          </Box>

        </Flex>
      </Box >
    </Box >

  )
}

function HemBurgerMenuLogedIn({ theme }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = () => {
    onOpen()
  }



  return (
    <>

      <Button
        onClick={() => handleClick()}
        colorScheme='none'
        color={theme ? "black" : "white"}
      ><FontAwesomeIcon icon={faBars} fontSize={"25px"} /></Button>


      <Drawer onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent bg={theme ? "white" : "#191b1d"}>
          <DrawerCloseButton color={theme ? "black" : "white"} />
          <DrawerHeader borderBottom={"1px solid #DCDCDC"} textAlign={"left"} fontSize={"25px"} fontWeight={"700"} ml={"5px"} >
            <Flex alignItems={"center"} color={theme ? "black" : "white"}>
              <CgProfile size={"30px"} color={theme ? "black" : "white"} />&nbsp;
              Hi, User
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex flexDirection={"column"} alignItems={"start"} ml={"-10px"} borderBottom={"1px solid #DCDCDC"} py={"20px"}>
              <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                <FontAwesomeIcon icon={faCircleUser} fontSize={"22px"} />&nbsp;&nbsp; My Account
              </Button>
              <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                <FontAwesomeIcon icon={faEnvelopeOpen} fontSize={"22px"} />&nbsp;&nbsp; Inbox
              </Button>
              <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                <FontAwesomeIcon icon={faTicket} fontSize={"22px"} />&nbsp;&nbsp; Tour
              </Button>
              <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                <FontAwesomeIcon icon={faStar} fontSize={"22px"} />&nbsp;&nbsp; My Reviews
              </Button>
              <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                <FontAwesomeIcon icon={faHeart} fontSize={"22px"} />&nbsp;&nbsp; Saved Tours
              </Button>
              <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                <FontAwesomeIcon icon={faSliders} fontSize={"22px"} />&nbsp;&nbsp; Account Settings
              </Button>
              <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} fontSize={"22px"} />&nbsp;&nbsp; Logout
              </Button>
            </Flex>
            <Flex flexDirection={"column"} alignItems={"start"} ml={"-10px"}>
              <InsideDrawer1 theme={theme} />
              <InsideDrawer2 theme={theme} />
              <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                <FontAwesomeIcon icon={faTicket} fontSize={"22px"} />&nbsp;&nbsp; Manage Bookings
              </Button>
              <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                <FontAwesomeIcon icon={faPercent} fontSize={"22px"} />&nbsp;&nbsp; Deals
              </Button>
              <Button colorScheme='none' my={"5px"} color={theme ? "black" : "white"}>
                <FontAwesomeIcon icon={faMessage} fontSize={"22px"} />&nbsp;&nbsp; Contact
              </Button>

            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
};

function HemBurgerMenuLogedOut({ theme }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = () => {
    onOpen()
  }

  return (
    <>

      <Button
        onClick={() => handleClick()}
        colorScheme='none'
        color={theme ? "black" : "white"}
      ><FontAwesomeIcon icon={faBars} fontSize={"25px"} /></Button>


      <Drawer onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent bg={theme ? "white" : "#191b1d"}>
          <DrawerCloseButton color={theme ? "black" : "white"} />
          <DrawerHeader borderBottom={"1px solid #DCDCDC"} textAlign={"left"} fontSize={"20px"} fontWeight={"700"} ml={"5px"} >
            <Flex alignItems={"center"} color={theme ? "black" : "white"}>
              <CgProfile size={"25px"} color={theme ? "black" : "white"} />&nbsp;
              My Account
            </Flex>
          </DrawerHeader>
          <DrawerBody color={theme ? "black" : "white"}>
            <Text textAlign={"center"} fontSize={"20px"} fontWeight={"700"} mt={'22px'}>Welcome</Text>
            <Text textAlign={"center"} fontSize={"15px"} fontWeight={"700"} mt={'15px'} px={'10px'}> Please Login or Signup <br/>from here </Text>
            <Flex flexDirection={"column"} alignItems={"start"} py={"15px"}>
              <Button colorScheme='none' fontSize={'20px'} fontWeight={'700'} py={'24px'} w={'70%'} m={'auto'} mt={'35px'} color={theme ? "white" : "black"} bg={theme ? "#008cc9" : "#3DC6EF"}>
                Log In
              </Button>
              <Button colorScheme='none' fontSize={'20px'} fontWeight={'700'} py={'24px'} w={'70%'} m={'auto'} my={'35px'} color={theme ? "white" : "black"} bg={theme ? "#008cc9" : "#3DC6EF"}>
                Sign Up
              </Button>

            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
};

function InsideDrawer1({ theme }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button colorScheme='none' my={"10px"} onClick={onOpen} color={theme ? "black" : "white"}>
        <FontAwesomeIcon icon={faLocationDot} fontSize={"22px"} />&nbsp;&nbsp; Destinations
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="sm" variant={"dark"}>
        <DrawerOverlay />
        <DrawerContent color={theme ? "black" : "white"} bg={theme ? "white" : "black"}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px' textAlign={"left"} fontSize={"25px"} fontWeight={"700"} ml={"5px"}>Destinations</DrawerHeader>
          <DrawerBody>
            <Text fontSize={"16px"} fontWeight={"600"} px={"5px"} py={"10px"}>Africa</Text>
            <Text fontSize={"16px"} fontWeight={"600"} px={"5px"} py={"10px"}>Asia</Text>
            <Text fontSize={"16px"} fontWeight={"600"} px={"5px"} py={"10px"}>Australia/Oceania</Text>
            <Text fontSize={"16px"} fontWeight={"600"} px={"5px"} py={"10px"}>Europe</Text>
            <Text fontSize={"16px"} fontWeight={"600"} px={"5px"} py={"10px"}>North America</Text>
            <Text fontSize={"16px"} fontWeight={"600"} px={"5px"} py={"10px"}>Latin America</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
};

function InsideDrawer2({ theme }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button colorScheme='none' my={"10px"} onClick={onOpen} color={theme ? "black" : "white"}>
        <FontAwesomeIcon icon={faCamera} fontSize={"22px"} />&nbsp;&nbsp; Adventure Styles
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="sm" variant={"dark"}>
        <DrawerOverlay />
        <DrawerContent color={theme ? "black" : "white"} bg={theme ? "white" : "#191b1d"}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px' textAlign={"left"} fontSize={"25px"} fontWeight={"700"} ml={"5px"} bg={theme ? "gray.100" : "whiteAlpha.100"}>Adventure Styles
            <Text textAlign={"left"} fontSize={"16px"} pt={"15px"}>
              Go wild, go slow, go smooth, go solo - an adventure is what you make of it. Choose one style or create a package, fill your passports with adventures together.
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <Box p={"10px"}>
              <HStack py={"20px"}>
                <FontAwesomeIcon icon={faFontAwesome} />
                <Text textAlign={"left"} paddingLeft={"5px"} fontSize={"16px"} fontWeight={"600"}>Active Adventure</Text>
              </HStack>
              <HStack py={"20px"}>
                <FontAwesomeIcon icon={faWandMagicSparkles} />
                <Text textAlign={"left"} paddingLeft={"5px"} fontSize={"16px"} fontWeight={"600"}>Festival & Events</Text>
              </HStack>
              <HStack py={"20px"}>
                <FontAwesomeIcon icon={faPersonHiking} />
                <Text textAlign={"left"} paddingLeft={"5px"} fontSize={"16px"} fontWeight={"600"}>Hiking & Trakking</Text>
              </HStack>
              <HStack py={"20px"}>
                <FontAwesomeIcon icon={faShip} />
                <Text textAlign={"left"} paddingLeft={"5px"} fontSize={"16px"} fontWeight={"600"}>River Cruise</Text>
              </HStack>
              <HStack py={"20px"}>
                <FontAwesomeIcon icon={faBicycle} />
                <Text textAlign={"left"} paddingLeft={"5px"} fontSize={"16px"} fontWeight={"600"}>Bicycle</Text>
              </HStack>
              <HStack py={"20px"}>
                <FontAwesomeIcon icon={faUtensils} />
                <Text textAlign={"left"} paddingLeft={"5px"} fontSize={"16px"} fontWeight={"600"}>Food & Culinary</Text>
              </HStack>
              <HStack py={"20px"}>
                <FontAwesomeIcon icon={faFilm} />
                <Text textAlign={"left"} paddingLeft={"5px"} fontSize={"16px"} fontWeight={"600"}>In-depth Cultural</Text>
              </HStack>
              <HStack py={"20px"}>
                <FontAwesomeIcon icon={faCompass} />
                <Text textAlign={"left"} paddingLeft={"5px"} fontSize={"16px"} fontWeight={"600"}>Safari</Text>
              </HStack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
};

export default NavBar