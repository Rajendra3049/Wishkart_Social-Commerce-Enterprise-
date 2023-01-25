import { background } from "@chakra-ui/react";
import React from "react";
import style from "../styles/pagination.module.css";

export default function Pagination({ pages, currentPage, setCurrentPage }) {
  return (
    <div className={style.pageBox}>
      <button
        disabled={currentPage === 1}
        className={style.btn}
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}>
        Prev
      </button>

      <div className={style.currentPage}>
        {pages &&
          pages.map((page) => (
            <button
              onClick={() => {
                setCurrentPage(currentPage + page);
              }}
              style={
                currentPage == page + 1
                  ? {
                      border: "0px solid blue",
                      width: "30px",
                      background: "#4caf50",
                      borderRadius: "5px",
                      color: "#fff",
                    }
                  : { border: "" }
              }
              key={page}>
              {page + 1}
            </button>
          ))}
      </div>

      <button
        disabled={currentPage === pages[pages.length - 1] + 1}
        className={style.btn}
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}>
        Next
      </button>
    </div>
  );
}
