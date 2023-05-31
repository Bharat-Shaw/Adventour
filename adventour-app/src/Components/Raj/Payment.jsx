// import React from 'react'

// import { Container, Box, Text, StackDivider, Heading, Stack, HStack, Flex, FormControl, Button ,Switch} from '@chakra-ui/react'
// import { Card, CardHeader, Divider, IconButton, Spacer, Input, RadioGroup, Radio, Select, Checkbox, CardBody ,Image} from '@chakra-ui/react'
// import { AddIcon, MinusIcon } from '@chakra-ui/icons'
// import { FiUsers } from 'react-icons/fi';
// import { CiCircleCheck } from "react-icons/ci";
// import { SlTag } from "react-icons/sl";
// function Payment() {
//  const[theme,setTheme]=React.useState(true)
//   const [value, setValue] = React.useState('1')
//   return (<>
//     <Box  width='100%'  height={'70px'}  bg={theme ? "black": "gray.300"}>
//      <Flex > <Text color={!theme ? "#191b1d": "gray.100"} mt='40px' ml='50px' fontSize={'20px'}>Adventour</Text></Flex>
//     </Box>
//     <Box bg={theme ? "#191b1d": "gray.100"}>
//       <Flex >
//         <Box w='60%'   >
//           <Heading size='lg' mt='20px' color={theme ? "white": "black"}>Taj Mahal and Wildlife with Royal Stay at Castles</Heading>
//           <Card maxW={"100%"} ml={"50px"} mt={'50px'} boxShadow='2xl' borderRadius={'10px'}>

//             <CardHeader>
//               <Flex alignItems={'flex-start'}><Heading size='md'  >Your adventure overview</Heading></Flex>
//             </CardHeader>
//             <Container maxW={"100%"} boxShadow={'md'} >
//               <HStack divider={<StackDivider />} border={" 1px solid blue"} ml="5px" borderRadius={"10px"} mb={"20px"} >
//                 <Box ml="20px" mr={"20px"} >
//                   <Heading size='xs' >
//                     Thursday, June 1st, 2023
//                   </Heading>
//                   <Text fontSize='sm'>
//                     to Monday, June 5th, 2023
//                   </Text>
//                   <Text pt='2' fontSize='sm' color=' blue'>
//                     Change date
//                   </Text>
//                 </Box>
//                 <Box ml="30px" mr={"20px"}>
//                   <Flex><Box mt="10px" mr='10px' color="blue"> <CiCircleCheck size={"25px"} /></Box> <Text pt='2'>You will only be charged once your spaces are confirmed.</Text></Flex>&nbsp;
//                   <Flex><Box mt="10px" mr='10px' color="blue"><FiUsers size={"20px"} /></Box><Heading size={"xm"} mt='8px' width={'180px'} ml='-20px'> 10+ spaces left</Heading> <Text pt='2' ml='-40px'> and yours is reserved for the next 10 minutes</Text></Flex>&nbsp;
//                   <Flex><Box Box mt="10px" mr='13px' color="blue">< SlTag size={"20px"} /> </Box> <Text pt='2' pb='8'>Revenge Travel Sale. See details</Text></Flex>&nbsp;
//                 </Box>

//               </HStack>

//             </Container>


//           </Card>


//           <Card maxW={"100%"} ml={"50px"} mt={'50px'} boxShadow='2xl' borderRadius={'10px'}>
//             <CardHeader>
//               <Flex ><Box width='30px' bg="black" color='white' borderRadius={'8px'} p='1' ml='10px'>1</Box><Heading size='md' ml="30px" mt='5px'>How many are travelling?</Heading></Flex>
//             </CardHeader>
//             <Flex >
//               <Heading size='sm' ml="40px">Travellers</Heading>
//               <Spacer />
//               <Box mb='20px'>
//                 <IconButton
//                   colorScheme='blue'
//                   aria-label='Search database'
//                   icon={<MinusIcon />}
//                   style={{ borderRadius: '50%' }}
//                 />&nbsp;&nbsp;&nbsp;&nbsp;
//                 <Text style={{ display: "inline-block" }}>2</Text>&nbsp;&nbsp;&nbsp;&nbsp;
//                 <IconButton
//                   colorScheme='blue'
//                   aria-label='Search database'
//                   icon={<AddIcon />}
//                   style={{ borderRadius: '50%' }}
//                 />&nbsp;&nbsp;&nbsp;&nbsp;

//               </Box>

//             </Flex>
//           </Card>
//           <Card boxShadow='2xl' maxW={'100%'} ml={'50px'} mt='50px' borderRadius={'10px'}>


//             <Flex mt={'20px'} ml="20px"><Box width='30px' height={'35px'} bg="black" color='white' borderRadius={'8px'} p='1' ml='10px'>2</Box>&nbsp;&nbsp;&nbsp;&nbsp;<Heading size={'md'} mb='20px' mt='5px'>Add traveller details</Heading></Flex>
//             <Flex bg={'lightblue'} borderRadius={'10px'} p='3' mb='20px' width={'95%'} ml="25px">
//               <Heading size='sm' mt='2px'>Please note:</Heading>
//               <Text ml='4px'> Traveller details should match information on passport</Text></Flex>

//             <Heading size='xm' ml='-80%'>Lead Traveller</Heading>
//             <Text mb='20px' ml='-37%'>This traveller will serve as the contact person for the booking.</Text>&nbsp;
//             <FormControl>
//               <Stack spacing={8} width={"48%"} ml='4%'>
//                 <Input placeholder='First Name*' size='lg' isRequired />
//                 <Input placeholder='Last Name*' size='lg' isRequired />
//                 <Input placeholder='Email' size='lg' isRequired />
//                 <Input placeholder='+91 7398172478' size='lg' isRequired />

//                 <Flex>
//                   <Heading size={'sm'} mr={'5px'}>Gender*</Heading>
//                   <RadioGroup onChange={setValue} value={value}>
//                     <Stack direction='row'>
//                       <Radio value='1'>Male</Radio>
//                       <Radio value='2'>Female</Radio>

//                     </Stack>
//                   </RadioGroup></Flex>
//                 <Select>
//                   <option>India</option>
//                   <option>USA</option>
//                   <option>China</option>
//                   <option>Australia</option>
//                 </Select>
//               </Stack>
//             </FormControl>&nbsp;&nbsp;
//             <Divider orientation='horizontal' mt={'10px'} color={'none'} />

//           </Card>

//           <Card maxW={"100%"} ml={"50px"} mt={'50px'} boxShadow='2xl' borderRadius={'10px'}>
//             <CardHeader>
//               <Flex ><Box width='30px' bg="black" color='white' borderRadius={'8px'} p='1' ml='10px'>3</Box><Heading size='md' ml="30px" mt='5px'>TourRadar Savings</Heading></Flex>
//             </CardHeader>
//             <Flex ml='-5px'>
//               <Text ml="40px" color='blue' fontSize={'16px'}>Redeem Promo Code</Text>

//             </Flex>&nbsp;&nbsp;&nbsp;
//           </Card>


//           <Card boxShadow='2xl' maxW={'100%'} ml={'50px'} mt='50px' borderRadius={'10px'}>
//             <Flex mt={'20px'} ml="20px"><Box width='30px' height={'35px'} bg="black" color='white' borderRadius={'8px'} p='1' ml='10px'>4</Box>&nbsp;&nbsp;&nbsp;&nbsp;<Heading size={'md'} mb='20px' mt='5px'>Add payment details</Heading></Flex>
//             <Flex bg={'lightblue'} borderRadius={'10px'} p='3' mb='20px' width={'95%'} ml="25px">
//               <Text ml='4px'>This is a secure and SSL encrypted payment. Your credit card details are safe.</Text></Flex>

//             <Text mb='20px' ml='-66%'> Select your payment method:</Text>&nbsp;
//             <Card ml='30px' mr='30px' _hover={{ boxShadow: "0 0 10px black" }}>
//               <Flex>
//               <RadioGroup onChange={setValue} value={value}>
//                 <Stack direction='row' ml='20px' mt='10px'>
//                   <Radio value='1'>Pay by card</Radio>
//                 </Stack>
//                 <Divider orientation='horizontal' mt={'20px'} color={'none'} />
//               </RadioGroup>
//               <Spacer />
//               <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVIBJ-2rpBUh0gMNNjNhM759BiZ4ZEEC9BQ&usqp=CAU'
//                width='5%' height='5%' mt='22px' ml='30px' />
//               <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrA_6LJ0DJucgHSZDOYO8v9n7dGNiJ6OPnw&usqp=CAU"
//                 width='7%' height='7%' mt='16px' ml='0px' />
//               <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapt6bCfFKVEeVMsp5NRz4iOLHcGBqzPtPWw&usqp=CAU'
//                width='4%' height='4%' mt='20px' mr='20px'/>

//               </Flex>
//               <FormControl>
//                 <Stack spacing={8} width={"48%"} ml='3%' mt='30px'>
//                   <Input placeholder='Cardholder Name' size='lg' isRequired />
//                   <Input placeholder='Card Number *' size='lg' isRequired />
//                   <Flex > <Input placeholder='Expiry Date *' size='lg' isRequired />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <Input placeholder='CVV *' size='lg' isRequired /></Flex>
//                 </Stack>
//               </FormControl>&nbsp;&nbsp;&nbsp;</Card>

//             <Flex mt='20px' ><Checkbox defaultChecked ml='30px'>Checkbox</Checkbox>

//             <Text mt='25px' width={'80%'} pl={'-20px'}>I accept TourRadar's <span style={{color:"blue"}}>Terms & Conditions</span>  and <span style={{color:"blue"}}> Privacy Policy;</span> and 
//               Swasthik India Journey's <span style={{color:"blue"}}> payment,cancellation
//                 and refund conditions</span> </Text>
//             </Flex>
//             <Button colorScheme='blue' ml='20px' mr='20px' variant='solid' size='lg' p='25px' fontSize={'22px'} mt='20px'>Book Spaces</Button>&nbsp;&nbsp;&nbsp;

//           </Card>
//           <Card bg='gray.100' width={'94%'} ml='50px' mt='50px'>
//             <Heading size='sm' mt='20px' ml='-72%' fontSize={'17px'}>Terms & Conditions</Heading>
//             <Text fontSize={'14px'} ml='30px' mt='30px' width='90%'  mr='20px'>TourRadar is an authorised Agent of Swastik India Journeys.
//               Please familiarise yourself with the Swastik India Journeys<span style={{color:"blue"}}> payment, cancellation
//               and refund policies</span>and TourRadar's <span style={{color:"blue"}}>Terms & Conditions.</span>
//               TourRadar will charge you in the stated currency and we do not charge any booking fees.
//             </Text>
//             <Flex mt='20px'>
//               <Heading size='xm' ml='30px'>Operated by Swastik India Journeys</Heading>
//               <Spacer />
//               <Heading size='xm' mr='200px' >Agent: TourRadar</Heading>
//               </Flex>
//               <Flex mt='15px'fontSize={'14px'} mb='50px'>
//                 <Text ml='40px'>Jaipur</Text>
//                 <Spacer />
//                 <Text mr='180px' width={'20%'}>Kärntner Ring 5-7, Top 304-30 AUSTRIA</Text>

//               </Flex>

//           </Card>



//         </Box>
//         <Box w='35%' ml='30px' mt='8%'>
//           <Card>
//             <CardHeader>
//               <Heading size='md' ml='-80%'>My Trip</Heading>
//             </CardHeader>

//             <CardBody>
//               <Stack spacing='4'>
//                 <Box>
//                   <Heading size='sm' ml='-35px' >
//                     Taj Mahal and Wildlife with Royal Stay at Castles
//                   </Heading>
//                   <Text pt='2' fontSize='sm' ml='-80%'>
//                     11 days
//                   </Text>
//                 </Box>
//                 <Box >
//                   <Heading size='sm' ml='-200px' >
//                     Starts in New Delhi, India
//                   </Heading>
//                   <Text pt='2' fontSize='sm' ml='-55%'>
//                     Wednesday, 31 May 2023
//                   </Text>
//                 </Box>
//                 <Box>
//                   <Heading size='sm' ml='-210px' >
//                     Ends in New Delhi, India
//                   </Heading>
//                   <Text pt='2' fontSize='sm' ml='-58%'>
//                     Saturday, 10 Jun 2023
//                   </Text>
//                 </Box>
//                 <Box>
//                   <Heading size='sm' ml='-320px'>
//                     Tour Type
//                   </Heading>
//                   <Text pt='2' fontSize='sm' ml='-80%'>
//                     Group
//                   </Text>
//                 </Box>
//                 <Box>
//                   <Heading size='sm' ml='-300px' >
//                     Operated in
//                   </Heading>
//                   <Text pt='2' fontSize='sm' ml='-78%'>
//                     English
//                   </Text>
//                 </Box>
//                 <Box>
//                   <Heading size='sm' ml='-270px' >
//                     What's included
//                   </Heading>
//                   <Text pt='2' fontSize='sm' ml='-31%'>
//                     Accommodation, Guide, Meals, Transport
//                   </Text>
//                 </Box>
//               </Stack>
//             </CardBody>
//           </Card>
//           <Card mt='30px' position='sticky' top={'20px'} >
//             <Heading size='md' ml='-55%' mt='20px'>Price Breakdown</Heading>
//             <HStack mt='20px' mr='20px'> <Text fontSize='20px' ml='25px' >Price</Text>
//               <Spacer />
//               <Text  >₹450</Text>
//             </HStack>
//             <HStack mt='20px' mr='20px' > <Text fontSize='20px' ml='25px'>Discount</Text>
//               <Spacer />
//               <Text>-₹450</Text>
//             </HStack>
//             <Divider orientation='horizontal' mt={'20px'} />
//             <HStack mt='20px' mb='30px' mr='18px'>  <Heading size='md' ml='25px' >Total due</Heading>
//               <Spacer />
//               <Heading size='md' >₹119</Heading>
//             </HStack>
//           </Card>
//           <Switch size='sm' onChange={()=>setTheme(!theme)}/>
//         </Box>
//       </Flex></Box>

//   </>



//   )
// }

// export default Payment


import { Box, Button, Checkbox, Divider, Flex, FormControl, HStack, IconButton, Image, Input, Radio, RadioGroup, Select, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiFillCheckCircle, AiFillTag } from 'react-icons/ai';
import { BsFill1SquareFill, BsFill2SquareFill, BsFill3SquareFill, BsFill4SquareFill, BsFillInfoCircleFill, BsLightningChargeFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { GrFormAdd, GrFormSubtract, GrRadialSelected } from 'react-icons/gr';
import Toggle from '../Bharat/toggle';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import Logo from '../Vivek/Logos/LogoPic.png';

function Payment() {
  const [theme, settheme] = useState(true);
  return (
    <Box minH={'100vh'} bg={theme ? '#101214' : 'gray.100'} color={theme ? 'white' : 'blackAlpha.800'}>
      <Toggle settheme={settheme} theme={theme} />
      {/* navbar-box */}
      <Box bg={theme ? '#191b1d' : 'white'} py={'15px'}>
        <HStack w={{ base: "95%", md: "95%", lg: '76%' }} m={'auto'} >
          <Flex alignItems={"center"}>
            <Image src={Logo} alt='logo' w={"70px"} px={"8px"} />
            <Text fontSize={"1.2rem"} fontWeight={"800"} >Adventour.</Text>
          </Flex>
          <Spacer />

          <Text display={{ base: "none", md: "block", lg: "block" }} pr={'10px'}>+1 844 311 8331</Text>
          <HStack _hover={{ bg: !theme ? 'gray.200' : 'gray.800' }} display={{ base: "none", md: "flex", lg: "flex" }} borderRadius={'20px'} py={'10px'} px={'18px'}>
            <TfiHeadphoneAlt />
            <Box color={theme ? 'white' : 'blackAlpha.800'} colorScheme='none'>Book as Travel Agent</Box>
          </HStack>
        </HStack>
      </Box>

      {/* Midbox-start */}
      <Box w={{ base: "92%", md: "95%", lg: '76%' }} m={'auto'}>
        {/* Heading flex */}
        <Flex py={'30px'}>
          <Text fontSize={{ base: "20px", md: '33px', lg: '33px' }} fontWeight={'600'}>Europe Escape - 12 Days</Text>
          <Spacer />
          <Button colorScheme='none' bg={theme ? '#191b1d' : 'white'} color={theme ? 'white' : 'blackAlpha.800'} mr={'10px'} borderRadius={'20px'}>Help</Button>
          <Button colorScheme='none' bg={theme ? '#191b1d' : 'white'} color={theme ? 'white' : 'blackAlpha.800'} borderRadius={'20px'}>Share Tour</Button>
        </Flex>

        {/* Main content-start */}
        <Flex justifyContent={'space-between'}>
          {/* left box */}
          <Box w={{ base: "100%", md: "100%", lg: '67%' }}>
            <Box boxShadow={'md'} p={'20px'} bg={theme ? '#191b1d' : 'white'} borderRadius={'15px'}>
              <Text pb={'20px'} fontSize={'20px'} fontWeight={'600'}>Your adventure overview</Text>
              <Flex direction={{ base: "column", md: "row", lg: "row" }}>
                <Box border={'1px solid gray'} w={{ base: "100%", md: "35%", lg: '35%' }} p={'20px'} borderRadius={{ base: '15px 15px 0 0', md: '15px 0 0 15px', lg: '15px 0 0 15px' }}>
                  <Text fontSize={'18px'} fontWeight={'700'}>Sunday, August 20th, 2023</Text>
                  <Text fontSize={'15px'}>to Thursday, August 31st, 2023</Text>
                  <Text>Change date</Text>
                </Box>
                <Box border={'1px solid gray'} w={{ base: "100%", md: "65%", lg: '65%' }} p={'20px'} borderRadius={{ base: '0 0 15px 15px', md: '0 15px 15px 0', lg: '0 15px 15px 0' }}>
                  <Flex py={'5px'}><AiFillCheckCircle size={'35px'} /><Text pt={'5px'} px={'10px'}>Only ₹17,779.42 upfront per person The remaining amount will be due on July 1st, 2023</Text></Flex>
                  <Flex py={'5px'}><FaUserFriends size={'25px'} /><Text px={'10px'}>6 spaces left and yours is reserved for the next 10 minutes</Text></Flex>
                  <Flex py={'5px'}><BsLightningChargeFill size={'22px'} /><Text px={'10px'}>Instant Book: Your spaces will be instantly secured.</Text></Flex>
                  <Flex py={'5px'}><AiFillTag size={'22px'} /><Text px={'10px'}>Special deal. See details</Text></Flex>
                </Box>
              </Flex>
            </Box>
            <Box my={'25px'} p={'20px'} borderRadius={'15px'} bg={theme ? '#191b1d' : 'white'} boxShadow={'md'}>
              <HStack>
                <BsFill1SquareFill size={'30px'} />
                <Text pb={'5px'} fontWeight={'700'} fontSize={'20px'} px={'10px'}>How many are travelling?</Text>
              </HStack>
              <HStack mt={'30px'}>
                <Text fontWeight={'700'}>Traveller</Text>
                <Spacer />
                <HStack>
                  <IconButton icon={<GrFormSubtract size={'25px'} />} rounded={'full'} boxShadow={'lg'} />
                  <Text px={'10px'}>10</Text>
                  <IconButton icon={<GrFormAdd size={'25px'} />} rounded={'full'} boxShadow={'lg'} />
                </HStack>
              </HStack>
            </Box>

            <Box p={'20px'} bg={theme ? '#191b1d' : 'white'} boxShadow={'md'} borderRadius={'15px'}>
              <HStack>
                <BsFill2SquareFill size={'30px'} />
                <Text px={'10px'} fontWeight={'700'} fontSize={'20px'}>Add traveller details</Text>
              </HStack>
              <HStack ml={'8px'} borderRadius={'15px'} p={'20px'} bg={theme ? 'gray.800' : "gray.200"} my={'25px'}>
                <BsFillInfoCircleFill size={'25px'} />
                <HStack px={'10px'} fontWeight={{ base: "500", md: '700', lg: '700' }} fontSize={{ base: "14px", md: '16', lg: '16' }}><Text>Please note:</Text><Text > Traveller details should match information on passport</Text></HStack>
              </HStack>
              <Box>
                <Text px={'10px'} fontWeight={'700'}>Lead Traveller</Text>
                <Text px={'10px'}>This traveller will serve as the contact person for the booking.</Text>
              </Box>
              <RadioGroup py={'35px'}>
                <HStack >
                  <Text fontWeight={'700'} fontSize={'14px'} px={'10px'}>Title*</Text>
                  <Radio value='Mr.'>Mr.</Radio>
                  <Radio value='Ms.'>Ms.</Radio>
                  <Radio value='Mrs.'>Mrs.</Radio>
                  <Radio value='Miss'>Miss</Radio>
                </HStack>
              </RadioGroup>
              <FormControl ml={'13px'}>
                <VStack align={'left'}>
                  <label style={{ marginBottom: '-19px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "1", width: "90px", paddingLeft: "6px" }}>First Name*</label>
                  <Input w={{ base: "80%", md: "45%", lg: "45%" }} size={'lg'} border={'1px solid silver'} type='text' isRequired />
                </VStack>
                <VStack align={'left'} my={'20px'}>
                  <label style={{ marginBottom: '-19px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "1", width: "85px", paddingLeft: "6px" }}>Last Name*</label>
                  <Input w={{ base: "80%", md: "45%", lg: "45%" }} size={'lg'} border={'1px solid silver'} type='text' isRequired />
                </VStack>
                <VStack align={'left'}>
                  <label style={{ marginBottom: '-19px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "1", width: "55px", paddingLeft: "6px" }}>Email*</label>
                  <Input w={{ base: "80%", md: "45%", lg: "45%" }} size={'lg'} border={'1px solid silver'} type='email' isRequired />
                </VStack>
                <VStack align={'left'} my={'20px'}>
                  <label style={{ marginBottom: '-19px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "1", width: "115px", paddingLeft: "6px" }}>Phone Number*</label>
                  <Input w={{ base: "80%", md: "45%", lg: "45%" }} size={'lg'} border={'1px solid silver'} type='tel' placeholder='e.g. +91 9876543210' isRequired />
                </VStack>
                <Text fontWeight={'700'} mb={'15px'} fontSize={'16px'}>Date of Birth*</Text>
                <HStack>
                  <Box position={'relative'}>
                    <label style={{ position: 'absolute', top: '-9px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "35px", paddingLeft: "6px" }}>Day</label>
                    <Select size={'lg'} placeholder=' ' w={'80px'} border={'1px solid silver'}>
                      <option value='option1'>1</option>
                      <option value='option2'>2</option>
                      <option value='option3'>3</option>
                      <option value='option3'>4</option>
                      <option value='option3'>5</option>
                      <option value='option3'>6</option>
                      <option value='option3'>7</option>
                      <option value='option3'>8</option>
                      <option value='option3'>9</option>
                      <option value='option3'>10</option>
                    </Select>
                  </Box>
                  <Box position={'relative'}>
                    <label style={{ position: 'absolute', top: '-9px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "58px", paddingLeft: "6px" }}>Month</label>
                    <Select size={'lg'} w={'145px'} border={'1px solid silver'} placeholder=' '>
                      <option value='option1'>1</option>
                      <option value='option2'>2</option>
                      <option value='option3'>3</option>
                      <option value='option3'>4</option>
                      <option value='option3'>5</option>
                      <option value='option3'>6</option>
                      <option value='option3'>7</option>
                      <option value='option3'>8</option>
                      <option value='option3'>9</option>
                      <option value='option3'>10</option>
                    </Select>
                  </Box>
                  <Box position={'relative'}>
                    <label style={{ position: 'absolute', top: '-9px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "40px", paddingLeft: "6px" }}>Year</label>
                    <Select size={'lg'} placeholder=' ' w={'80px'} border={'1px solid silver'}>
                      <option value='option1'>1</option>
                      <option value='option2'>2</option>
                      <option value='option3'>3</option>
                      <option value='option3'>4</option>
                      <option value='option3'>5</option>
                      <option value='option3'>6</option>
                      <option value='option3'>7</option>
                      <option value='option3'>8</option>
                      <option value='option3'>9</option>
                      <option value='option3'>10</option>
                    </Select>
                  </Box>
                </HStack>
                <RadioGroup py={'35px'}>
                  <HStack>
                    <Text fontWeight={'700'} fontSize={'15px'} px={'10px'}>Gender*</Text>
                    <Radio value='male'>Male</Radio>
                    <Radio value='female'>Female</Radio>
                  </HStack>
                </RadioGroup>
                <Box position={'relative'}>
                  <label style={{ position: 'absolute', top: '-9px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "90px", paddingLeft: "6px" }}>Nationality*</label>
                  <Select w={'45%'} size={'lg'} border={'1px solid silver'} placeholder=' '>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Aland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                  </Select>
                </Box>
              </FormControl>

            </Box>

            <Box my={'25px'} p={'20px'} borderRadius={'15px'} bg={theme ? '#191b1d' : 'white'} boxShadow={'md'}>
              <HStack>
                <BsFill3SquareFill size={'30px'} />
                <Text pb={'5px'} fontWeight={'700'} fontSize={'20px'} px={'10px'}>How many are travelling?</Text>
              </HStack>
              <Text mt={'30px'} mb={'8px'} color={'blue.500'}>Redeem Promo Code</Text>
            </Box>
            {/* vivek */}
            <Box my={'25px'} p={'20px'} boxShadow={'md'} bg={theme ? '#191b1d' : 'white'} borderRadius={'15px'}>
              <HStack><BsFill4SquareFill size={'30px'} />
                <Text pb={'5px'} fontWeight={'700'} fontSize={'20px'} px={'10px'}>Add payment details</Text>
              </HStack>

              <HStack p={'15px'} my={'20px'} bg={theme ? 'gray.800' : "gray.200"} borderRadius={'15px'}><BsFillInfoCircleFill size={'20px'} />
                <Text px={'10px'} fontSize={{ base: "14px", md: "16px", lg: '16px' }} fontWeight={'400'} color={theme ? 'white' : 'blackAlpha.800'}>This is a secure and SSL encrypted payment. Your credit card details are safe.</Text>
              </HStack>
              <Box>
                <Text py={'10px'} fontSize={'16px'} >Select your payment method:</Text>
                <Box boxShadow={'md'} border={'1px solid silver'} bg={theme ? '#191b1d' : 'white'} borderRadius={'15px'}>
                  <HStack borderBottom={'1px solid silver'} p={'15px'} borderRadius={'15px 15px 0 0 '}><GrRadialSelected size={'20px'} color={'blue'} />
                    <Text px={'10px'} fontSize={'16px'} fontWeight={'400'} color={theme ? 'white' : 'blackAlpha.800'}>Pay by card</Text>
                    <Spacer />
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVIBJ-2rpBUh0gMNNjNhM759BiZ4ZEEC9BQ&usqp=CAU'
                      width='5%' height='5%' mt='22px' ml='30px' />
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrA_6LJ0DJucgHSZDOYO8v9n7dGNiJ6OPnw&usqp=CAU"
                      width='7%' height='7%' mt='16px' ml='0px' />
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapt6bCfFKVEeVMsp5NRz4iOLHcGBqzPtPWw&usqp=CAU'
                      width='4%' height='4%' mt='20px' mr='20px' />
                  </HStack>

                  <Box p={'20px 15px 30px 15px'}>
                    <Flex direction={'column'}>
                      <label style={{ marginBottom: '-10px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "125px", paddingLeft: "5px" }}>Cardholder Name</label>
                      <Input w={{ base: "80%", md: "45%", lg: "45%" }} size='lg' border={'1px solid silver'} />
                    </Flex>
                    <Flex direction={'column'} my={'20px'}>
                      <label style={{ marginBottom: '-10px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "110px", paddingLeft: "5px" }}>Card Number *</label>
                      <Input w={{ base: "80%", md: "45%", lg: "45%" }} size='lg' border={'1px solid silver'} placeholder='**** **** **** ****' />
                    </Flex>

                    <Flex direction={{ base: "column", md: "row", lg: "row" }}>
                      <Flex direction={'column'} w={{ base: "60%", md: "20%", lg: "20%" }}>
                        <label style={{ marginBottom: '-10px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "95px", paddingLeft: "3px" }}>Expiry Date *</label>
                        <Input w={"100%"} size='lg' border={'1px solid silver'} placeholder='MM / YY' />
                      </Flex>
                      <Flex direction={'column'} w={{ base: "60%", md: "20%", lg: "20%" }} ml={{ base: "0%", md: '5%', lg: "5%" }} mt={{ base: "15px", md: "0px", lg: "0px" }}>
                        <label style={{ marginBottom: '-10px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "45px", paddingLeft: "3px" }}>CVV *</label>
                        <Input w={"100%"} size='lg' border={'1px solid silver'} placeholder='1 2 3' />
                      </Flex>
                    </Flex>
                  </Box>
                </Box>
                <Box mt={'20px'}>
                  <Flex>
                    <Checkbox size='md'></Checkbox>
                    <Text pl={'15px'} mt={'45px'} fontSize={{ base: "14px", md: "16px", lg: '16px' }}>I accept TourRadar's <span style={{ color: "#008cc9" }}>Terms & Conditions</span>  and <span style={{ color: "#008cc9" }}> Privacy Policy;</span> and
                      Realistic Journey's <span style={{ color: "#008cc9" }}> payment,cancellation and refund conditions,</span> and <span style={{ color: "#008cc9" }}>Credit for Future Tours <br /> Terms & Conditions.</span>
                    </Text>
                  </Flex>
                </Box>
                <Button w={'100%'} colorScheme='none' bg={'#008cc9'} py={'30px'} mt={'30px'}>Book Spaces</Button>
                <Box w={'50%'} m={'auto'} textAlign={'center'} mt={'20px'}>
                  <Text fontSize={'13px'} fontWeight={'700'}>
                    No booking fees! <span style={{ fontWeight: "500" }}>You will be charged</span> ₹14,239.19 <span style={{ fontWeight: "500" }}>now.
                      The remaining balance is due on</span> 1 Jul, 2023.
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box display={{ base: "block", md: "block", lg: "none" }}>
              <Pricediv theme={theme}/>
            </Box>
            <Box my={'25px'} p={'20px'} borderRadius={'15px'} bg={theme ? '#191b1d' : 'white'} boxShadow={'md'}>
              <Text mt={'15px'} fontWeight={'700'} fontSize={'17px'}>Terms & Conditions</Text>
              <Text mt={'25px'} lineHeight={'19px'} fontSize={'13px'}>TourRadar is an authorised Agent of Expat Explore Travel. Please familiarise yourself with the Expat Explore Travel payment,
                cancellation and refund policies and TourRadar's Terms & Conditions. TourRadar will charge you in the stated currency and we do
                not charge any booking fees.
              </Text>
              <Flex justifyContent={'space-between'} w={'70%'} direction={{ base: "column", md: "row", lg: "row" }}>
                <Box lineHeight={'23px'}>
                  <Text mt={'13px'} fontWeight={'700'} fontSize={'15px'}>Operated by Expat Explore Travel</Text>
                  <Text fontSize={'12px'}>London</Text>
                </Box>
                <Box lineHeight={'23px'}>
                  <Text mt={'15px'} fontWeight={'700'} fontSize={'15px'}>Agent: TourRadar</Text>
                  <Text fontSize={'12px'}>Kärntner Ring 5-7, Top 304-306</Text>
                  <Text fontSize={'12px'}>1010 Vienna, AUSTRIA</Text>
                </Box>
              </Flex>
            </Box>
          </Box>

          {/* right box */}
          <Box w={'31%'} display={{ base: "none", md: "none", lg: "block" }}>
            <Box display={{ base: "none", md: "none", lg: "block" }} p={'20px'} borderRadius={'15px'} bg={theme ? '#191b1d' : 'white'} boxShadow={'md'} lineHeight={'25px'}>
              <Text pb={'15px'} fontSize={'20px'} fontWeight={'700'}>My Trip</Text>
              <Text fontSize={'15px'} fontWeight={'600'}>Europe Escape - 12 Days</Text>
              <Text pb={'10px'} fontSize={'15px'}>12 days</Text>
              <Text fontSize={'15px'} fontWeight={'600'}>Starts in Rome, Italy</Text>
              <Text pb={'10px'} fontSize={'15px'}>Sunday, 20 Aug 2023</Text>
              <Text fontSize={'15px'} fontWeight={'600'}>Ends in Rome, Italy</Text>
              <Text pb={'10px'} fontSize={'15px'}>Thursday, 31 Aug 2023</Text>
              <Text fontSize={'15px'} fontWeight={'600'}>Tour Type</Text>
              <Text pb={'10px'} fontSize={'15px'}>Group</Text>
              <Text fontSize={'15px'} fontWeight={'600'}>Operated in</Text>
              <Text pb={'10px'} fontSize={'15px'}>English</Text>
              <Text fontSize={'15px'} fontWeight={'600'}>What's included</Text>
              <Text pb={'10px'} fontSize={'15px'}>Accommodation, Guide, Meals, Transport</Text>
            </Box>
            <Pricediv theme={theme} />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

function Pricediv({ theme }) {
  return <Box p={'20px'} my={'25px'} borderRadius={'15px'} bg={theme ? '#191b1d' : 'white'} boxShadow={'md'} position={'sticky'} top={'20px'}>
    <Text pb={'20px'} fontSize={'20px'} fontWeight={'700'}>Price Breakdown</Text>
    <Flex justifyContent={'space-between'}>
      <Box pb={'14px'}>
        <Text>Base price</Text>
        <Text fontSize={'14px'}>1 Traveller x ₹206,216.35</Text>
      </Box>
      <Text>₹206,216.35</Text>
    </Flex>
    <Flex justifyContent={'space-between'} pb={'15px'} borderBottom={'1px solid silver'}>
      <Text>Discount</Text>
      <Text>- ₹28,120.41</Text>
    </Flex>
    <Flex justifyContent={'space-between'} pt={'20px'}>
      <Text fontWeight={'700'}>Total due</Text>
      <Text fontSize={'20px'} fontWeight={'700'}>₹178,095.94</Text>
    </Flex>
    <Flex lineHeight={'45px'} direction={'column'} mt={'10px'} p={'5px'} bg={theme ? '#191b1d' : 'gray.100'} borderRadius={'10px'}>
      <Flex>
        <Text fontWeight={'700'}>Due today</Text>
        <Spacer />
        <Text fontWeight={'700'}>₹17,809.59</Text>
      </Flex>
      <Flex>
        <Text>Due on 1 Jul, 2023</Text>
        <Spacer />
        <Text>₹160,286.35</Text>
      </Flex>
    </Flex>
  </Box>

}

export default Payment

