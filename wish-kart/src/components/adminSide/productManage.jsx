import DeleteCard from "./deleteCard";
import { Pagination } from "antd";
import React from "react";
const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
};

export default function ProductManage({ data }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <>
      {" "}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          border: "1px solid  #ccc",
          gap: "15px",
        }}>
        {data.map((e) => (
          <DeleteCard key={e.id} singleData={e} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80px",
          marginTop: "2rem",
        }}></div>
    </>
  );
}
