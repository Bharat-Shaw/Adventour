import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Checkbox,
    Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex,
    RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Select, VStack, useDisclosure
} from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { RiFilter3Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function SmallScreenSortingDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { location } = useParams();
    const dispatch = useDispatch();
    const limit=useSelector((state)=>state.limit);
    const theme = useSelector(state => !state.theme);
    // https://kind-erin-greyhound-hat.cyclic.app/api/Asia?_sort=price_per_day&_order=asc

    function sortfunc(value, sortval) {
        axios.get(`https://kind-erin-greyhound-hat.cyclic.app/api/${location}?_limit=${limit}&_sort=${value}&_order=${sortval}`)
            .then((res) => {
                console.log(res.data)
                dispatch({ type: 'LIST', payload: res.data })
            })
    }
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
                                <Select bg={theme ? "white" : "#191b1d"} size='lg' onChange={(e) => {
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
                                    <option value='rating' style={{ background: !theme ? "#191b1d" : "white", fontSize: "15px" }}>Popularity: Most popular first</option>
                                    <option value='str_priceL' style={{ background: !theme ? "#191b1d" : "white", fontSize: "15px" }}>Total Price: Lowest first</option>
                                    <option value='str_priceH' style={{ background: !theme ? "#191b1d" : "white", fontSize: "15px" }}>Total Price: Higest first</option>
                                    <option value='price_per_dayL' style={{ background: !theme ? "#191b1d" : "white", fontSize: "15px" }}>Price/Day: Lowest first</option>
                                    <option value='price_per_dayH' style={{ background: !theme ? "#191b1d" : "white", fontSize: "15px" }}>Price/Day: Higest first</option>
                                    <option value='tour_lengthS' style={{ background: !theme ? "#191b1d" : "white", fontSize: "15px" }}>Duration: Sortest first</option>
                                    <option value='tour_lengthL' style={{ background: !theme ? "#191b1d" : "white", fontSize: "15px" }}>Duration: Longest first</option>
                                    <option value='reviews' style={{ background: !theme ? "#191b1d" : "white", fontSize: "15px" }}>Reviews: Most reviewed</option>
                                    <option value='save_price' style={{ background: !theme ? "#191b1d" : "white", fontSize: "15px" }}>Biggest Deals: Higest savings</option>
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
                                                <Checkbox size='lg' value={'india'}>India</Checkbox>
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

export default SmallScreenSortingDrawer