import { Box, Card, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GridProduct = ({ props }) => {
  const navigate = useNavigate();

  const handleproductpass = (id) => {
    let path = `/SingleProduct/${props.category}/${id}`;
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
    <Link to={`/product/${props._id}`} style={{ textDecoration: "none" }}>
      <Card backgroundColor={"whitesmoke"}>
        <Box
          onClick={() => handleproductpass(props._id)}
          margin="0px 15px 0px 15px">
          <Image src={props.images[0]} width="100%" height="300px" />
        </Box>
        <Box margin={10} border="0px solid red">
          <Heading
            style={{
              fontSize: "large",
            }}
            fontWeight={"medium"}
            color={"gray"}>
            {props.title}
          </Heading>
          <Flex>
            <Heading
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
              {props.rating} <FaStar fill="white" color="white" />
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
