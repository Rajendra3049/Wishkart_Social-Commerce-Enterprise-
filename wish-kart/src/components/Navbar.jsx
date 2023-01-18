
import {
  Box,
  Flex,

  // Link,

  Image,

  // useDisclosure,
  Input,
  Text,
  // useColorModeValue,
  Stack,


} from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, AddIcon, SearchIcon } from '@chakra-ui/icons';
import "../index.css"
 import logo from "../images/wish.png";
import MegaMenu from "../components/MegaMenu";
import {RxDividerVertical} from "react-icons/rx"

// const Links = ['Download App', 'Admin'];

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Navbar() {

  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
   
      <Box  width={["1300px","1300px","100%"]}  justifyContent={"center"} h={["158x"]} bg={"white"} border={"1px solid gray"}>
        <Flex h={"100px" } alignItems={"center"} w={"100%"}>
    
{/* 
        <Box id="nav1" border={"1px solid red"} w={["160px","120px","135px"]} h={["74px","74px","91px"]}  */}
         {/* ml={["70px","70px","20px"]} display={"flex"}>  */}
        <Image src={logo}  w={["15%","15%" ,"12%"]} h={["150px","150px","150px"]} mt={"10px"} />
            
        {/* </Box> */}
        <Flex>
    
        <Stack spacing={3}  w={["200px","300px","600px"]} ml={["10%","10%","10%"]} mt={"20px"}>
        <Input placeholder='Try Saree and Kurti or Search by Product Code' width={['100%',"100%",'80%']}
        color={"black"} borderWidth="2px" fontSize={["10px","10px","md"]}/>
        </Stack>
        </Flex> 
            
        <Box  display={"flex"} textAlign={"center"} gap={10} ml={80}>
        <Text>Download App</Text>
        <RxDividerVertical color='gray' fontWeight={700} h={"90px"}/>  <Text>Admin</Text>
           

             </Box>
       
        </Flex>


      </Box>


    <Box  top={0}  w={"100%"} h={"55px"} mt={"115px"} zIndex={1} position={"fixed"} bg={"white"}>
    <MegaMenu/>
    </Box>
    </>
  );
}


































// import React from 'react'
// import {Box , Input , Image , Flex} from"@chakra-ui/react";
// import "../index.css"
// import logo from "../images/wish.png";


// const Navbar = () => {
    
//   return (
//     <div>
//   <Box border={"1px solid red"} w={"100%"} h={"133px"}>
//   <Box id="nav1">
// <Flex>
//   <Box ml={"40px"}>
//  
//   </Box>

//   <Box mt={"28px"} >
//   <Input placeholder='small size' size='sm' width={300} border={"1px solid black"}/>
//   </Box>
//   </Flex>
//   </Box>

// {/* 
// //navbar */}


//   </Box>


//     </div>
//   )
// }

// export default Navbar