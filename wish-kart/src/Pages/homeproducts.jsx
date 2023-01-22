import { Box, Grid, Text, Stack, Image, Flex } from "@chakra-ui/react";
import { data } from "../Pages/data";
import { AiFillStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

export default function HomeProducts() {
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
        {data.map((el) => (
          <Box
            key={el.rating2}
            style={{
              // border: "1px solid red",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              height: "50vh",
              padding: "4%",
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
                fontSize: "medium",
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
                  padding: "2% 3%",
                  borderRadius: "20px",
                  backgroundColor: "green",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "large",
                  justifyContent: "space-evenly",
                }}>
                {el.rating2}
                <p style={{ color: "green" }}>-</p>
                <FaStar />
              </h1>
              <h4
                style={{
                  fontSize: "medium",
                  marginRight: "10%",
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
