import React, { useState } from 'react'
import { Box, Button, Flex, Grid, HStack, Heading, Icon, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Spacer, Switch, Tag, Text, Textarea, useDisclosure } from '@chakra-ui/react'
import { DownloadIcon, QuestionOutlineIcon } from '@chakra-ui/icons'

function Tourdetail() {
  const [theme, settheme] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bgColor={theme ? '#101214' : 'gray.100'} minH={'100vh'}>
      <Switch onChange={() => { settheme(!theme) }} />
      <Box m={'auto'} pt={'40px'} w={{ base: '95%', md: '76%', lg: '76%' }} color={theme ? 'white' : 'blackAlpha.800'}>
        <Flex flexDirection={{ base: 'column', md: 'column', lg: 'row' }} >
          <Image boxShadow={'md'} mb={{ base: '30px' }} borderRadius={'20px'} width={{ base: '100%', md: '100%', lg: '60%' }} src='https://cdn.tourradar.com/s3/tour/1500x800/108837_5df9d96bc01ed.jpg' />
          <Box textAlign={'left'} pl={'40px'} w={{ base: '90%', md: '70%', lg: '38%' }}>
            <Heading size='xl' pb={'15px'}>Southern Treasures - 8 Days</Heading>
            <Text pb={'10px'}><strong> 8 days • 4.7</strong> ⭐ (98)</Text>
            <Text pb={'15px'}>From <strong>Cusco</strong> to <strong>Juliaca</strong></Text>
            <Box w={'80%'} mb={'15px'}>
              <Tag mr={'10px'} color={'whiteAlpha.900'} bg='#3DC6EF' mb={'15px'}>Explorer</Tag>
              <Tag mr={'10px'} color={'whiteAlpha.900'} bg='#3DC6EF' mb={'15px'}>Family</Tag>
              <Tag mr={'10px'} color={'whiteAlpha.900'} bg='#3DC6EF' mb={'15px'}>Private</Tag>
              <Tag mr={'10px'} color={'whiteAlpha.900'} bg='#3DC6EF' mb={'15px'}>Group</Tag>
              <Tag mr={'10px'} color={'whiteAlpha.900'} bg='#3DC6EF' mb={'15px'}>Historical</Tag>
              <Tag mr={'10px'} color={'whiteAlpha.900'} bg='#3DC6EF' mb={'15px'}>Fully Guided</Tag>
            </Box>
            <Box>
              <SimpleGrid templateColumns='repeat(2, 1fr)' gap={1}>
                <Text><strong> Tour Operator:</strong><br />Inkayni Peru Tours</Text>
                <Text><strong>Max group size:</strong><br />8</Text>
                <Text><strong>Age range:</strong><br />8 to 70</Text>
                <Text><strong>Operated in:</strong><br />English</Text>
              </SimpleGrid >
            </Box>
          </Box>
        </Flex>
        <Box w={{ base: '70%', md: '100%', lg: '60%' }} textAlign={'left'}>
          <Flex flexDirection={{ base: 'column', md: 'row' }} px={'30px'} bgColor={theme ? 'gray.800' : 'white'} color={'black'} mt={'15px'} borderRadius={'20px'} boxShadow={'md'}>
            <Text fontWeight={'700'} color={theme ? 'white' : 'blackAlpha.800'} py={'20px'} px={'10px'}>Plan your adventure:</Text>
            <Spacer />
            <HStack cursor={'pointer'} color={'#3DC6EF'} py={'20px'} px={'10px'}><DownloadIcon color={'#3DC6EF'} />&nbsp;&nbsp;<strong> Download PDF Brochure</strong></HStack>
            <Spacer />
            <HStack onClick={onOpen} cursor={'pointer'} color={'#3DC6EF'} py={'20px'} px={'10px'}><QuestionOutlineIcon color={'#3DC6EF'} />&nbsp;&nbsp;<strong>Ask a Question</strong></HStack>

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
                  <Button mb={'15px'} color={'white'} colorScheme='cyan' mr={3} onClick={onClose}>
                    Submit
                  </Button>
                </ModalFooter>

              </ModalContent>
            </Modal>

          </Flex>
        </Box>

      </Box>
    </Box>
  )
}

export default Tourdetail