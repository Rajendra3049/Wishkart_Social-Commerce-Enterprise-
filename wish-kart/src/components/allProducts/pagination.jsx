import { Button } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ page, changePage, data }) => {
  // console.log(data)
  let N = Math.ceil(data.length / 10);
  // console.log(N)
  let arr = [];
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }
  console.log(page);

  return (
    <div>
      <Button
        isDisabled={page == 1}
        padding="20px 10px 20px 10px"
        border={"1px solid grey"}
        fontSize="4xl"
        onClick={() => changePage((prev) => prev - 1)}>
        Prev
      </Button>
      {arr.map((el) => {
        return (
          <Button
            fontSize="4xl"
            padding="10px 10px 10px 10px"
            onClick={() => changePage(el)}
            style={{ border: page == el ? "1px solid red" : "" }}>
            {el}
          </Button>
        );
      })}
      <Button
        isDisabled={page == N}
        padding="20px 10px 20px 10px"
        border={"1px solid grey"}
        fontSize="4xl"
        onClick={() => changePage((prev) => prev + 1)}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
