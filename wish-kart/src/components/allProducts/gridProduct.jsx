import { Box, Card, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GridProduct = ({ props }) => {
  const navigate = useNavigate();

  const handleproductpass = (id) => {
    console.log(id);
    let path = `/SingleProduct/${id}`;
    navigate(path);
  };

  let backgrnd =
    props.rating >= 4.5
      ? "#038d63"
      : props.rating >= 4
      ? "green"
      : props.rating >= 3
      ? "#1fd655"
      : props.rating >= 2
      ? "orange"
      : "red";

  return (
    <Link to={`/product/${props.id}`}>
      <Card backgroundColor={"whitesmoke"}>
        <Box
          onClick={() => handleproductpass(props.id)}
          margin="0px 15px 0px 15px">
          <Image src={props.images[0]} width="100%" height="300px" />
        </Box>
        <Box margin={10} border="0px solid red">
          <Heading
            className="Productfont"
            style={{
              fontSize: "large",
            }}
            fontWeight={"medium"}
            color={"gray"}>
            {props.title}
          </Heading>
          <Flex>
            <Heading
              className="Productfont"
              style={{
                fontSize: "large",
              }}
              color={"blackAlpha.800"}
              mt={"5px"}>
              ₹ {props.discounted_price}
            </Heading>
            <Heading
              textDecoration={"line-through"}
              fontWeight={"medium"}
              ml={"8px"}
              mt={"6px"}
              style={{
                fontSize: "large",
              }}
              color={"grey"}>
              ₹{props.original_price}
            </Heading>
          </Flex>

          {/* <Flex
          border={"1px solid grey"}
          mt={"5px"}
          borderRadius="50%"
          width={"75px"}
          height={"40px"}>
          <Box
            width="30px"
            mt={"7px"}
            ml={"10px"}
            color={"gray"}
            fontSize={"3xl"}
            fontWeight={"bold"}>
            {props.rating}
          </Box>
          <Box width="30%">
            <Image
              mt={"9px"}
              ml={"3px"}
              src={
                props.rating >= 4.5
                  ? star.green
                  : props.rating >= 4
                  ? star.lightGreen
                  : props.rating >= 3
                  ? star.orange
                  : props.rating >= 2
                  ? star.yellow
                  : star.red
              }
            />
          </Box>
        </Flex> */}
          <Flex justifyContent={"space-between"} mt="5px">
            <Heading
              style={{
                backgroundColor: backgrnd,
                padding: "5px 10px",
                color: "white",
                fontSize: "large",
                borderRadius: "20px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "70px",
              }}>
              {props.rating}{" "}
              <FaStar fill="white" color="white" backgroundColor="white" />
              {/* <StarIcon /> */}
              {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
            </Heading>
            <Text
              style={{
                fontSize: "medium",
              }}>
              1541 Reviews
            </Text>
          </Flex>
        </Box>
      </Card>
    </Link>
  );
};

export default GridProduct;
