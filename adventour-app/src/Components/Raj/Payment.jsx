import React from 'react'

import { Container, Box, Text, StackDivider, Heading, Stack, HStack, Flex, FormControl, Button ,Switch} from '@chakra-ui/react'
import { Card, CardHeader, Divider, IconButton, Spacer, Input, RadioGroup, Radio, Select, Checkbox, CardBody ,Image} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { FiUsers } from 'react-icons/fi';
import { CiCircleCheck } from "react-icons/ci";
import { SlTag } from "react-icons/sl";
function Payment() {
 const[theme,setTheme]=React.useState(true)
  const [value, setValue] = React.useState('1')
  return (<>
    <Box  width='100%'  height={'70px'}  bg={theme ? "black": "gray.300"}>
     <Flex > <Text color={!theme ? "#191b1d": "gray.100"} mt='40px' ml='50px' fontSize={'20px'}>Adventour</Text></Flex>
    </Box>
    <Box bg={theme ? "#191b1d": "gray.100"}>
      <Flex >
        <Box w='60%'   >
          <Heading size='lg' mt='20px' color={theme ? "white": "black"}>Taj Mahal and Wildlife with Royal Stay at Castles</Heading>
          <Card maxW={"100%"} ml={"50px"} mt={'50px'} boxShadow='2xl' borderRadius={'10px'}>

            <CardHeader>
              <Flex alignItems={'flex-start'}><Heading size='md'  >Your adventure overview</Heading></Flex>
            </CardHeader>
            <Container maxW={"100%"} boxShadow={'md'} >
              <HStack divider={<StackDivider />} border={" 1px solid blue"} ml="5px" borderRadius={"10px"} mb={"20px"} >
                <Box ml="20px" mr={"20px"} >
                  <Heading size='xs' >
                    Thursday, June 1st, 2023
                  </Heading>
                  <Text fontSize='sm'>
                    to Monday, June 5th, 2023
                  </Text>
                  <Text pt='2' fontSize='sm' color=' blue'>
                    Change date
                  </Text>
                </Box>
                <Box ml="30px" mr={"20px"}>
                  <Flex><Box mt="10px" mr='10px' color="blue"> <CiCircleCheck size={"25px"} /></Box> <Text pt='2'>You will only be charged once your spaces are confirmed.</Text></Flex>&nbsp;
                  <Flex><Box mt="10px" mr='10px' color="blue"><FiUsers size={"20px"} /></Box><Heading size={"xm"} mt='8px' width={'180px'} ml='-20px'> 10+ spaces left</Heading> <Text pt='2' ml='-40px'> and yours is reserved for the next 10 minutes</Text></Flex>&nbsp;
                  <Flex><Box Box mt="10px" mr='13px' color="blue">< SlTag size={"20px"} /> </Box> <Text pt='2' pb='8'>Revenge Travel Sale. See details</Text></Flex>&nbsp;
                </Box>

              </HStack>

            </Container>


          </Card>


          <Card maxW={"100%"} ml={"50px"} mt={'50px'} boxShadow='2xl' borderRadius={'10px'}>
            <CardHeader>
              <Flex ><Box width='30px' bg="black" color='white' borderRadius={'8px'} p='1' ml='10px'>1</Box><Heading size='md' ml="30px" mt='5px'>How many are travelling?</Heading></Flex>
            </CardHeader>
            <Flex >
              <Heading size='sm' ml="40px">Travellers</Heading>
              <Spacer />
              <Box mb='20px'>
                <IconButton
                  colorScheme='blue'
                  aria-label='Search database'
                  icon={<MinusIcon />}
                  style={{ borderRadius: '50%' }}
                />&nbsp;&nbsp;&nbsp;&nbsp;
                <Text style={{ display: "inline-block" }}>2</Text>&nbsp;&nbsp;&nbsp;&nbsp;
                <IconButton
                  colorScheme='blue'
                  aria-label='Search database'
                  icon={<AddIcon />}
                  style={{ borderRadius: '50%' }}
                />&nbsp;&nbsp;&nbsp;&nbsp;

              </Box>

            </Flex>
          </Card>
          <Card boxShadow='2xl' maxW={'100%'} ml={'50px'} mt='50px' borderRadius={'10px'}>


            <Flex mt={'20px'} ml="20px"><Box width='30px' height={'35px'} bg="black" color='white' borderRadius={'8px'} p='1' ml='10px'>2</Box>&nbsp;&nbsp;&nbsp;&nbsp;<Heading size={'md'} mb='20px' mt='5px'>Add traveller details</Heading></Flex>
            <Flex bg={'lightblue'} borderRadius={'10px'} p='3' mb='20px' width={'95%'} ml="25px">
              <Heading size='sm' mt='2px'>Please note:</Heading>
              <Text ml='4px'> Traveller details should match information on passport</Text></Flex>

            <Heading size='xm' ml='-80%'>Lead Traveller</Heading>
            <Text mb='20px' ml='-37%'>This traveller will serve as the contact person for the booking.</Text>&nbsp;
            <FormControl>
              <Stack spacing={8} width={"48%"} ml='4%'>
                <Input placeholder='First Name*' size='lg' isRequired />
                <Input placeholder='Last Name*' size='lg' isRequired />
                <Input placeholder='Email' size='lg' isRequired />
                <Input placeholder='+91 7398172478' size='lg' isRequired />

                <Flex>
                  <Heading size={'sm'} mr={'5px'}>Gender*</Heading>
                  <RadioGroup onChange={setValue} value={value}>
                    <Stack direction='row'>
                      <Radio value='1'>Male</Radio>
                      <Radio value='2'>Female</Radio>

                    </Stack>
                  </RadioGroup></Flex>
                <Select>
                  <option>India</option>
                  <option>USA</option>
                  <option>China</option>
                  <option>Australia</option>
                </Select>
              </Stack>
            </FormControl>&nbsp;&nbsp;
            <Divider orientation='horizontal' mt={'10px'} color={'none'} />

          </Card>

          <Card maxW={"100%"} ml={"50px"} mt={'50px'} boxShadow='2xl' borderRadius={'10px'}>
            <CardHeader>
              <Flex ><Box width='30px' bg="black" color='white' borderRadius={'8px'} p='1' ml='10px'>3</Box><Heading size='md' ml="30px" mt='5px'>TourRadar Savings</Heading></Flex>
            </CardHeader>
            <Flex ml='-5px'>
              <Text ml="40px" color='blue' fontSize={'16px'}>Redeem Promo Code</Text>

            </Flex>&nbsp;&nbsp;&nbsp;
          </Card>


          <Card boxShadow='2xl' maxW={'100%'} ml={'50px'} mt='50px' borderRadius={'10px'}>
            <Flex mt={'20px'} ml="20px"><Box width='30px' height={'35px'} bg="black" color='white' borderRadius={'8px'} p='1' ml='10px'>4</Box>&nbsp;&nbsp;&nbsp;&nbsp;<Heading size={'md'} mb='20px' mt='5px'>Add payment details</Heading></Flex>
            <Flex bg={'lightblue'} borderRadius={'10px'} p='3' mb='20px' width={'95%'} ml="25px">
              <Text ml='4px'>This is a secure and SSL encrypted payment. Your credit card details are safe.</Text></Flex>

            <Text mb='20px' ml='-66%'> Select your payment method:</Text>&nbsp;
            <Card ml='30px' mr='30px' _hover={{ boxShadow: "0 0 10px black" }}>
              <Flex>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction='row' ml='20px' mt='10px'>
                  <Radio value='1'>Pay by card</Radio>
                </Stack>
                <Divider orientation='horizontal' mt={'20px'} color={'none'} />
              </RadioGroup>
              <Spacer />
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVIBJ-2rpBUh0gMNNjNhM759BiZ4ZEEC9BQ&usqp=CAU'
               width='5%' height='5%' mt='22px' ml='30px' />
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrA_6LJ0DJucgHSZDOYO8v9n7dGNiJ6OPnw&usqp=CAU"
                width='7%' height='7%' mt='16px' ml='0px' />
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapt6bCfFKVEeVMsp5NRz4iOLHcGBqzPtPWw&usqp=CAU'
               width='4%' height='4%' mt='20px' mr='20px'/>
          
              </Flex>
              <FormControl>
                <Stack spacing={8} width={"48%"} ml='3%' mt='30px'>
                  <Input placeholder='Cardholder Name' size='lg' isRequired />
                  <Input placeholder='Card Number *' size='lg' isRequired />
                  <Flex > <Input placeholder='Expiry Date *' size='lg' isRequired />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Input placeholder='CVV *' size='lg' isRequired /></Flex>
                </Stack>
              </FormControl>&nbsp;&nbsp;&nbsp;</Card>

            <Flex mt='20px' ><Checkbox defaultChecked ml='30px'>Checkbox</Checkbox>

            <Text mt='25px' width={'80%'} pl={'-20px'}>I accept TourRadar's <span style={{color:"blue"}}>Terms & Conditions</span>  and <span style={{color:"blue"}}> Privacy Policy;</span> and 
              Swasthik India Journey's <span style={{color:"blue"}}> payment,cancellation
                and refund conditions</span> </Text>
            </Flex>
            <Button colorScheme='blue' ml='20px' mr='20px' variant='solid' size='lg' p='25px' fontSize={'22px'} mt='20px'>Book Spaces</Button>&nbsp;&nbsp;&nbsp;

          </Card>
          <Card bg='gray.100' width={'94%'} ml='50px' mt='50px'>
            <Heading size='sm' mt='20px' ml='-72%' fontSize={'17px'}>Terms & Conditions</Heading>
            <Text fontSize={'14px'} ml='30px' mt='30px' width='90%'  mr='20px'>TourRadar is an authorised Agent of Swastik India Journeys.
              Please familiarise yourself with the Swastik India Journeys<span style={{color:"blue"}}> payment, cancellation
              and refund policies</span>and TourRadar's <span style={{color:"blue"}}>Terms & Conditions.</span>
              TourRadar will charge you in the stated currency and we do not charge any booking fees.
            </Text>
            <Flex mt='20px'>
              <Heading size='xm' ml='30px'>Operated by Swastik India Journeys</Heading>
              <Spacer />
              <Heading size='xm' mr='200px' >Agent: TourRadar</Heading>
              </Flex>
              <Flex mt='15px'fontSize={'14px'} mb='50px'>
                <Text ml='40px'>Jaipur</Text>
                <Spacer />
                <Text mr='180px' width={'20%'}>Kärntner Ring 5-7, Top 304-30 AUSTRIA</Text>

              </Flex>
          
          </Card>



        </Box>
        <Box w='35%' ml='30px' mt='8%'>
          <Card>
            <CardHeader>
              <Heading size='md' ml='-80%'>My Trip</Heading>
            </CardHeader>

            <CardBody>
              <Stack spacing='4'>
                <Box>
                  <Heading size='sm' ml='-35px' >
                    Taj Mahal and Wildlife with Royal Stay at Castles
                  </Heading>
                  <Text pt='2' fontSize='sm' ml='-80%'>
                    11 days
                  </Text>
                </Box>
                <Box >
                  <Heading size='sm' ml='-200px' >
                    Starts in New Delhi, India
                  </Heading>
                  <Text pt='2' fontSize='sm' ml='-55%'>
                    Wednesday, 31 May 2023
                  </Text>
                </Box>
                <Box>
                  <Heading size='sm' ml='-210px' >
                    Ends in New Delhi, India
                  </Heading>
                  <Text pt='2' fontSize='sm' ml='-58%'>
                    Saturday, 10 Jun 2023
                  </Text>
                </Box>
                <Box>
                  <Heading size='sm' ml='-320px'>
                    Tour Type
                  </Heading>
                  <Text pt='2' fontSize='sm' ml='-80%'>
                    Group
                  </Text>
                </Box>
                <Box>
                  <Heading size='sm' ml='-300px' >
                    Operated in
                  </Heading>
                  <Text pt='2' fontSize='sm' ml='-78%'>
                    English
                  </Text>
                </Box>
                <Box>
                  <Heading size='sm' ml='-270px' >
                    What's included
                  </Heading>
                  <Text pt='2' fontSize='sm' ml='-31%'>
                    Accommodation, Guide, Meals, Transport
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
          <Card mt='30px' position='sticky' top={'20px'} >
            <Heading size='md' ml='-55%' mt='20px'>Price Breakdown</Heading>
            <HStack mt='20px' mr='20px'> <Text fontSize='20px' ml='25px' >Price</Text>
              <Spacer />
              <Text  >₹450</Text>
            </HStack>
            <HStack mt='20px' mr='20px' > <Text fontSize='20px' ml='25px'>Discount</Text>
              <Spacer />
              <Text>-₹450</Text>
            </HStack>
            <Divider orientation='horizontal' mt={'20px'} />
            <HStack mt='20px' mb='30px' mr='18px'>  <Heading size='md' ml='25px' >Total due</Heading>
              <Spacer />
              <Heading size='md' >₹119</Heading>
            </HStack>
          </Card>
          <Switch size='sm' onChange={()=>setTheme(!theme)}/>
        </Box>
      </Flex></Box>

  </>



  )
}

export default Payment