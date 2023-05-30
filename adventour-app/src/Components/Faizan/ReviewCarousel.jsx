import { Avatar, Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function ReviewCarousel({heading,description,avatar,user,profession,theme}) {

    return (
        <Box>
            <Card w='25rem' mx='1rem' borderRadius='1.2rem' bg={theme ? '#101214':'white'} _hover={theme ? { bg: "#191b1d" }: { bg: 'gray.200' }}>
            <CardHeader>
              <Heading color={theme ?'white': 'black'} size='md'>{heading}</Heading>
            </CardHeader>
            <CardBody >
              <Text color='gray'>{description}</Text>
            </CardBody>
            <CardFooter>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name='Segun Adebayo' src={avatar} />
                <Box>
                  <Heading size='sm' color={theme ?'white': 'black'}>{user}</Heading>
                  <Text color='gray'>{profession}</Text>
                </Box>
              </Flex>
            </CardFooter>
          </Card>
        </Box>
    );
}

export default ReviewCarousel;