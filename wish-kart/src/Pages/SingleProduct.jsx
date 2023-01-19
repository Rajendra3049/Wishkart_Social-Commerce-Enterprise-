import React from "react";
// import FontAwesomeIcon from "font-awesome";
// import { StarIcon } from "@chakra-ui/icons";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const SingleProduct = () => {
  return (
    // main Div - Container
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
            width: "10%",
            // border: "1px solid blue",
            padding: "1%",
          }}>
          <img
            style={{
              width: "80%",
              height: "90px",
              border: "1px solid #fde9f2",
              margin: "10%",
              padding: "2%",
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}
            src="https://images.meesho.com/images/products/63012150/s06z4_64.webp"
            alt=""
          />
          <img
            style={{
              width: "80%",
              height: "90px",
              border: "1px solid #fde9f2",
              margin: "10%",
              padding: "2%",
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}
            src="https://images.meesho.com/images/products/63012150/3jzal_64.webp"
            alt=""
          />
          <img
            style={{
              width: "80%",
              height: "90px",
              border: "1px solid #fde9f2",
              margin: "10%",
              padding: "2%",
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}
            src="https://images.meesho.com/images/products/63012150/s06z4_64.webp"
            alt=""
          />
          <img
            style={{
              width: "80%",
              height: "90px",
              border: "1px solid #fde9f2",
              margin: "10%",
              padding: "2%",
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}
            src="https://images.meesho.com/images/products/63012150/3jzal_64.webp"
            alt=""
          />
        </div>
        <div>
          {/* Middle Div */}
          <div
            style={{
              width: "95%",
              //   border: "1px solid purple",
              display: "block",
              margin: "auto",
            }}>
            <img
              style={{
                display: "block",
                margin: "auto",
                marginTop: "2%",
                boxShadow: "rgba(1, 0.15, 0.15, 0.15) 1.95px 1.95px 2.6px",
              }}
              src="https://images.meesho.com/images/products/63012150/epii6_512.webp"
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "7%",
            }}>
            <button
              //   style={{
              //     padding: "2% 8%",
              //     fontSize: "20px",
              //     border: "1px solid #f43397",
              //     fontWeight: "bold",
              //     borderRadius: "7px",
              //     color: "white",
              //     backgroundColor: "#f43397",
              //   }}
              style={{
                padding: "2% 8%",
                fontSize: "20px",
                border: "1px solid black",
                fontWeight: "bold",
                borderRadius: "7px",
              }}>
              <FaShoppingCart /> Add to Cart
            </button>
            <button
              //   style={{
              //     padding: "2% 8%",
              //     fontSize: "20px",
              //     border: "1px solid black",
              //     fontWeight: "bold",
              //     borderRadius: "7px",
              //   }}
              style={{
                padding: "2% 8%",
                fontSize: "20px",
                border: "1px solid #f43397",
                fontWeight: "bold",
                borderRadius: "7px",
                color: "white",
                backgroundColor: "#f43397",
              }}>
              Buy Now
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
              <img
                style={{
                  width: "14%",
                  padding: "2%",
                  border: "1px solid #fde9f2",
                  boxShadow: "rgba(1, 0.15, 0.15, 0.15) 1.95px 1.95px 2.6px",
                }}
                src="https://images.meesho.com/images/products/63012150/s06z4_64.webp"
                alt=""
              />
              <img
                style={{
                  width: "14%",
                  padding: "2%",
                  border: "1px solid #fde9f2",
                  boxShadow: "rgba(1, 0.15, 0.15, 0.15) 1.95px 1.95px 2.6px",
                }}
                src="https://images.meesho.com/images/products/63012150/3jzal_64.webp"
                alt=""
              />
              <img
                style={{
                  width: "14%",
                  padding: "2%",
                  border: "1px solid #fde9f2",
                  boxShadow: "rgba(1, 0.15, 0.15, 0.15) 1.95px 1.95px 2.6px",
                }}
                src="https://images.meesho.com/images/products/63012150/s06z4_64.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Last Div / Left Div */}
        <div
          style={{
            width: "55%",
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
                fontSize: "large",
                fontWeight: "bold",
                color: "grey",
                marginTop: "1%",
              }}>
              Autokraftz New Latest Winter Knit Thick Fleece Woolen Combo of
              Beanie Winter Cap Hat and Faux Fur Lining Wool Neck Muffler Scarf
              in Black for All Girls Boys Men Women. Free Size
            </p>
            <p
              style={{
                fontSize: "35px",
                marginTop: "1%",
              }}>
              ₹184
            </p>
            <div
              style={{
                display: "flex",
                gap: "30px",
                marginTop: "2%",
              }}>
              {/* <h1
                style={{
                  backgroundColor: "green",
                  padding: "5px 10px",
                  color: "white",
                  //   fontSize: "large",
                  borderRadius: "20px",
                  fontWeight: "bold",
                }}
              >
                4.0 
              </h1> */}
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
                {4}{" "}
                <FaStar fill="white" color="white" backgroundColor="white" />
                {/* <StarIcon /> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
              </h1>
              <p
                style={{
                  color: "grey",
                }}>
                10647 Ratings. 1651 Reviews
              </p>
            </div>
            <p
              style={{
                color: "grey",
                marginTop: "2%",
              }}>
              Free Delivery
            </p>
          </div>
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
            <button
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
              Free Size
            </button>
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
              style={{ fontSize: "28px", marginTop: "2%", marginBottom: "3%" }}>
              Product Details
            </h3>
            <p
              style={{
                color: "grey",
              }}>
              Name : Autokraftz New Latest Winter Knit Thick Fleece Woolen Combo
              of Beanie Winter Cap Hat and Faux Fur Lining Wool Neck Muffler
              Scarf in Black for All Girls Boys Men Women.
              <br /> Free Size <br /> Material : Wool <br /> Type : Beanie{" "}
              <br /> Pattern : Solid <br /> Size : L <br /> Net Quantity (N) : 1{" "}
              <br />
              It is very comfortable and suitable for your daily routine
              activities or work. Free size, easily adjustable. It is for both
              Men and Women and adaptable for everyone even for kids. This cap
              and scarf is very fashionable and stylish, it is very trending and
              made up of high quality woolen, Fur, Sleece material. Due to its
              soft fabric it is easy to wear and skin-friendly. It can be match
              with your all outfits gives you an attractive look, even it cold
              weather it keeps you fashionable and good looking. It is easy to
              carry in camping, tracking activities and keeps you warm. <br />{" "}
              Country of Origin : India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
