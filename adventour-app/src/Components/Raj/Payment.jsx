
import { Box, Button, Checkbox, Flex, FormControl, HStack, IconButton, Image, Input, Radio, RadioGroup, Select, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillCheckCircle, AiFillTag } from 'react-icons/ai';
import { BsFill1SquareFill, BsFill2SquareFill, BsFill3SquareFill, BsFill4SquareFill, BsFillInfoCircleFill, BsLightningChargeFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { GrFormAdd, GrFormSubtract, GrRadialSelected } from 'react-icons/gr';
import Toggle from '../Bharat/toggle';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import Logo from '../Vivek/Logos/LogoPic.png';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

function Payment() {
  
  const theme=useSelector(state=>state.theme);
  const storedata=useSelector(state=>state.detail)
  const [start, setstart] = useState('');
  const [end, setend] = useState('');
  const len=storedata?.destinations?.length
  const [traveller, settraveller] = useState(1);

  useEffect(()=>{
    storedata?.destinations?.filter((el, i)=>{
      if(i===0){
        setstart(el)
      }
      if(i===len-1){
        setend(el)
      }
      return el;
    })
  },[])
  
  console.log(storedata?.str_price)


  return (
    <Box minH={'100vh'} bg={theme ? '#101214' : 'gray.100'} color={theme ? 'white' : 'blackAlpha.800'}>
      <Toggle />
      {/* navbar-box */}
      <Box bg={theme ? '#191b1d' : 'white'} py={'15px'}>
        <HStack w={{ base: "95%", md: "95%", lg: '76%' }} m={'auto'} >
          <Flex alignItems={"center"}>
            <Image src={Logo} alt='logo' w={"70px"} px={"8px"} />
            <Text fontSize={"1.2rem"} fontWeight={"800"} >Adventour.</Text>
          </Flex>
          <Spacer />

          <Text display={{ base: "none", md: "block", lg: "block" }} pr={'10px'}>+1 844 311 8331</Text>
          <HStack _hover={{ bg: !theme ? 'gray.200' : 'gray.800' }} bg={theme ? 'gray.800' : 'gray.200'} display={{ base: "none", md: "flex", lg: "flex" }} borderRadius={'20px'} py={'10px'} px={'18px'}>
            <TfiHeadphoneAlt />
            <Box color={theme ? 'white' : 'blackAlpha.800'} colorScheme='none'>Book as Travel Agent</Box>
          </HStack>
        </HStack>
      </Box>

      {/* Midbox-start */}
      <Box w={{ base: "92%", md: "95%", lg: '76%' }} m={'auto'}>
        {/* Heading flex */}
        <Flex py={'30px'}>
          <Text fontSize={{ base: "20px", md: '33px', lg: '33px' }} fontWeight={'600'}>{storedata?.title}</Text>
          <Spacer />
          <Button colorScheme='none' bg={theme ? '#191b1d' : 'white'} color={theme ? 'white' : 'blackAlpha.800'} mr={'10px'} borderRadius={'20px'} display={{base:'none', md:'block', lg: 'block'}}>Help</Button>
          <Button colorScheme='none' bg={theme ? '#191b1d' : 'white'} color={theme ? 'white' : 'blackAlpha.800'} borderRadius={'20px'} display={{base:'none', md:'block', lg: 'block'}}>Share Tour</Button>
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
                  <Flex py={'5px'}><AiFillCheckCircle size={'35px'} /><Text pt={'5px'} px={'10px'}>Only ₹{(storedata?.price_per_day)?.toLocaleString("en-US")} upfront per person The remaining amount will be due on July 1st, 2023</Text></Flex>
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
                <Text fontWeight={'700'}>{traveller} x Traveller</Text>
                <Spacer />
                <HStack>
                  <IconButton isDisabled={traveller===1} onClick={()=>{settraveller(pre=>pre-1)}} icon={<GrFormSubtract size={'25px'} />} rounded={'full'} boxShadow={'lg'} />
                  <Text px={'10px'}>{traveller}</Text>
                  <IconButton isDisabled={traveller===storedata?.group_size} onClick={()=>{settraveller(pre=>pre+1)}} icon={<GrFormAdd size={'25px'} />} rounded={'full'} boxShadow={'lg'} />
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
              <RadioGroup py={'35px'} isRequired>
                <HStack >
                  <Text fontWeight={'700'} fontSize={'14px'} px={'10px'}>Title*</Text>
                  <Radio value='Mr.'>Mr.</Radio>
                  <Radio value='Ms.'>Ms.</Radio>
                  <Radio value='Mrs.'>Mrs.</Radio>
                  <Radio value='Miss'>Miss</Radio>
                </HStack>
              </RadioGroup>
              <FormControl ml={'13px'} >
                <VStack align={'left'}>
                  <label style={{ marginBottom: '-19px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "1", width: "90px", paddingLeft: "6px" }}>First Name*</label>
                  <Input isRequired w={{ base: "80%", md: "45%", lg: "45%" }} size={'lg'} border={'1px solid silver'} type='text'  />
                </VStack>
                <VStack align={'left'} my={'20px'}>
                  <label style={{ marginBottom: '-19px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "1", width: "85px", paddingLeft: "6px" }}>Last Name*</label>
                  <Input isRequired w={{ base: "80%", md: "45%", lg: "45%" }} size={'lg'} border={'1px solid silver'} type='text'  />
                </VStack>
                <VStack align={'left'}>
                  <label style={{ marginBottom: '-19px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "1", width: "55px", paddingLeft: "6px" }}>Email*</label>
                  <Input isRequired w={{ base: "80%", md: "45%", lg: "45%" }} size={'lg'} border={'1px solid silver'} type='email'  />
                </VStack>
                <VStack align={'left'} my={'20px'}>
                  <label style={{ marginBottom: '-19px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "1", width: "115px", paddingLeft: "6px" }}>Phone Number*</label>
                  <Input isRequired w={{ base: "80%", md: "45%", lg: "45%" }} size={'lg'} border={'1px solid silver'} type='tel' placeholder='e.g. +91 9876543210'  />
                </VStack>
                <Text fontWeight={'700'} mb={'15px'} fontSize={'16px'}>Date of Birth*</Text>
                <HStack>
                  <Box position={'relative'}>
                    <label style={{ position: 'absolute', top: '-9px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "35px", paddingLeft: "6px" }}>Day</label>
                    <Select isRequired size={'lg'} placeholder=' ' w={'80px'} border={'1px solid silver'}>
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
                    <Select isRequired size={'lg'} w={'145px'} border={'1px solid silver'} placeholder=' '>
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
                    <Select isRequired size={'lg'} placeholder=' ' w={'80px'} border={'1px solid silver'}>
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
                <RadioGroup py={'35px'} isRequired>
                  <HStack>
                    <Text fontWeight={'700'} fontSize={'15px'} px={'10px'}>Gender*</Text>
                    <Radio value='male'>Male</Radio>
                    <Radio value='female'>Female</Radio>
                  </HStack>
                </RadioGroup>
                <Box position={'relative'}>
                  <label style={{ position: 'absolute', top: '-9px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "90px", paddingLeft: "6px" }}>Nationality*</label>
                  <Select isRequired w={'45%'} size={'lg'} border={'1px solid silver'} placeholder=' '>
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
                <Text pb={'5px'} fontWeight={'700'} fontSize={'20px'} px={'10px'}>Adventour Savings</Text>
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
                      <Input isRequired w={{ base: "80%", md: "45%", lg: "45%" }} size='lg' border={'1px solid silver'} />
                    </Flex>
                    <Flex direction={'column'} my={'20px'}>
                      <label style={{ marginBottom: '-10px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "110px", paddingLeft: "5px" }}>Card Number *</label>
                      <Input isRequired w={{ base: "80%", md: "45%", lg: "45%" }} size='lg' border={'1px solid silver'} placeholder='**** **** **** ****' />
                    </Flex>

                    <Flex direction={{ base: "column", md: "row", lg: "row" }}>
                      <Flex direction={'column'} w={{ base: "60%", md: "20%", lg: "20%" }}>
                        <label style={{ marginBottom: '-10px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "95px", paddingLeft: "3px" }}>Expiry Date *</label>
                        <Input isRequired w={"100%"} size='lg' border={'1px solid silver'} placeholder='MM / YY' />
                      </Flex>
                      <Flex direction={'column'} w={{ base: "60%", md: "20%", lg: "20%" }} ml={{ base: "0%", md: '5%', lg: "5%" }} mt={{ base: "15px", md: "0px", lg: "0px" }}>
                        <label style={{ marginBottom: '-10px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "45px", paddingLeft: "3px" }}>CVV *</label>
                        <Input isRequired w={"100%"} size='lg' border={'1px solid silver'} placeholder='1 2 3' />
                      </Flex>
                    </Flex>
                  </Box>
                </Box>
                <Box mt={'20px'}>
                  <Flex>
                    <Checkbox size='md'></Checkbox>
                    <Text pl={'15px'} mt={'45px'} fontSize={{ base: "14px", md: "16px", lg: '16px' }}>I accept Adventour's <span style={{ color: "#008cc9" }}>Terms & Conditions</span>  and <span style={{ color: "#008cc9" }}> Privacy Policy;</span> and
                      Realistic Journey's <span style={{ color: "#008cc9" }}> payment,cancellation and refund conditions,</span> and <span style={{ color: "#008cc9" }}>Credit for Future Tours <br /> Terms & Conditions.</span>
                    </Text>
                  </Flex>
                </Box>
                <Link to={'/'}><Button w={'100%'} colorScheme='none' bg={'#008cc9'} py={'30px'} mt={'30px'}>Book Spaces</Button></Link>
                <Box w={'50%'} m={'auto'} textAlign={'center'} mt={'20px'}>
                  <Text fontSize={'13px'} fontWeight={'700'}>
                    No booking fees! <span style={{ fontWeight: "500" }}>You will be charged</span> ₹{(storedata?.act_price)?.toLocaleString("en-US")} <span style={{ fontWeight: "500" }}>now.
                      The remaining balance is due on</span> 1 Jul, 2023.
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box display={{ base: "block", md: "block", lg: "none" }}>
              <Pricediv theme={theme} storedata={storedata} traveller={traveller}/>
            </Box>
            <Box my={'25px'} p={'20px'} borderRadius={'15px'} bg={theme ? '#191b1d' : 'white'} boxShadow={'md'}>
              <Text mt={'15px'} fontWeight={'700'} fontSize={'17px'}>Terms & Conditions</Text>
              <Text mt={'25px'} lineHeight={'19px'} fontSize={'13px'}>Adventour is an authorised Agent of Expat Explore Travel. Please familiarise yourself with the Expat Explore Travel payment,
                cancellation and refund policies and Adventour's Terms & Conditions. Adventour will charge you in the stated currency and we do
                not charge any booking fees.
              </Text>
              <Flex justifyContent={'space-between'} w={'70%'} direction={{ base: "column", md: "row", lg: "row" }}>
                <Box lineHeight={'23px'}>
                  <Text mt={'13px'} fontWeight={'700'} fontSize={'15px'}>Operated by Expat Explore Travel</Text>
                  <Text fontSize={'12px'}>London</Text>
                </Box>
                <Box lineHeight={'23px'}>
                  <Text mt={'15px'} fontWeight={'700'} fontSize={'15px'}>Agent: Adventour</Text>
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
              <Text fontSize={'15px'} fontWeight={'600'}>{storedata?.title}</Text>
              <Text pb={'10px'} fontSize={'15px'}>{storedata?.tour_length} days</Text>
              <Text fontSize={'15px'} fontWeight={'600'}>Starts in, {start}</Text>
              <Text pb={'10px'} fontSize={'15px'}>Sunday, 20 Aug 2023</Text>
              <Text fontSize={'15px'} fontWeight={'600'}>Ends in , {end}</Text>
              <Text pb={'10px'} fontSize={'15px'}>Thursday, 31 Aug 2023</Text>
              <Text fontSize={'15px'} fontWeight={'600'}>Tour Type</Text>
              <Text pb={'10px'} fontSize={'15px'}>Group</Text>
              <Text fontSize={'15px'} fontWeight={'600'}>Operated in</Text>
              <Text pb={'10px'} fontSize={'15px'}>English</Text>
              <Text fontSize={'15px'} fontWeight={'600'}>What's included</Text>
              <Text pb={'10px'} fontSize={'15px'}>Accommodation, Guide, Meals, Transport</Text>
            </Box>


            <Pricediv theme={theme} storedata={storedata} traveller={traveller}/>


          </Box>

        </Flex>
      </Box>
    </Box>
  )
}

function Pricediv({ theme, storedata, traveller }) {
  return <Box p={'20px'} my={'25px'} borderRadius={'15px'} bg={theme ? '#191b1d' : 'white'} boxShadow={'md'} position={'sticky'} top={'20px'}>
    <Text pb={'20px'} fontSize={'20px'} fontWeight={'700'}>Price Breakdown</Text>
    <Flex justifyContent={'space-between'}>
      <Box pb={'14px'}>
        <Text>Base price</Text>
        <Text fontSize={'14px'}>{traveller} Traveller x ₹{(storedata?.str_price)?.toLocaleString("en-US")}</Text>
      </Box>
      <Text>₹ {(traveller *storedata?.str_price)?.toLocaleString("en-US")}</Text>
    </Flex>
    <Flex justifyContent={'space-between'} pb={'15px'} borderBottom={'1px solid silver'}>
      <Text>Discount</Text>
      <Text>- ₹ {(traveller * storedata?.save_price)?.toLocaleString("en-US")}</Text>
    </Flex>
    <Flex justifyContent={'space-between'} pt={'20px'}>
      <Text fontWeight={'700'}>Total due</Text>
      <Text fontSize={'20px'} fontWeight={'700'}>₹ {(traveller *storedata?.act_price)?.toLocaleString("en-US")}</Text>
    </Flex>
    <Flex lineHeight={'45px'} direction={'column'} mt={'10px'} p={'5px'} bg={theme ? 'gray.800' : 'gray.100'} borderRadius={'10px'}>
      <Flex>
        <Text fontWeight={'700'}>Due today</Text>
        <Spacer />
        <Text fontWeight={'700'}>₹ {(traveller *storedata?.price_per_day)?.toLocaleString("en-US")}</Text>
      </Flex>
      <Flex>
        <Text>Due on 1 Jul, 2023</Text>
        <Spacer />
        <Text>₹ {(traveller *storedata?.act_price)?.toLocaleString("en-US")}</Text>
      </Flex>
    </Flex>
  </Box>

}

export default Payment
