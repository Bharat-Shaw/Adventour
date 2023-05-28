import React from 'react'
import "./payment.css"
import { Container, Box, Text, StackDivider, Heading, Stack, HStack, Flex, FormControl } from '@chakra-ui/react'
import { Card, CardHeader, Divider, IconButton, Spacer, Input, RadioGroup, Radio, Select } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { FiUsers } from 'react-icons/fi';
import { CiCircleCheck } from "react-icons/ci";
import { SlTag } from "react-icons/sl";
function Payment() {

  const [value, setValue] = React.useState('1')
  return (<container>
    <div className='navbar'>
      <h1>Adventour</h1>
    </div>
    <Heading size='lg' ml="-40%" mt='20px' >Taj Mahal and Wildlife with Royal Stay at Castles</Heading>
    <Card maxW={"60%"} ml={"50px"} mt={'50px'} backgroundColor={"darkwhite"} boxShadow='2xl' borderRadius={'10px'}>

      <CardHeader>
        <Flex alignItems={'flex-start'}><Heading size='md'  >Your adventure overview</Heading></Flex>
      </CardHeader>
      <Container maxW={"100%"} boxShadow={'md'} >
        <HStack divider={<StackDivider />} border={" 1px solid blue"} ml="5px" borderRadius={"10px"} mb={"20px"} >
          <Box ml="20px" mr={"20px"} >
            <Heading size='xs' textTransform='uppercase'>
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
            <Flex><Box mt="10px" mr='10px' color="blue"> <CiCircleCheck size={"25px"}/></Box> <Text pt='2'>You will only be charged once your spaces are confirmed.</Text></Flex>&nbsp;
            <Flex><Box mt="10px" mr='10px' color="blue"><FiUsers size={"20px"}/></Box><Heading size={"xm"} mt='8px' mr='5px'> 10+ spaces left</Heading> <Text pt='2'> and yours is reserved for the next 10 minutes</Text></Flex>&nbsp;
            <Flex><Box Box mt="10px" mr='13px' color="blue">< SlTag size={"20px"}/> </Box> <Text pt='2' pb='8'>Revenge Travel Sale. See details</Text></Flex>&nbsp;
          </Box>

        </HStack>

      </Container>


    </Card>


    <Card maxW={"60%"} ml={"50px"} mt={'50px'} boxShadow='2xl' borderRadius={'10px'}>
      <CardHeader>
        <Flex ><Box width='30px'  bg="black" color='white' borderRadius={'8px'} p='1' ml='10px'>1</Box><Heading size='md' ml="30px" mt='5px'>How many are travelling?</Heading></Flex>
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
    <Card boxShadow='2xl'  maxW={'60%'} ml={'50px'} mt='50px' borderRadius={'10px'}>
   

     <Flex mt={'20px'} ml="20px"><Box width='30px' height={'35px'}  bg="black" color='white' borderRadius={'8px'} p='1' ml='10px'>2</Box>&nbsp;&nbsp;&nbsp;&nbsp;<Heading size={'md'}  mb='20px' mt='5px'>Add traveller details</Heading></Flex> 
        <Flex bg={'lightblue'} borderRadius={'10px'} p='3' mb='20px' width={'95%'} ml="25px">
          <Heading size='sm' mt='2px'>Please note:</Heading>
          <Text ml='4px'> Traveller details should match information on passport</Text></Flex>

        <Heading size='xm' ml='-80%'>Lead Traveller</Heading>
        <Text  mb='20px' ml='-40%'>This traveller will serve as the contact person for the booking.</Text>&nbsp;
        <FormControl>
          <Stack spacing={8} width={"48%"} ml='4%'>
            <Input placeholder='First Name*' size='lg' isRequired />
            <Input placeholder='Last Name*' size='lg' />
            <Input placeholder='Email' size='lg' />
            <Input placeholder='+91 7398172478' size='lg' />
            
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

    <Card maxW={"60%"} ml={"50px"} mt={'50px'} boxShadow='2xl' borderRadius={'10px'}>
      <CardHeader>
        <Flex ><Box width='30px'  bg="black" color='white' borderRadius={'8px'} p='1' ml='10px'>3</Box><Heading size='md' ml="30px" mt='5px'>TourRadar Savings</Heading></Flex>
      </CardHeader>
     <Flex ml='-5px'>
        <Text  ml="40px">Redeem Promo Code</Text>
        <Spacer/>
        </Flex>
    </Card>
  </container>



  )
}

export default Payment