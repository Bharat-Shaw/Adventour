import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,
    Button, Center, Checkbox, Flex, Image, RangeSlider, RangeSliderFilledTrack,
    RangeSliderThumb, RangeSliderTrack, Select, Text, VStack
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { RiFilter3Line } from "react-icons/ri";
import { GiStarsStack } from "react-icons/gi";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SmallScreenSortingDrawer from './SmallScreenSortingDrawer';
import axios from 'axios';

function TourlistBody() {
    const data = useSelector((state) => state.data);
    const { location } = useParams();
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, [])

    const mainBoxStyles = {
        w: { base: '92%', md: '92%', lg: '76%' },
        bg: theme ? "#101214" : "gray.100",
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
        color: theme ? "whiteAlpha.700" : "blackAlpha.700",
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
        color: theme ? "black" : "white",
        bg: theme ? "#3DC6EF" : "#008cc9",
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
        color: theme ? "whiteAlpha.700" : "blackAlpha.700",
        py: '1px'
    }

    const flex_Card_Styles = {
        mb: '35px',
        justifyContent: 'space-between',
        bg: theme ? "#191b1d" : "white",
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
        color: theme ? "#3DC6EF" : "#008cc9",
        fontSize: { base: '12.5px', md: "14px", lg: '15.5px' },
        fontWeight: { base: '500', md: '700', lg: '700' }
    }

    const card_Mid_Box_Text_II = {
        fontSize: { base: "15px", md: "17px", lg: '18px' },
        fontWeight: { base: '500', md: '700', lg: '700' }
    }

    const card_Mid_Box_Text_III = {
        fontSize: { base: "12px", md: "13px", lg: '13px' },
        color: theme ? "#3DC6EF" : "#008cc9"
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
        color: theme ? "whiteAlpha.700" : "blackAlpha.700"
    }

    const tour_Days_Text = {
        fontSize: '14px',
        mt: '-4px',
        fontWeight: '700'
    }

    const price_Day_Text = {
        fontSize: '13px',
        mt: { base: '0', md: '5px', lg: '5px' },
        color: theme ? "whiteAlpha.700" : "blackAlpha.700"
    }

    const price_Text = {
        fontSize: '13px',
        mt: '-4px',
        fontWeight: '700'
    }

    const from_Text = {
        fontSize: { base: '14px', md: '15px', lg: '15px' },
        fontWeight: '700',
        color: theme ? "whiteAlpha.700" : "blackAlpha.700"
    }

    const act_Price_Text = {
        fontSize: { base: '14px', md: '16px', lg: '17px' },
        fontWeight: { base: '500', md: '700', lg: '700' },
        color: '#41C4AB'
    }

    const view_Tour_Button = {
        bg: theme ? "#3DC6EF" : "#008cc9",
        w: { base: '100%', md: '100%', lg: '100%' },
        mt: '20px',
        fontWeight: '700',
        mb: { base: '10px' },
        color: theme ? "black" : "white"
    }
    const limit=useSelector((state)=>state.limit);
    // https://weak-rose-seahorse-tutu.cyclic.app/api/Asia?_sort=price_per_day&_order=asc

    function sortfunc(value, sortval) {
        axios.get(`https://weak-rose-seahorse-tutu.cyclic.app/api/${location}?_limit=${limit}&_sort=${value}&_order=${sortval}`)
            .then((res) => {
                console.log(res.data)
                dispatch({ type: 'LIST', payload: res.data })
            })
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
                    <Box w={"22%"} display={{ base: 'none', md: 'none', lg: 'block' }} h={'600px'} position={'sticky'} top={'75px'}>
                        <Flex sx={sortHeadingStyles}>
                            <RiFilter3Line size={'25px'} />&nbsp;
                            Sort & filter
                        </Flex>
                        <Box mt={'25px'} >
                            <Select bg={theme ? "#191b1d" : "white"} size='lg' border={'none'} onChange={(e) => {
                                if(e.target.value==='rating'){
                                    sortfunc('rating', 'desc')
                                }
                                else if(e.target.value==='str_priceL'){
                                    sortfunc('str_price', 'asc')
                                }
                                else if(e.target.value==='str_priceH'){
                                    sortfunc('str_price', 'desc')
                                }
                                else if(e.target.value==='price_per_dayL'){
                                    sortfunc('price_per_day', 'asc')
                                }
                                else if(e.target.value==='price_per_dayH'){
                                    sortfunc('price_per_day', 'desc')
                                }
                                else if(e.target.value==='tour_lengthS'){
                                    sortfunc('tour_length', 'asc')
                                }
                                else if(e.target.value==='tour_lengthL'){
                                    sortfunc('tour_length', 'desc')
                                }
                                else if(e.target.value==='reviews'){
                                    sortfunc('reviews', 'desc')
                                }
                                else if(e.target.value==='save_price'){
                                    sortfunc('save_price', 'desc')
                                }
                                
                            }}>
                                <option value='rating' style={{ background: theme ? "#191b1d" : "white", fontSize: "15px" }}>Popularity: Most popular first</option>
                                <option value='str_priceL' style={{ background: theme ? "#191b1d" : "white", fontSize: "15px" }}>Total Price: Lowest first</option>
                                <option value='str_priceH' style={{ background: theme ? "#191b1d" : "white", fontSize: "15px" }}>Total Price: Higest first</option>
                                <option value='price_per_dayL' style={{ background: theme ? "#191b1d" : "white", fontSize: "15px" }}>Price/Day: Lowest first</option>
                                <option value='price_per_dayH' style={{ background: theme ? "#191b1d" : "white", fontSize: "15px" }}>Price/Day: Higest first</option>
                                <option value='tour_lengthS' style={{ background: theme ? "#191b1d" : "white", fontSize: "15px" }}>Duration: Sortest first</option>
                                <option value='tour_lengthL' style={{ background: theme ? "#191b1d" : "white", fontSize: "15px" }}>Duration: Longest first</option>
                                <option value='reviews' style={{ background: theme ? "#191b1d" : "white", fontSize: "15px" }}>Reviews: Most reviewed</option>
                                <option value='save_price' style={{ background: theme ? "#191b1d" : "white", fontSize: "15px" }}>Biggest Deals: Higest savings</option>
                            </Select>
                        </Box>
                        <Box mt={'25px'} borderRadius={'10px'} bg={theme ? "#191b1d" : "white"}>
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
                                        <VStack alignItems={"start"} color={theme ? "white" : "blackAlpha.700"}>
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
                                        <VStack alignItems={"start"} color={theme ? "white" : "blackAlpha.700"}>
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
                                        <VStack alignItems={"start"} color={theme ? "white" : "blackAlpha.700"}>
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
                                        <VStack alignItems={"start"} color={!theme ? "blackAlpha.700" : "white"}>
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
                        <SmallScreenSortingDrawer theme={!theme} />
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
                                    <Flex sx={flex_Card_Styles} minH={"240px"} key={ele.id}>
                                        {/*---- Left Box ----*/}
                                        <Box w={{ base: '100%', md: '30%', lg: '30%' }} key={ele.id + 1}>
                                            <Link to={`/tourdetail/${location}/${ele.id}`}>
                                                <Image sx={main_Img_Styles} src={ele.main_image} alt="mainImg" />
                                            </Link>
                                        </Box>

                                        {/*---- Mid Box ----*/}
                                        <Box sx={card_Mid_Box_Styles} key={ele.id + 2}>
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
                                        <Box sx={card_Right_Box} key={ele.id + 3}>
                                            <Flex justifyContent={'space-between'}>
                                                <Box w='45%'>
                                                    <Flex alignItems={"center"} direction={{ base: 'row', md: "column", lg: "column" }} justifyContent={'space-between'}>
                                                        <Box>
                                                            <Text sx={tour_Length_Text} >Tour Length</Text>
                                                            <Text sx={tour_Days_Text} >{ele.tour_length} Days</Text>
                                                        </Box>
                                                        <Box ml={{ base: "15px", md: "6px", lg: '6px' }}>
                                                            <Text sx={price_Day_Text} >Price per day</Text>
                                                            <Text sx={price_Text} >₹ {(ele.price_per_day)?.toLocaleString("en-US")}</Text>
                                                        </Box>
                                                    </Flex>
                                                </Box>
                                                <Flex w='45%' direction={{ base: 'row', md: 'column', lg: 'column' }} justifyContent={'space-around'} mt={{ base: '0px', md: '-3px', lg: '-3px' }}>
                                                    <Box>
                                                        <Text sx={from_Text}>From</Text>
                                                        <Text textDecoration={'line-through'} fontSize={'14px'} color={'gray'} my={"-4px"} fontWeight={'600'}>₹ {(ele.str_price)?.toLocaleString("en-US")}</Text>
                                                        <Text sx={act_Price_Text} >₹ {(ele.act_price)?.toLocaleString("en-US")}</Text>
                                                    </Box>
                                                    <Box>
                                                        <Text fontSize={'11px'} color={'gray'}>Save: ₹{(ele.save_price)?.toLocaleString("en-US")}</Text>
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
            <Center><Button isDisabled={data.length === 20} color={theme ? "white" : "black"} colorScheme='none' onClick={() => { dispatch({ type: 'LIMIT' }) }} bg={theme ? "#008cc9" : "#3DC6EF"}>Load More</Button></Center>


        </Box >
    )
}

export default TourlistBody


