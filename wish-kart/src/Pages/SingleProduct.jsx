import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { SingleCard } from "../components/SingleCard";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../redux/user/user.action";
import { Navigate } from "react-router-dom";
import { AddToCartNotify } from "../components/notify";
import Loader from "../components/Loader";
import { Box, Flex, Text } from "@chakra-ui/react";

const SingleProduct = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = useState([]);
  const [productDetails, setproductDetails] = useState({});
  const [present, setPresent] = React.useState(false);

  // redux start
  let { user, isAuth } = useSelector((store) => store.UserManager);
  let dispatch = useDispatch();
  // redux end

  function HandleAddToCart() {
    console.log("Handle Add to Cart");
    let newCartData = user.cart;
    newCartData.push(productDetails);
    let userId = user.id;
    dispatch(AddToCart(newCartData, userId));
  }

  const { id } = useParams();

  const getData = async () => {
    let res = await fetch("https://meesho-backend-3037.onrender.com/products");
    let d = await res.json();
    setData(d);
  };

  const getProductDetails = () => {
    axios
      .get("https://meesho-backend-3037.onrender.com/products")
      .then(({ data }) => {
        let product = data.filter((elem) => elem.id == id)[0];

        setproductDetails(product);

        setLoading(true);
      })
      .catch((err) => alert("Someting went wrong"));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getProductDetails();
    getData();
  }, [user]);

  if (isAuth == false) {
    console.log("user not authenticated");
    return <Navigate to="/signup" />;
  }
  if (loading) {
    return (
      <>
        {" "}
        <div
          key={productDetails.id}
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
              <Box
                width={["25%", "25%", "25%"]}
                justifyContent={"space-around"}>
                {productDetails.images.map((el, i) => {
                  return (
                    <img
                      key={i}
                      style={{
                        width: "50%",
                        border: "1px solid red",
                        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                        margin: "auto",
                        // #fde9f2
                        marginBottom: "10px",
                        marginTop: "10px",
                      }}
                      src={el}
                      alt=""
                    />
                  );
                })}
              </Box>
              {/* Middle Div */}
              <Box
                width={["80%", "80%", "70%"]}
                padding={["10px", "10px", "10px"]}>
                {/* mid top box */}
                <Box>
                  <div
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
                      src={productDetails.images[0]}
                      alt=""
                    />
                  </div>
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
                      <AddToCartNotify present={present} />
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
                    {productDetails &&
                      productDetails.images.map((image, i) => (
                        <>
                          <img
                            width={"20%"}
                            key={i}
                            style={{
                              padding: "2%",
                              border: "1px solid #fde9f2",
                              boxShadow:
                                "rgba(1, 0.15, 0.15, 0.15) 1.95px 1.95px 2.6px",
                            }}
                            src={image}
                            alt=""
                          />
                        </>
                      ))}
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
                  {productDetails.title}
                </Text>
                <Text
                  fontSize={["25px", "25px", "35px"]}
                  style={{
                    fontWeight: "bold",
                    marginTop: "1%",
                  }}>
                  ₹{productDetails.discounted_price}
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
                    {productDetails.rating}
                    <p style={{ color: "#038d63" }}>-</p>
                    <FaStar />
                  </Text>

                  <Box
                    style={{
                      color: "grey",
                      fontSize: "large",
                    }}>
                    10647 Ratings. <br />
                    1651 Reviews
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
                  //   border: "1px solid black",
                  width: "95%",
                  margin: "auto",
                  padding: "2%",
                  marginTop: "5%",
                  boxShadow: "rgba(1, 0.15, 0.15, 0.15) 1.95px 1.95px 2.6px",
                  marginBottom: "5px",
                }}>
                <p
                  style={{
                    fontSize: "25px",
                    marginTop: "1%",
                  }}>
                  Select Size
                </p>
                {productDetails.sizes.map((size, i) => (
                  <>
                    <button
                      key={i}
                      style={{
                        borderRadius: "20px",
                        marginTop: "3%",
                        fontSize: "20px",
                        padding: "5px 10px",
                        color: "#f43397",
                        backgroundColor: "#fde9f2",
                        border: "1px solid #f43397",
                        margin: "5px",
                      }}>
                      {size}
                    </button>
                  </>
                ))}
              </div>
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
                  Name : {productDetails.title}
                  <br /> Free Size <br /> Material :{" "}
                  {productDetails.details.Pattern} <br /> Type :{" "}
                  {productDetails.details.Fabric}
                  <br /> Pattern : {productDetails.details.Pattern} <br /> Size
                  : L <br /> Net Quantity (N) : 1 <br />
                  {productDetails.details.Description}
                  <br /> Country of Origin : India
                </p>
              </div>
            </Box>
          </Box>

          {/* Suggestions <Div></Div> */}
          <Text
            fontSize={["20px", "25px", "25px"]}
            fontWeight="600"
            margin={"4%"}>
            Suggested Products
          </Text>
          <Box
            display={"grid"}
            gridTemplateColumns={[
              "repeat(1,1fr)",
              "repeat(2,1fr)",
              "repeat(5,1fr)",
            ]}
            gap={"20px"}>
            {data.map((p, i) => {
              if (i < 10) {
                return <SingleCard key={i} props={p} />;
              }
            })}
          </Box>
        </div>
      </>
    );
  } else {
    return <Loader />;
  }
};

export default SingleProduct;
