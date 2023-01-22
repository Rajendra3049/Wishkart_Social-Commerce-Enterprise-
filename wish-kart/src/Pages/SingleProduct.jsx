import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { SingleCard } from "../components/SingleCard";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../redux/user/user.action";
import { Navigate } from "react-router-dom";
import { AddToCartNotify } from "../components/notify";

const SingleProduct = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = useState([]);
  const [productDetails, setproductDetails] = useState({});

  // redux start
  let { user, isAuth } = useSelector((store) => store.UserManager);
  let dispatch = useDispatch();
  // redux end

  function HandleAddToCart() {
    console.log("Handle Add to Cart");
    console.log("user", user);
    let newCartData = user.cart;
    newCartData.push(productDetails);
    let userId = user.id;
    dispatch(AddToCart(newCartData, userId));
  }

  const { id } = useParams();
  useEffect(() => {
    getProductDetails();
    getData();
  }, []);
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

  if (isAuth == false) {
    console.log("user not authenticated");
    return <Navigate to="/signup" />;
  }
  if (loading) {
    return (
      <>
        {" "}
        <div
          style={{
            // border: "1px solid red",
            padding: "3%",
            marginTop: "8%",
          }}>
          {/* inner Container */}
          <div
            style={{
              display: "Flex",
              //   border: "1px solid grey",
            }}>
            {/* 10% width Image Container */}
            <div
              style={{
                width: "15%",
                // border: "1px solid blue",
                padding: "1%",
              }}>
              {productDetails.images.map((el, i) => {
                return (
                  <img
                    key={i}
                    style={{
                      width: "80%",
                      height: "90px",
                      border: "1px solid #fde9f2",
                      margin: "10%",
                      padding: "2%",
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                    }}
                    src={el}
                    alt=""
                  />
                );
              })}
            </div>
            <div>
              {/* Middle Div */}
              <div
                style={{
                  width: "80%",
                  //   border: "1px solid purple",
                  display: "block",
                  margin: "auto",
                }}>
                <img
                  style={{
                    display: "block",
                    margin: "auto",
                    marginTop: "2%",
                    width: "70%",
                    boxShadow: "rgba(1, 0.15, 0.15, 0.15) 1.95px 1.95px 2.6px",
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
              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginTop: "10%",
                    marginLeft: "2%",
                  }}>
                  Similar Products
                </h3>
                <div
                  style={{
                    // border: "1px solid aqua",
                    display: "flex",
                    gap: "30px",
                    marginTop: "2%",
                  }}>
                  {productDetails &&
                    productDetails.images.map((image, i) => (
                      <>
                        <img
                          key={i}
                          style={{
                            width: "14%",
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
                </div>
              </div>
            </div>
            {/* Last Div / Left Div */}
            <div
              style={{
                width: "120%",
                // border: "1px solid yellow",
                padding: "1%",
              }}>
              <div
                style={{
                  border: " ",
                  width: "95%",
                  margin: "auto",
                  padding: "2%",
                  boxShadow: "rgba(1, 0.15, 0.15, 0.15) 1.95px 1.95px 2.6px",
                  //   marginTop: "2%",
                  marginBottom: "2%",
                }}>
                <p
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    color: "grey",
                    marginTop: "1%",
                  }}>
                  {productDetails.title}
                </p>
                <p
                  style={{
                    fontSize: "35px",
                    marginTop: "1%",
                  }}>
                  ₹{productDetails.discounted_price}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "30px",
                    marginTop: "2%",
                  }}>
                  <h1
                    style={{
                      backgroundColor: "green",
                      padding: "5px 10px",
                      color: "white",
                      fontSize: "large",
                      borderRadius: "20px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                    {productDetails.rating}
                    <p
                      style={{
                        color: "green",
                      }}>
                      -
                    </p>{" "}
                    <FaStar fill="white" />
                    {/* <StarIcon /> */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
                  </h1>
                  <p
                    style={{
                      color: "grey",
                      fontSize: "large",
                    }}>
                    10647 Ratings. 1651 Reviews
                  </p>
                </div>
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
                }}>
                <p
                  style={{
                    fontSize: "25px",
                    marginTop: "2%",
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
                        marginBottom: "3%",
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
                <h3
                  style={{
                    fontSize: "28px",
                    marginTop: "2%",
                    marginBottom: "3%",
                  }}>
                  Product Details
                </h3>
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
            </div>
          </div>

          {/* Suggestions <Div></Div> */}
          <h1
            style={{
              fontSize: "large",
              marginLeft: "3%",
              marginBottom: "2%",
              marginTop: "7%",
            }}>
            Suggested Products
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
              gap: "2vh",
              marginBottom: "3%",
            }}>
            {data.map((p, i) => {
              if (i < 10) {
                return <SingleCard key={i} props={p} />;
              }
            })}
          </div>
        </div>
      </>
    );
  } else {
    return "No data";
  }
};

export default SingleProduct;
