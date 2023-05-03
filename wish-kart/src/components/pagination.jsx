import { Button, ButtonGroup, background } from "@chakra-ui/react";
import React from "react";
import style from "../styles/pagination.module.css";

export default function Pagination({ pages, currentPage, setCurrentPage }) {
  return (
    <ButtonGroup spacing={6} position={"relative"} left="40%">
      {pages &&
        pages.map((page) => (
          <Button
            size={"lg"}
            key={page}
            isActive={currentPage === page}
            onClick={() => setCurrentPage(page)}>
            {page}
          </Button>
        ))}
    </ButtonGroup>
  );
}
