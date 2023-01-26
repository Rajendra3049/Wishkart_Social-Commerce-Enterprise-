import React from "react";

import { FaShoppingCart, FaStar } from "react-icons/fa";

import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { AddToCartNotify } from "../components/notify";
// import { AddToCart } from "../redux/user/user.action";
import { Box, Flex, Text } from "@chakra-ui/react";

const HomeSingleProduct = () => {
  const props = JSON.parse(localStorage.getItem("props"));
  //   const [mainImage, setMainImage] = React.useState(props.image);

  // console.log("mainImage", mainImage);
  // redux start
  let { isAuth } = useSelector((store) => store.UserManager);
  //   let dispatch = useDispatch();
  // redux end
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  function HandleAddToCart() {
    // console.log("Handle Add to Cart");
    // let newCartData = user.cart;
    // newCartData.push(props);
    // let userId = user.id;
    // dispatch(AddToCart(newCartData, userId));
  }

  if (isAuth === false) {
    console.log("user not authenticated");
    return <Navigate to="/signup" />;
  }

  return (
    <>
      {" "}
      <div
        key={props.id}
        style={{
          padding: "3%",
          marginTop: "8%",
        }}>
        {/* upper main Container */}

        <Box
          w={"100%"}
          display={["grid", "grid", "flex"]}
          marginTop={["20px", "20px", "20px"]}
          padding={"10px"}>
          {/* 1st left side box  */}
          <Flex w={["100%", "100%", "60%"]}>
            <Box width={["25%", "25%", "25%"]} justifyContent={"space-around"}>
              <img
                style={{
                  width: "60%",
                  border: "1px solid  #fde9f2",
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  margin: "auto",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
                src={props.image}
                alt=""
              />
            </Box>
            {/* Middle Div */}
            <Box
              width={["80%", "80%", "70%"]}
              padding={["10px", "10px", "10px"]}>
              {/* mid top box */}
              <Box>
                <Box
                  minH={["300px", "300px", "300px"]}
                  style={{
                    margin: "auto",
                  }}>
                  <img
                    style={{
                      margin: "auto",
                      width: "80%",
                      boxShadow:
                        "rgba(1, 0.15, 0.15, 0.15) 1.95px 1.95px 2.6px",
                    }}
                    src={props.image}
                    alt=""
                  />
                </Box>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "80%",
                    margin: "auto",
                    marginTop: "7%",
                  }}>
                  <button
                    style={{
                      padding: "2% 8%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "20px",
                      border: "1px solid black",
                      fontWeight: "bold",
                      borderRadius: "7px",
                      width: "90%",
                    }}
                    onClick={HandleAddToCart}>
                    <FaShoppingCart />
                    <p
                      style={{
                        color: "white",
                      }}></p>{" "}
                    <AddToCartNotify />
                  </button>
                </div>
              </Box>
              {/* mid bottom box */}
              <Box
                width={["80%", "80%", "70%"]}
                padding={["10px", "10px", "10px"]}
                mt={["10px", "10px", "10px"]}>
                <Text fontSize={["16px", "16px", "20px"]} fontWeight={"600"}>
                  Similar Products
                </Text>
                <Box
                  display="flex"
                  style={{
                    gap: "30px",
                  }}>
                  <img
                    width={"20%"}
                    style={{
                      padding: "2%",
                      border: "1px solid #fde9f2",
                      boxShadow:
                        "rgba(1, 0.15, 0.15, 0.15) 1.95px 1.95px 2.6px",
                    }}
                    src={props.image}
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
          </Flex>
          {/* Last Div / Left Div */}
          <Box w={["100%", "100%", "40%"]}>
            <div
              style={{
                border: " ",
                width: "95%",
                margin: "auto",
                padding: "2%",
                boxShadow: "rgba(1, 0.15, 0.15, 0.15) 1.95px 1.95px 2.6px",
                marginBottom: "2%",
              }}>
              <Text
                fontSize={["20px", "20px", "25px"]}
                style={{
                  fontWeight: "bold",
                  color: "grey",
                  marginTop: "1%",
                }}>
                {props.name}
              </Text>
              <Text
                fontSize={["25px", "25px", "35px"]}
                style={{
                  fontWeight: "bold",
                  marginTop: "1%",
                }}>
                {props.aprice}
              </Text>
              <Flex
                gap={["40px", "30px", "30px"]}
                style={{
                  marginTop: "2%",
                }}>
                <Text
                  fontSize={["14px", "20px", "20px"]}
                  padding={["1% 3%", "1% 3%", "1% 3%"]}
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "20px",
                    backgroundColor: "#038d63",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "10px",
                    justifyContent: "space-evenly",
                  }}>
                  {props.rating2}
                  <p style={{ color: "#038d63" }}>-</p>
                  <FaStar />
                </Text>

                <Box
                  style={{
                    color: "grey",
                    fontSize: "large",
                  }}>
                  10647 Ratings. <br />
                  {props.rating}
                </Box>
              </Flex>
              <p
                style={{
                  color: "grey",
                  marginTop: "2%",
                  fontSize: "large",
                }}>
                Free Delivery
              </p>
            </div>

            {/* sizes append */}

            <div
              style={{
                border: " ",
                width: "95%",
                margin: "auto",
                padding: "2%",
                boxShadow: "rgba(1, 0.15, 0.15, 0.15) 1.95px 1.95px 2.6px",
                marginTop: "5%",
                marginBottom: "3%",
                paddingBottom: "3%",
              }}>
              <Text
                fontSize={["20px", "20px", "25px"]}
                fontWeight="600"
                style={{
                  marginTop: "2%",
                  marginBottom: "3%",
                }}>
                Product Details
              </Text>
              <p
                style={{
                  color: "grey",
                  fontSize: "medium",
                }}>
                Name : {props.name}
                <br /> Free Size <br /> Material : {props.mkt}
                <br /> Size : L <br /> Net Quantity (N) : 1
                <br /> Country of Origin : India
              </p>
            </div>
          </Box>
        </Box>

        {/* Suggestions <Div></Div> */}
      </div>
    </>
  );
};

export default HomeSingleProduct;
