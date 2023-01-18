import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Image,
    useColorModeValue,
    Heading,
  } from '@chakra-ui/react';
  import google from "../images/google.png";
  import Appstore from "../images/Appstore.png"


  
export default function Footer() {
return (
<Box
bg={useColorModeValue('white', 'white')}
color={useColorModeValue('gray.700', 'gray.200')} w={"100%"}
fontSize={["md","lg","xl"]}>
<Container as={Stack} maxW={'9xl'} py={10}>
<SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={6}>
<Stack width={"400px"} >
    <Flex>
<Heading color={"#333333"} fontSize={"20px"} lineHeight={"24px"}>Shop Non-Stop on Meesho</Heading>
</Flex>
<Text href={'#'}>Trusted by more than 1 Crore Indians</Text>
<Text>Cash on Delivery | Free Delivery</Text>
 <Box>
    <Flex>
 <Image src={google}  w={"200px"} ml={"20px"} mt={'10px'} h={"82px"}/>
<Image src={Appstore} w={"200px"} mt={"-2px"} />
</Flex>
 </Box>
</Stack>
<Stack align={'flex-start'}>
<Text>Careers</Text>
<Text>Become a supplier</Text>
<Text>Hall of Fame</Text>
</Stack>
<Stack align={'flex-start'}>
<Text>Legal and Policies</Text>
 <Text>Meesho Tech Blog</Text>
<Text>Notices and Returns</Text>
</Stack>
<Stack align={'flex-start'}>
<Heading>Reach out to us</Heading>
<Flex>

 </Flex>
</Stack>
       
<Stack align={'flex-start'}>
<Heading>Contact Us</Heading>
<Text color={"gray"}>Fashnear Technologies Private Limited,
CIN: U74900KA2015PTC082263
06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
E-mail address: query@meesho.com
© 2015-2022 Meesho.com</Text>
</Stack>
</SimpleGrid>
</Container>
     

      
</Box>
    );
  }
//   <Box>
// <Heading>Shop Non-Stop on Meesho</Heading>
// <Text>Trusted by more than 1 Crore Indians</Text>
// <Text>Cash on Delivery | Free Delivery</Text>
// </Box>
