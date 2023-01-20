
import { Box, Grid, Text, Stack, Image, Flex } from "@chakra-ui/react";
import { data } from "../Pages/data";
import { AiFillStar } from "react-icons/ai";
// import logo from "../images/wish.png";

export default function HomeProducts() {
  return (
    <Box>
      <Grid templateColumns={"repeat(3,1fr)"} gap={10}>
        {data.map((el) => (
          <Box
            role={"group"}
            p={6}
            h={390}
            maxW={"330px"}
            w={"98%"}
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            }
            rounded={"lg"}
            pos={"relative"}
          >
            <Box
              rounded={"lg"}
              mt={"-15px"}
              height={"235px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,

                filter: "blur(15px)",
                //  zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={el.image}
              />
            </Box>
            <Stack pt={10} align={"center"} >
              <Text color={"gray"} fontSize={"12px"} textAlign={"center"}>
                {el.mkt}
              </Text>
              <Text
                color={"#333333"}
                fontSize={"13.5px"}
                textAlign={"center"}
                fontWeight={700}
              >
                {el.name}
              </Text>
       
                  
            <Flex alignItems={'center'} justifyContent={"space-between"} p={"4px"}>
          
                      <Text
                  fontSize={"3xl"}
                  fontFamily={"body"}
                  fontWeight={500}
                  w={"80px"} 
                  justifyContent={"space-evenly"}
                  color={"#333333"}
                >
                  {el.price}
                </Text>
                <Text fontWeight={500} fontSize={"xl"} color={"gray"} mr={'-60px'}>
                  onwards
                </Text>
              <Flex>
                <div style={{width:"48px",marginLeft:"90px"}}>
                    <span color={"black"} >
                      {el.discount}
                    </span>
                    </div>
                    </Flex>

            </Flex>
            </Stack>
          
            <Flex alignItems={'center'} justifyContent={"space-between"} p={"5px"} mt={'1px'}>
              <Flex w={"55px"} h={"30px"}   fontSize={"14px"} alignItems={'center'}  color={"white"} bg={"#038d63"}
                borderRadius={"10%"} justifyContent={"space-around"}>{el.rating2}<AiFillStar
                      color={"white"}
                  
                      
                    /></Flex>
              <Box>{el.rating}</Box>
              <Flex mr={"8px"} color={"#f43397"} fontWeight={600}>
                    <span color={"black"} >
                      Trusted
                    </span></Flex>

            </Flex>

          </Box>
        ))}
      </Grid>
    </Box>
  );
}
