import { Box, Grid, Text, Stack, Image, Flex } from "@chakra-ui/react";
import { data } from "../Pages/data";
import { AiFillStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import React from "react";

export default function HomeProducts({ showData, currentPage }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <Grid
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
        ]}
        gap={10}>
        {/* card */}
        {showData &&
          showData.map((el) => (
            <Box
              key={el.id}
              style={{
                // border: "1px solid red",
                // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                height: "55vh",
                padding: "4%",
                textAlign: "center",
                cursor: "pointer",
              }}>
              <img
                style={{
                  height: "60%",
                  display: "block",
                  margin: "auto",
                }}
                src={el.image}
                alt=""
              />
              <h3
                style={{
                  fontSize: "14px",
                  marginTop: "2%",
                  color: "grey",
                }}>
                {el.name}
              </h3>
              <h1
                style={{
                  fontSize: "large",
                  fontWeight: "bold",
                }}>
                {el.price}{" "}
                <span
                  style={{
                    color: "grey",
                    fontSize: "medium",
                  }}>
                  onwards
                </span>
              </h1>
              <span
                style={{
                  color: "grey",
                  fontSize: "medium",
                }}>
                Free Delivery
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",

                  marginTop: "2%",
                }}>
                <h1
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    padding: "1% 3%",
                    borderRadius: "20px",
                    backgroundColor: "#038d63",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "large",
                    marginLeft: "10px",
                    justifyContent: "space-evenly",
                  }}>
                  {el.rating2}
                  <p style={{ color: "#038d63" }}>-</p>
                  <FaStar />
                </h1>
                <h4
                  style={{
                    fontSize: "medium",
                    marginRight: "0%",
                  }}>
                  {el.rating}
                </h4>
              </div>
                        
            </Box>
          ))}
        {/* card end */}
      </Grid>
    </Box>
  );
}
