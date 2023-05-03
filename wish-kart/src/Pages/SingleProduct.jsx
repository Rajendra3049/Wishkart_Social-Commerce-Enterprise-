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
import { useAuth0 } from "@auth0/auth0-react";

const SingleProduct = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = useState([]);
  const [productDetails, setproductDetails] = useState({});
  const [mainImage, setMainImage] = React.useState("");
  const { id, category } = useParams();
  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  let dispatch = useDispatch();

  function HandleAddToCart() {
    let userId = user.sub;
    let productId = productDetails._id;
    dispatch(AddToCart(userId, productId));
  }

  const getData = async () => {
    await axios
      .get(
        `https://zany-erin-alligator-boot.cyclic.app/products?category=${category}`
      )
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => alert("Someting went wrong"));
  };

  const getProductDetails = async () => {
    await axios
      .get(`https://zany-erin-alligator-boot.cyclic.app/products/${id}`)
      .then((res) => {
        setproductDetails(res.data);
        setMainImage(res.data.images[0]);
        setLoading(true);
      })
      .catch((err) => alert("Someting went wrong"));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getProductDetails().then(getData());
  }, [user, id, category]);

  if (isAuthenticated === false) {
    window.alert("Please login");
    loginWithRedirect();
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
                {productDetails &&
                  productDetails.images.map((el, i) => {
                    return (
                      <img
                        onClick={() => {
                          setMainImage(el);
                        }}
                        key={i}
                        style={{
                          width: "60%",
                          border: "1px solid  #fde9f2",
                          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                          margin: "auto",
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
                      src={mainImage}
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
                    {productDetails &&
                      productDetails.images.map((image, i) => (
                        <>
                          <img
                            onClick={() => {
                              setMainImage(image);
                            }}
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
              if (i < 11 && p._id !== productDetails._id) {
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
