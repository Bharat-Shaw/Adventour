import React from 'react';
import { Box, Flex, Text, Heading, VStack, Image } from '@chakra-ui/react'
import Footer from './Footer';
import logo from './Images/logo.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Services(props) {

    const theme = useSelector(state => state.theme);

    return (
        <Box textAlign='left' color={theme ? 'white' : 'black'} bg={theme ? '#101214' : 'gray.100'}>

            <Box p={{ base: '0 1.5rem', md: '0 3rem', lg: '0 4.5rem' }} color={theme ? 'darkgray' : 'blackAlpha.800'} bg={theme ? '#101214' : 'white'} justify='space-between'>
                <Flex p='1.2rem 0' align='center'>
                    <Flex cursor='pointer'>
                        
                        <Link to={'/'}><Flex alignItems={"center"}>
                            <Image src={logo} w='2.4rem' />
                            <Heading fontSize="1.2rem" ml='1rem' color={theme ? 'white' : 'blackAlpha.800'}>Adventour.</Heading>
                        </Flex>
                        </Link>
                    </Flex>
                </Flex>
            </Box>

            <Flex bg={theme ? '#101214' : 'white'} flexDirection='column' w={{base:'85%',md:'70%',lg:'60%'}} m='5rem auto' p='1rem' gap={5} boxShadow='0 0 5px gray'>
                <Heading textAlign='left' fontSize='1.5rem'>Terms of Service</Heading>
                <Text>Adventour is a hotel search and offers users information about different types of accommodation (such as hotels, holiday homes, etc.), travel areas and services associated with travel.</Text>

                <Heading fontSize='1.5rem'>1. Scope of Service</Heading>
                <Text>1.1. These terms and conditions are subject to occasional changes and apply to all our services that are directly or indirectly provided (i.e. via third parties) via the internet, on mobile devices, by email or by telephone.</Text>
                <Text>1.2. By using our website, you confirm that you have read, understood and agree to these terms and conditions, as well as the privacy policy, including the use of cookies.</Text>

                <Heading fontSize='1.5rem'>2. Services and Contract</Heading>
                <Text>2.1. On the Adventour website, you have the ability to compare third party services via the Adventour system.</Text>
                <Text>2.2. In addition, for some hotels, users have the possibility of booking the selected hotel through a direct connection to the hotel booking sites (third parties) (‘Adventour Express Booking’). As a result, the booking will be made directly on the hotel booking site and not on the Adventour sites. In such cases, Adventour is not the travel operator or the contractual party for the user, but only an agent providing the technical connection to the hotel booking site of a third party. By making a booking on the website of the third party, users agree to be bound by the terms and conditions of that booking site. These terms and conditions can be viewed on the website of the third party. Once a booking is made on the website of a third party, a contract is concluded between the booking site and the user, and therefore no contract is concluded between the user and Adventour. Adventour is no contractual party to the hotel booking and all and any claims of the user under the hotel reservation are to be asserted against the third party (the booking site) and not against Adventour.</Text>
                <Text>2.3. This agreement is not affected by any other agreements between the hotel and users.</Text>

                <Heading fontSize='1.5rem'>3. Adventour Community and Member Area</Heading>
                <Text>3.1. Users have the option of joining the Adventour Community (hereafter “Community”) and/ or creating a member account within the Adventour Member Area. Users who register for the Community can publish self-generated content, as well as actively participate in the platform’s development via the administrative functions. Unregistered users may read the content on Adventour for free.</Text>
                <Text>3.2. Using the Adventour Member Area users have the option to administer and store their searches. In order to create the account users are being asked to provide personal information. Despite from the Users name, no personal information is made visible. For further information please check our privacy policy. By deleting the account any and all of the User’s data will be permanently removed.</Text>
                <Text>3.3. A user cannot register multiple times. The user is responsible for the accuracy and completeness of their personal information.</Text>
                <Text>3.4. The user is responsible for the confidentiality of their user account information, in particular their password. They are also responsible for the use of their account with regard to Adventour and third parties. The user should not divulge this data to the use by third parties.</Text>
                <Text>3.5. In the event of unauthorised use of the Adventour services using the wrong username and password, the registered user must notify Adventour immediately.</Text>

                <Heading fontSize='1.5rem'>4. Privacy, Email Advertisements</Heading>
                <Text>4.1. The protection of personal data provided by the user is of the highest priority for Adventour. As such, Adventour makes every effort to ensure compliance with data protection. For more information, please read our privacy policy.</Text>
                <Text>4.2. Adventour collects, processes and uses your personal data (hereafter “data”) only if we have obtained your consent or a statutory provision allows for the collection, processing or use of your data.</Text>
                <Text>4.3. Adventour will only raise, process and use data necessary for the provision of the services rendered by Adventour, for the use and operation of the websites / apps and the services offered. For the use of the ‘Adventour Express Booking’ facility, the user expressly agrees to the processing of his/her credit card data by Adventour N.V., which may relay these to the hotel booking sites for completing the hotel reservation.</Text>
                <Text>4.4. If the user has agreed to receive information about Adventour during registration for the Community or at another time using Adventour’s services, the user will receive periodic product information. The consent may be revoked at any time by written communication or by email. The consent to receive emails follows after the confirmation email from Adventour is sent. By clicking on the link in the email, you will be registered to receive newsletters.</Text>

                <Heading fontSize='1.5rem'>5. User Obligations</Heading>
                <Text>5.1. The user is responsible for the acquisition of rights to the content (text, photos, reviews, links, etc.) they upload to Adventour. They ensure that they have all the rights in respect to the content they publish on the Adventour platform and thereby do not violate the rights of any third parties.</Text>
                <Text>5.2. The user guarantees not to use the Adventour services to create content that:
                    is advertising disguised as reviews,
                    does not have specific content for a reviewed item,
                    is not objective or intentionally untrue,
                    immoral, pornographic or in any other way offensive,
                    infringes upon the rights of third parties, in particular copyright,
                    violates applicable laws in any way or constitutes a criminal offense,
                    contains viruses or other computer programmes that may damage software or hardware or that may affect the use of computers,
                    is a survey or chain letter,
                    is aimed at collecting or using personal data from other users, especially for commercial purposes.</Text>

                <Text>5.3. The user guarantees not to use programmes or functions to generate automated page impressions or content on Adventour.</Text>
                <Text>5.4. If there is a breach in the terms and conditions, Adventour reserves the right to remove content without declaration of reason, to withhold payments earned in the Adventour Community and to permanently ban members from Adventour. The right to prosecution of criminal acts remains unaffected.</Text>

                <Heading fontSize='1.5rem'>6. Termination</Heading>
                <Text>6.1. Adventour reserves the right to terminate a user’s access and to delete their registration within a period of one week after receipt of relevant information via email about improper use of the website. The user may also terminate their own access and registration within the same period. The right to immediate termination for good cause remains unaffected.</Text>

                <Heading fontSize='1.5rem'>7. Liability</Heading>
                <Text>7.1. Adventour is not liable for the accuracy, quality, completeness, reliability or credibility of content provided by users and/or booking sites. In particular, there is no advice or information from Adventour regarding the selection of accommodations.</Text>
                <Text>7.2. All agreements that arise through this service are between the Adventour user and the respective external contracting booking site. In particular, Adventour does not act as organiser or travel agency at any time. The terms and conditions of the respective organiser or travel agency apply exclusively, especially regarding the right to cancel and to withdraw. The contact for the processing of bookings and payments, as well as questions about the contract, is the respective contracting booking site. Adventour remains uninvolved in such contractual arrangements, agreements and claims between the Adventour user and the respective external contracting booking site.</Text>
                <Text>7.3. Adventour does not verify the accuracy of content uploaded by booking sites or the members of the Community. This content is provided by booking sites/Community for publication on our website with reference to the respective hotel. Adventour has no influence on this information (in particular images, comments, reviews, etc.). The publication of user-generated content and reports on Adventour does not reflect the opinion of Adventour, in particular, Adventour does not claim this content as its own.</Text>
                <Text>7.4. In particular, hyper links, advertising banners, information about accommodations, travel destinations or providers and the like are provided by booking sites and Community members and do not represent recommendations or information from Adventour. For technical reasons, no updating of the prices we receive from booking sites are done in real time. Therefore it is possible that the price that appears on the booking site does not correspond to the price specified on the Adventour sites. Adventour does not guarantee the accuracy of information, in particular prices and availability.</Text>
                <Text>7.5. Adventour is not liable for technical malfunctions for which the cause is not within Adventour’s sphere of responsibility or for damages caused by force majeure. Adventour does not guarantee uninterrupted availability of data and may perform technical maintenance during a freely chosen time period.</Text>

                <Heading fontSize='1.5rem'>8. Changes to the Terms and Conditions</Heading>
                <Text>The current terms and conditions when using Adventour apply. Registered users receive notifications about changes by email. Users may download and print the current terms and conditions on their own computer system.</Text>

                <Heading fontSize='1.5rem'>9. Applicable Law and Place of Jurisdiction</Heading>
                <Text>The laws of the Federal Republic of Germany apply. For business persons or individuals that do not have general jurisdiction in Germany, Düsseldorf applies as the place of jurisdiction. Otherwise the legal jurisdiction applies.</Text>

                <Heading fontSize='1.5rem'>10. Website design</Heading>
                <Text>We use a test method to improve website design. An original version of our website is tested against a modified version to find out which is more effective.</Text>
                <Text>When you visit our website, technical information is evaluated based on a pixel and a tracking ID. The evaluation is not personal but group related. The legal basis for this is our legitimate interest in the optimization of our website, Art. 6 para. 1 f DSGVO.</Text>
                <Text>The German translation takes precedence.</Text>

            </Flex>

            <Footer />
        </Box>
    );
}

export default Services;