import { Button, Box } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ page, changePage, data }) => {
  // console.log(data)
  let N = Math.ceil(data.length / 10);
  // console.log(N)
  let arr = [];
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }

  return (
    <>
      <Button
        bg="none"
        mr={"20px"}
        isDisabled={page == 1}
        padding="20px 10px 20px 10px"
        border={"1px solid grey"}
        fontSize="4xl"
        onClick={() => changePage((prev) => prev - 1)}>
        Prev
      </Button>
      {arr.map((el, i) => {
        return (
          <Button
            key={i}
            bg="none"
            fontSize="20px"
            m={"5px"}
            onClick={() => changePage(el)}
            style={{
              border: page == el ? "1px solid blue" : "00px solid grey",
            }}>
            {el}
          </Button>
        );
      })}
      <Button
        bg="none"
        ml={"20px"}
        isDisabled={page == N}
        padding="20px 10px 20px 10px"
        border={"1px solid grey"}
        fontSize="4xl"
        onClick={() => changePage((prev) => prev + 1)}>
        Next
      </Button>
    </>
  );
};

export default Pagination;
