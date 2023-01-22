import DeleteCard from "./deleteCard";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProductManage() {
  const [productData, setProductData] = React.useState([]);
  let { data } = useSelector((store) => store.ProductsManager);
  let dispatch = useDispatch();

  React.useEffect(() => {
    setProductData(data);
  }, [data]);
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
        {productData &&
          productData.map((e) => <DeleteCard key={e.id} singleData={e} />)}
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
