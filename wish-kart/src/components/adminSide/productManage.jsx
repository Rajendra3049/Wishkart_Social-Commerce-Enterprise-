import DeleteCard from "./deleteCard";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import btnStyle from "../../styles/removeBtn.module.css";
import Pagination from "../pagination";

export default function ProductManage() {
  const [pages, setPages] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  const [productData, setProductData] = React.useState([]);
  let { data } = useSelector((store) => store.ProductsManager);
  let dispatch = useDispatch();

  React.useEffect(() => {
    let newData = [];
    for (let i = currentPage - 1; i < currentPage + 11; i++) {
      newData.push(data[i]);
    }
    setProductData(newData);
  }, [currentPage, data]);

  React.useEffect(() => {
    let newPages = [];
    for (let i = currentPage - 1; i < currentPage + 9; i++) {
      newPages.push(i);
    }
    setPages(newPages);
  }, []);

  // React.useEffect(() => {
  //   setProductData(data);
  // }, [data]);
  return (
    <>
      {" "}
      <div className={btnStyle.grid}>
        {productData &&
          productData.map((e) => <DeleteCard key={e.id} singleData={e} />)}
      </div>
      <div>
        <Pagination
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
