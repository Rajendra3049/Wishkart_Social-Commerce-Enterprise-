import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Box,
  Portal,
} from "@chakra-ui/react";
import React from "react";

export default function OrderDetails({ text, data }) {
  const initRef = React.useRef();
  return (
    <Popover isLazy>
      <PopoverTrigger>
        <Button background={"none"} fontSize={["1rem", "1rem", "1.8rem"]}>
          {text}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        width={["36rem", "36rem", "50rem"]}
        minHeight={"20rem"}
        fontSize={["1.3rem", "1.3rem", "1.6rem"]}
        padding={"1.5rem"}
        textAlign={"left"}>
        {data.map((e) => (
          <Box key={e.id}>
            <PopoverHeader lineHeight={"2.3rem"}>
              <b>Product Name: </b>
              {e.title}
              <Box>
                <b>Category: </b>
                {e.category} <br />
                <b>MRP: </b>
                <span>Rs.{e.original_price}</span>
                <b> , Price: </b>
                <span>Rs.{e.discounted_price}</span>
              </Box>
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverArrow />
          </Box>
        ))}
      </PopoverContent>
    </Popover>
  );
}
