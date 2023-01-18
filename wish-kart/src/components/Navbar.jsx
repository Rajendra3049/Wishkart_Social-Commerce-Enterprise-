
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
  Divider,


} from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, AddIcon, SearchIcon } from '@chakra-ui/icons';
import "../index.css"
 import logo from "../images/wish.png";
import MegaMenu from "../components/MegaMenu";




export default function Navbar() {

  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
   <Box  top={0}  w={"100%"} h={"55px"}  zIndex={1} position={"fixed"} border={"1px solid gray"}>
      <Box  width={["1300px","1300px","100%"]}  justifyContent={"center"} h={["158x"]} bg={"white"} border={"1px solid gray"} position={"relative"}>
        <Flex h={"100px" } alignItems={"center"} w={"100%"}>

        <Image src={logo}  w={["9%","9%" ,"8%"]} h={["99px","99px","100px"]} ml={["20px","20px","20px"]} mt={["-26px","",""]}/>
            

        <Flex>
    
        <Stack spacing={3}  w={["200px","300px","400px"]} ml={["5%","5%","10%"]} >
        <Input placeholder='Try Saree and Kurti or Search by Product Code' width={['80%',"80%",'110%']} h={["25px","30px","45px"]}
        color={"black"} borderWidth="1px" fontSize={["8px","8x","15px"]} p={7}/>
        </Stack>
        </Flex> 
            
        <Box  display={"flex"} textAlign={"center"} gap={10} ml={["","","80px"]}>
        <Text  fontSize={["8px","8x","15px"]} mt={"8px"}>Download App</Text>
        <Flex bg={"black"} h='35px'>
        <Divider orientation='vertical' color={"black"} /> 
        </Flex>
         <Text  fontSize={["8px","8x","15px"]} mt={"8px"}>Admin</Text>
           
      
             </Box>
       
        </Flex>


      </Box>


    <Box top={0} w={"100%"} h={"55px"} mt={"80px"}  bg={"white"} position={"absolute"}>
    <MegaMenu/>
    </Box>
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