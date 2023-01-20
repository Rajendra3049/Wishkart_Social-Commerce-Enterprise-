import { Box, Grid, Heading, Text, Stack, Image } from "@chakra-ui/react";
import { data } from "../Pages/data";

export default function HomeProducts() {
  return (
    <Box>
      <Grid templateColumns={"repeat(3,1fr)"}>
        {data.map((el) => (
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"70%"}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              height={"230px"}
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
            <Stack pt={10} align={"center"}>
              <Text color={"black"} fontSize={"sm"} textTransform={"uppercase"}>
                {el.name}
              </Text>
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                Nice Chair, pink
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={800} fontSize={"xl"}>
                  {el.price}
                </Text>
                <Text textDecoration={"line-through"} color={"gray.600"}>
                  $199
                </Text>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
