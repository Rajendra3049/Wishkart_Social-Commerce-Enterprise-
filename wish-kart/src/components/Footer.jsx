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
  import facebook from"../images/facebook.png";
  import instagram from"../images/instagram.png";
  import yt from"../images/youtube.png";
  import linkedin from"../images/linkedin.png";
  import twitter from"../images/twitter.png";

  
export default function Footer() {
return (
<Box
bg={useColorModeValue('white', 'white')}
color={useColorModeValue('gray.700', 'gray.200')} w={"100%"}
fontSize={["md","lg","xl"]}>
<Container as={Stack} maxW={'9xl'} py={10}>
<SimpleGrid columns={{ base: 1, sm: 1, md:4 , lg: 5 }} spacing={6}>
<Stack width={"400px"} ml={"5px"} >
    <Flex>
<Heading color={"#333333"} fontSize={'5xl'} lineHeight={"24px"} ml={["4px","0px","15px"]} mt={"20px"}>Shop Non-Stop on Meesho</Heading>
</Flex>
<Stack mt={"40px"} paddingLeft={["4px","0px","15px"]}>
<Text color={"#333333"} fontWeight={600} fontSize={["14px","14px","16px"]} mt={"40px"} >Trusted by more than 1 Crore Indians</Text>
<Text color={"#333333"} fontWeight={600} fontSize={["14px","14px","16px"]} mt={2} >Cash on Delivery | Free Delivery</Text>
</Stack>
 <Box>
  <Flex ml={["-14px","0px","5px"]}>
 <Image src={google}  w={["140px","145px","200px"]} mt={'10px'} h={"80px"}/>
<Image src={Appstore}  w={["140px","145px","200px"]} h={"88px"} mt={"0px"} />
</Flex>
 </Box>
</Stack>
<Stack align={'flex-start'} ml={["20px","20px","170px"]} w={"60%"}>
<Text color={"#8d8d8d"} fontWeight={600} fontSize={["14px","14px","16px"]} mt={["0px","0px","20px"]}>Careers</Text>
<Text color={"#8d8d8d"}  fontWeight={600} fontSize={["14px","14px","16px"]}  mt={["0px","0px","20px"]}>Become a supplier</Text>
<Text color={"#8d8d8d"}  fontWeight={600} fontSize={["14px","14px","16px"]}   mt={["0px","0px","20px"]}>Hall of Fame</Text>
</Stack>
<Stack align={'flex-start'}  ml={["220px","240px","80px"]}  w={"60%"} mt={["-82px","-80px","0px"]}>
<Text color={"#8d8d8d"}  fontWeight={600} fontSize={["14px","14px","16px"]}  mt={["0px","0px","20px"]}>Legal and Policies</Text>
 <Text color={"#8d8d8d"}  fontWeight={600} fontSize={["14px","14px","16px"]}  mt={["0px","0px","20px"]}>Meesho Tech Blog</Text>
<Text color={"#8d8d8d"}  fontWeight={600} fontSize={["14px","14px","16px"]}  mt={["0px","0px","20px"]}>Notices and Returns</Text>
</Stack>
<Stack align={'flex-start'} mt={["0px","0px","15px"]}>
<Heading color={"#333333"} fontSize={"20px"} lineHeight={"24px"}  ml={["10px","20px","25px"]}>Reach out to us</Heading>
<Box>
<Flex  ml={["10px","15px","25px"]} >
<Image src={facebook} m={2}/>
<Image src={instagram}  m={2}/>
<Image src={yt}  m={2}/>
<Image src={linkedin}  m={2}/>
<Image src={twitter}  m={2}/>


</Flex>

</Box>
<Flex>

 </Flex>
</Stack>
       
<Stack align={'flex-start'} ml={["10px","20px","-40px"]} w={["350px","550px","300px"]}  mt={["0px","0px","15px"]}>
<Heading color={"#333333"} fontSize={"20px"} >Contact Us</Heading>
<Text color={"gray"} fontSize={["12px","12px","14px"]} textAlign={'left'} >Fashnear Technologies Private Limited,
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
