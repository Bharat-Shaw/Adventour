import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem,
    AccordionPanel, Box, Button, Center, Checkbox, Drawer,
    DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader,
    DrawerOverlay, Flex, Image, RangeSlider, RangeSliderFilledTrack,
    RangeSliderThumb, RangeSliderTrack, Select,
    Text, VStack, useDisclosure
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { RiFilter3Line } from "react-icons/ri";
import { GiStarsStack } from "react-icons/gi";
import { Link, useParams } from 'react-router-dom'
import ExpandComp from '../Bharat/ExpandComp';
import { useDispatch, useSelector } from 'react-redux';

function TourlistBody({ setTheme, theme }) {
    const data=useSelector((state)=>state.data);
    const {location}=useParams();
    const dispatch=useDispatch();
    console.log(data[0]?.region)

    useEffect(()=>{
        window.scrollTo({
            top: 0, 
          });
    },[])

    const mainBoxStyles = {
        w: { base: '92%', md: '92%', lg: '76%' },
        bg: theme ? "gray.100" : "#101214",
        py: '3px',
        m: 'auto',
        pt: '20px'
    }

    const headingStyles = {
        fontSize: "28px",
        fontWeight: "700",
        borderBottomWidth: '1px',
        pt: "10px",
        pb: "25px"
    }

    const pathStyles = {
        color: theme ? "blackAlpha.700" : "whiteAlpha.700",
        fontSize: "14px",
        fontWeight: "600"
    }

    const middleBoxStyles = {
        justifyContent: "space-between",
        display: { base: 'block', md: 'block', lg: 'flex' },
        py: '30px',
        px: '10px'
    }

    const sortHeadingStyles = {
        fontSize: '20px',
        fontWeight: '600',
        p: "14px 24px",
        borderRadius: "5px",
        // bg: '#3DC6EF',
        color: theme ? "white" : "black",
        bg: theme ? "#008cc9" : "#3DC6EF",
        alignItems: "center",
    }

    const rightTopBoxStyles = {
        p: " 10px 0px",
        borderRadius: "5px",
        fontSize: '20px',
        fontWeight: '600',
        // border: '1px solid #DCDCDC'
    }

    const detailsBox_1_Styles = {
        w: '30%',
        fontSize: '13px',
        fontWeight: '700',
        py: '1px'
    }

    const detailsBox_2_Styles = {
        w: '70%',
        fontSize: '13px',
        color: theme ? "blackAlpha.700" : "whiteAlpha.700",
        py: '1px'
    }

    const flex_Card_Styles = {
        mb: '35px',
        justifyContent: 'space-between',
        // boxShadow: '2xl',
        bg: theme ? "white" : "#191b1d",
        borderRadius: '20px',
        display: { base: 'block', md: 'flex', lg: 'flex' }
    }

    const main_Img_Styles = {
        w: '100%',
        h: '100%',
        borderRadius: { base: '20px 20px 0 0', md: '20px 0 0 20px', lg: '20px 0 0 20px' }
    }

    const card_Mid_Box_Styles = {
        py: '3px',
        w: { base: '100%', md: '45%', lg: '45%' },
        px: { base: '10px', md: '0', lg: '0' }
    }

    const card_Mid_Box_Text_I = {
        color: theme ? "#008cc9" : "#3DC6EF",
        fontSize: { base: '12.5px', md: "14px", lg: '15.5px' },
        fontWeight: { base: '500', md: '700', lg: '700' }
    }

    const card_Mid_Box_Text_II = {
        fontSize: { base: "15px", md: "17px", lg: '18px' },
        fontWeight: { base: '500', md: '700', lg: '700' }
    }

    const card_Mid_Box_Text_III = {
        fontSize: { base: "12px", md: "13px", lg: '13px' },
        color: theme ? "#008cc9" : "#3DC6EF"
    }

    const card_Right_Box = {
        w: { base: '100%', md: '23%', lg: '23%' },
        pl: { base: '10px', md: '0px', lg: '0px' },
        pt: { base: '10px', md: '10px', lg: '10px' },
        pr: { base: '10px', md: '10px', lg: '10px' },
        pb: { base: '10px', md: '10px', lg: '10px' }
    }

    const tour_Length_Text = {
        fontSize: { base: "12px", md: "12px", lg: '13px' },
        color: theme ? "blackAlpha.700" : "whiteAlpha.700"
    }

    const tour_Days_Text = {
        fontSize: '14px',
        mt: '-4px',
        fontWeight: '700'
    }

    const price_Day_Text = {
        fontSize: '13px',
        mt: { base: '0', md: '5px', lg: '5px' },
        color: theme ? "blackAlpha.700" : "whiteAlpha.700"
    }

    const price_Text = {
        fontSize: '13px',
        mt: '-4px',
        fontWeight: '700'
    }

    const from_Text = {
        fontSize: { base: '14px', md: '15px', lg: '15px' },
        fontWeight: '700',
        color: theme ? "blackAlpha.700" : "whiteAlpha.700"
    }

    const act_Price_Text = {
        fontSize: { base: '14px', md: '16px', lg: '17px' },
        fontWeight: { base: '500', md: '700', lg: '700' },
        color: '#41C4AB'
    }

    const view_Tour_Button = {
        bg: theme ? "#008cc9" : "#3DC6EF",
        w: { base: '100%', md: '100%', lg: '100%' },
        mt: '20px',
        fontWeight: '700',
        mb: { base: '10px' },
        color: theme ? "white" : "black"
    }


    return (
        <Box w={"100%"} pt={"80px"}>

            {/*-------- Main Box--------- */}

            <Box sx={mainBoxStyles}>

                {/*------ Path------ */}
                <Text sx={pathStyles}>
                    Home / {data[0]?.region} / Deals
                </Text>

                {/*------Heading------*/}
                <Text sx={headingStyles}>
                    {data[0]?.region} Deals and Discounts
                </Text>

                {/*----------Details and Sorting------------*/}

                <Flex sx={middleBoxStyles}>

                    {/*-----------Left Div (Sorting)-----------*/}
                    <Box w={"22%"} display={{ base: 'none', md: 'none', lg: 'block' }}>
                        <Flex sx={sortHeadingStyles}>
                            <RiFilter3Line size={'25px'} />&nbsp;
                            Sort & filter
                        </Flex>
                        <Box mt={'25px'}>
                            <Select bg={theme ? "white" : "#191b1d"} size='lg' border={'none'}>
                                <option value='PMPF' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Popularity: Most popular first</option>
                                <option value='TP-LF' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Total Price: Lowest first</option>
                                <option value='TP-HF' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Total Price: Higest first</option>
                                <option value='P/D-LF' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Price/Day: Lowest first</option>
                                <option value='P/D-HF' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Price/Day: Higest first</option>
                                <option value='D-SF' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Duration: Sortest first</option>
                                <option value='D-LF' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Duration: Longest first</option>
                                <option value='R-MR' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Reviews: Most reviewed</option>
                                <option value='BG-HS' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Biggest Deals: Higest savings</option>
                            </Select>
                        </Box>
                        <Box mt={'25px'} borderRadius={'10px'} bg={theme ? "white" : "#191b1d"}>
                            <Accordion allowMultiple>
                                <AccordionItem border={'none'} py={'10px'}>
                                    <h2>
                                        <AccordionButton border={'none'}>
                                            <Box as="span" flex='1' textAlign='left' >
                                                Must-see countries
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} >
                                        <VStack alignItems={"start"} color={theme ? "blackAlpha.700" : "white"}>
                                            <Checkbox size='lg'>India</Checkbox>
                                            <Checkbox size='lg'>Thailand</Checkbox>
                                            <Checkbox size='lg'>Vietnam</Checkbox>
                                            <Checkbox size='lg'>Nepal</Checkbox>
                                            <Checkbox size='lg'>Cambodia</Checkbox>
                                            <Checkbox size='lg'>Sri Lanka</Checkbox>
                                            <Checkbox size='lg'>Indonesia</Checkbox>
                                            <Checkbox size='lg'>Laos</Checkbox>
                                            <Checkbox size='lg'>Jordan</Checkbox>
                                            <Checkbox size='lg'>Israel</Checkbox>
                                        </VStack>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem py={'10px'}>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Length
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <RangeSlider defaultValue={[0, 21]} min={0} max={21} step={1}>
                                            <RangeSliderTrack boxSize={2}>
                                                <RangeSliderFilledTrack />
                                            </RangeSliderTrack>
                                            <RangeSliderThumb boxSize={6} index={0} />
                                            <RangeSliderThumb boxSize={6} index={1} />
                                        </RangeSlider>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem py={'10px'}>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Departure date
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <VStack alignItems={"start"} color={theme ? "blackAlpha.700" : "white"}>
                                            <Checkbox size='lg'>June 2023</Checkbox>
                                            <Checkbox size='lg'>July 2023</Checkbox>
                                            <Checkbox size='lg'>Augest 2023</Checkbox>
                                            <Checkbox size='lg'>September 2023</Checkbox>
                                            <Checkbox size='lg'>October 2023</Checkbox>
                                            <Checkbox size='lg'>November 2023</Checkbox>
                                            <Checkbox size='lg'>December 2023</Checkbox>
                                            <Checkbox size='lg'>January 2024</Checkbox>
                                            <Checkbox size='lg'>February 2024</Checkbox>
                                            <Checkbox size='lg'>March 2024</Checkbox>
                                        </VStack>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem py={'10px'}>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Adventure Type
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <VStack alignItems={"start"} color={theme ? "blackAlpha.700" : "white"}>
                                            <Checkbox size='lg'>Private</Checkbox>
                                            <Checkbox size='lg'>Group</Checkbox>
                                            <Checkbox size='lg'>Independent</Checkbox>
                                            <Checkbox size='lg'>Private Tour Available</Checkbox>
                                        </VStack>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem py={'10px'}>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Age Range
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <RangeSlider defaultValue={[1, 100]} min={1} max={100} step={5}>
                                            <RangeSliderTrack boxSize={2}>
                                                <RangeSliderFilledTrack />
                                            </RangeSliderTrack>
                                            <RangeSliderThumb boxSize={6} index={0} />
                                            <RangeSliderThumb boxSize={6} index={1} />
                                        </RangeSlider>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem py={'10px'}>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Price
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <RangeSlider defaultValue={[10000, 500000]} min={10000} max={500000} step={1000}>
                                            <RangeSliderTrack boxSize={2}>
                                                <RangeSliderFilledTrack />
                                            </RangeSliderTrack>
                                            <RangeSliderThumb boxSize={6} index={0} />
                                            <RangeSliderThumb boxSize={6} index={1} />
                                        </RangeSlider>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem py={'10px'} borderBottom={'none'}>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Maximum group size
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <VStack alignItems={"start"} color={theme ? "blackAlpha.700" : "white"}>
                                            <Checkbox size='lg'>10 people</Checkbox>
                                            <Checkbox size='lg'>20 people</Checkbox>
                                            <Checkbox size='lg'>30 people</Checkbox>
                                            <Checkbox size='lg'>40 people</Checkbox>
                                            <Checkbox size='lg'>50 people</Checkbox>
                                            <Checkbox size='lg'>50+ people</Checkbox>
                                        </VStack>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    </Box>

                    {/*----- Small & Mid Screen Sorting Div -----*/}

                    <Box display={{ base: 'flex', md: 'flex', lg: 'none' }}>
                        <SmallScreenDrawer theme={theme} />
                    </Box>


                    {/*-----------Right Div (Cards)-----------*/}

                    <Box w={{ base: '100%', md: '100%', lg: '75%' }}>
                        <Flex sx={rightTopBoxStyles}>
                            <GiStarsStack size={'35px'} color='orange' />&nbsp;&nbsp;
                            {data[0]?.region} Special Offers
                        </Flex>

                        {/*-------- Card Div -------*/}

                        <Box mt={'25px'} pt={'4px'}>
                            {data.map((ele) => {
                                return (
                                    <Flex sx={flex_Card_Styles} key={ele.id}>
                                        {/*---- Left Box ----*/}
                                        <Box w={{ base: '100%', md: '28%', lg: '28%' }} key={ele.id+1}>
                                            <Link to={`/tourdetail/${location}/${ele.id}`}>
                                                <Image sx={main_Img_Styles} src={ele.main_image} alt="mainImg" />
                                            </Link>
                                        </Box>

                                        {/*---- Mid Box ----*/}
                                        <Box sx={card_Mid_Box_Styles} key={ele.id+2}>
                                            <Box borderBottom={"1px solid #DCDCDC"} pb={'15px'}>
                                                <Text sx={card_Mid_Box_Text_I} >{ele.category}</Text>
                                                <Link to={`/tourdetail/${location}/${ele.id}`}>
                                                    <Text sx={card_Mid_Box_Text_II} >{ele.title}</Text>
                                                </Link>
                                                <Text sx={card_Mid_Box_Text_III} >{ele.reviews} reiviews</Text>
                                            </Box>
                                            <Box py={'6px'} >
                                                <Flex >
                                                    <Box sx={detailsBox_1_Styles} >
                                                        <Text >Destinations</Text>
                                                    </Box>
                                                    <Box sx={detailsBox_2_Styles}>
                                                        <Text>
                                                            {ele.destinations.map((des) => {
                                                                return (<span>{des}, </span>)
                                                            })}
                                                        </Text>
                                                        {/* <Text>Bangkok, Khao Sok National Park, Ko Pha Ngan, Ko Phi Phi, Phuket</Text> */}
                                                    </Box>
                                                </Flex>
                                                <Flex >
                                                    <Box sx={detailsBox_1_Styles}>
                                                        <Text>Age Range</Text>
                                                    </Box>
                                                    <Box sx={detailsBox_2_Styles}>
                                                        <Text>{ele.age_range} years old</Text>
                                                    </Box>
                                                </Flex>
                                                <Flex >
                                                    <Box sx={detailsBox_1_Styles}>
                                                        <Text>Travel Style</Text>
                                                    </Box>
                                                    <Box sx={detailsBox_2_Styles}>
                                                        <Text>
                                                            {ele.travel_style.map((styles) => {
                                                                return (<span>{styles}, </span>)
                                                            })}
                                                        </Text>
                                                        {/* <Text>Beach, Group, Fully Guided</Text> */}
                                                    </Box>
                                                </Flex>
                                                <Flex >
                                                    <Box sx={detailsBox_1_Styles}>
                                                        <Text pb={'8px'}>Operated in</Text>
                                                    </Box>
                                                    <Box sx={detailsBox_2_Styles} >
                                                        <Text pb={'8px'}>English</Text>
                                                    </Box>
                                                </Flex>
                                            </Box>
                                        </Box>

                                        {/*---- Right Box ----*/}
                                        <Box sx={card_Right_Box} key={ele.id+3}>
                                            <Flex justifyContent={'space-between'}>
                                                <Box w='45%'>
                                                    <Flex alignItems={"center"} direction={{ base: 'row', md: "column", lg: "column" }} justifyContent={'space-between'}>
                                                        <Box>
                                                            <Text sx={tour_Length_Text} >Tour Length</Text>
                                                            <Text sx={tour_Days_Text} >{ele.tour_length} Days</Text>
                                                        </Box>
                                                        <Box ml={{ base: "15px", md: "6px", lg: '6px' }}>
                                                            <Text sx={price_Day_Text} >Price per day</Text>
                                                            <Text sx={price_Text} >₹ {ele.price_per_day}</Text>
                                                        </Box>
                                                    </Flex>
                                                </Box>
                                                <Flex w='45%' direction={{ base: 'row', md: 'column', lg: 'column' }} justifyContent={'space-around'} mt={{ base: '0px', md: '-3px', lg: '-3px' }}>
                                                    <Box>
                                                        <Text sx={from_Text}>From</Text>
                                                        <Text textDecoration={'line-through'} fontSize={'14px'} color={'gray'} my={"-4px"} fontWeight={'600'}>₹ {ele.str_price}</Text>
                                                        <Text sx={act_Price_Text} >₹ {ele.act_price}</Text>
                                                    </Box>
                                                    <Box>
                                                        <Text fontSize={'11px'} color={'gray'}>Save: ₹{ele.save_price}</Text>
                                                    </Box>
                                                </Flex>
                                            </Flex>
                                            <Center>
                                                <Link to={`/tourdetail/${location}/${ele.id}`}>
                                                    <Button sx={view_Tour_Button} colorScheme='none' >View Tour</Button>
                                                </Link>
                                            </Center>
                                        </Box>
                                    </Flex>
                                )
                            })}

                        </Box>
                    </Box>
                </Flex>
                        
            </Box >
            <Center><Button isDisabled={data.length===20} color={theme ? "white" : "black"} colorScheme='none' onClick={()=>{dispatch({type:'LIMIT'})}} bg={theme ? "#008cc9" : "#3DC6EF"}>Load More</Button></Center> 
            <Center> <ExpandComp theme={!theme}/></Center>
           
        </Box >
    )
}

export default TourlistBody

function SmallScreenDrawer({ theme }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button colorScheme='none' onClick={onOpen} color={theme ? "white" : "black"} bg={theme ? "#008cc9" : "#3DC6EF"} fontSize='20px' fontWeight='600' p="25px 30px">
                <RiFilter3Line size={'25px'} />&nbsp;
                Sort & filter
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                size={{ base: 'xs', md: 'sm', lg: 'sm' }}
            >
                <DrawerOverlay />
                <DrawerContent bg={theme ? "white" : "#191b1d"} color={theme ? "black" : "white"}>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Flex alignItems={'center'}>
                            <RiFilter3Line size={'25px'} />&nbsp;
                            Sort & filter
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody>
                        <Box>
                            <Box mt={'25px'}>
                                <Select bg={theme ? "white" : "#191b1d"} size='lg'>
                                    <option value='PMPF' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Popularity: Most popular first</option>
                                    <option value='TP-LF' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Total Price: Lowest first</option>
                                    <option value='TP-HF' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Total Price: Higest first</option>
                                    <option value='P/D-LF' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Price/Day: Lowest first</option>
                                    <option value='P/D-HF' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Price/Day: Higest first</option>
                                    <option value='D-SF' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Duration: Sortest first</option>
                                    <option value='D-LF' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Duration: Longest first</option>
                                    <option value='R-MR' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Reviews: Most reviewed</option>
                                    <option value='BG-HS' style={{ background: theme ? "white" : "#191b1d", fontSize: "15px" }}>Biggest Deals: Higest savings</option>
                                </Select>
                            </Box>
                            <Box mt={'25px'} border={'1px solid #DCDCDC'} borderRadius={'10px'}>
                                <Accordion allowMultiple>
                                    <AccordionItem border={'none'} py={'10px'}>
                                        <h2>
                                            <AccordionButton border={'none'}>
                                                <Box as="span" flex='1' textAlign='left' >
                                                    Must-see countries
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} >
                                            <VStack alignItems={"start"} color={theme ? "blackAlpha.700" : "white"}>
                                                <Checkbox size='lg'>India</Checkbox>
                                                <Checkbox size='lg'>Thailand</Checkbox>
                                                <Checkbox size='lg'>Vietnam</Checkbox>
                                                <Checkbox size='lg'>Nepal</Checkbox>
                                                <Checkbox size='lg'>Cambodia</Checkbox>
                                                <Checkbox size='lg'>Sri Lanka</Checkbox>
                                                <Checkbox size='lg'>Indonesia</Checkbox>
                                                <Checkbox size='lg'>Laos</Checkbox>
                                                <Checkbox size='lg'>Jordan</Checkbox>
                                                <Checkbox size='lg'>Israel</Checkbox>
                                            </VStack>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem py={'10px'}>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Length
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <RangeSlider defaultValue={[0, 21]} min={0} max={21} step={1}>
                                                <RangeSliderTrack boxSize={2}>
                                                    <RangeSliderFilledTrack />
                                                </RangeSliderTrack>
                                                <RangeSliderThumb boxSize={6} index={0} />
                                                <RangeSliderThumb boxSize={6} index={1} />
                                            </RangeSlider>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem py={'10px'}>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Departure date
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <VStack alignItems={"start"} color={theme ? "blackAlpha.700" : "white"}>
                                                <Checkbox size='lg'>June 2023</Checkbox>
                                                <Checkbox size='lg'>July 2023</Checkbox>
                                                <Checkbox size='lg'>Augest 2023</Checkbox>
                                                <Checkbox size='lg'>September 2023</Checkbox>
                                                <Checkbox size='lg'>October 2023</Checkbox>
                                                <Checkbox size='lg'>November 2023</Checkbox>
                                                <Checkbox size='lg'>December 2023</Checkbox>
                                                <Checkbox size='lg'>January 2024</Checkbox>
                                                <Checkbox size='lg'>February 2024</Checkbox>
                                                <Checkbox size='lg'>March 2024</Checkbox>
                                            </VStack>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem py={'10px'}>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Adventure Type
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <VStack alignItems={"start"} color={theme ? "blackAlpha.700" : "white"}>
                                                <Checkbox size='lg'>Private</Checkbox>
                                                <Checkbox size='lg'>Group</Checkbox>
                                                <Checkbox size='lg'>Independent</Checkbox>
                                                <Checkbox size='lg'>Private Tour Available</Checkbox>
                                            </VStack>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem py={'10px'}>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Age Range
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <RangeSlider defaultValue={[1, 100]} min={1} max={100} step={5}>
                                                <RangeSliderTrack boxSize={2}>
                                                    <RangeSliderFilledTrack />
                                                </RangeSliderTrack>
                                                <RangeSliderThumb boxSize={6} index={0} />
                                                <RangeSliderThumb boxSize={6} index={1} />
                                            </RangeSlider>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem py={'10px'}>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Price
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <RangeSlider defaultValue={[10000, 500000]} min={10000} max={500000} step={1000}>
                                                <RangeSliderTrack boxSize={2}>
                                                    <RangeSliderFilledTrack />
                                                </RangeSliderTrack>
                                                <RangeSliderThumb boxSize={6} index={0} />
                                                <RangeSliderThumb boxSize={6} index={1} />
                                            </RangeSlider>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem py={'10px'} borderBottom={'none'}>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Maximum group size
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <VStack alignItems={"start"} color={theme ? "blackAlpha.700" : "white"}>
                                                <Checkbox size='lg'>10 people</Checkbox>
                                                <Checkbox size='lg'>20 people</Checkbox>
                                                <Checkbox size='lg'>30 people</Checkbox>
                                                <Checkbox size='lg'>40 people</Checkbox>
                                                <Checkbox size='lg'>50 people</Checkbox>
                                                <Checkbox size='lg'>50+ people</Checkbox>
                                            </VStack>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Box>
                        </Box>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}
