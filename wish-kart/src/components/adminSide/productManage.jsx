import DeleteCard from "./deleteCard";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../allProducts/pagination";

export default function ProductManage() {
  const [productData, setProductData] = React.useState([]);
  let { data } = useSelector((store) => store.ProductsManager);
  let dispatch = useDispatch();

  // ***********************************pagination*************************************
  let [filtCred, setFiltCred] = React.useState({});
  const [page, setPage] = React.useState(1);
  const [paginationData, setPaginationData] = React.useState([]);
  const changePage = (currentpage) => {
    setPage(currentpage);
    setPaginationData([]);

    for (let i = page * 10 - 10; i <= page * 10; i++) {
      filtData.length == 0 ? console.log(data) : console.log(filtData);
      if ((filtData.length == 0 ? data : filtData)[i]) {
        setPaginationData((prePag) => [
          ...prePag,
          (filtData.length == 0 ? data : filtData)[i],
        ]);
      }
    }
  };
  // console.log(data);
  const setpageData = () => {
    setPaginationData([]);
    for (let i = page * 10 - 10; i <= page * 9; i++) {
      console.log(data);
      if ((filtData.length == 0 ? data : filtData)[i]) {
        setPaginationData((prePag) => [
          ...prePag,
          (filtData.length == 0 ? data : filtData)[i],
        ]);
      }
    }
  };
  // console.log(paginationData)
  // ***********************************pagination********************************

  let filtData = data.filter(
    (el) =>
      ((filtCred.above100 ? el.discounted_price > 1000 : "") ||
        (filtCred.a1000_500
          ? el.discounted_price < 1000 && el.discounted_price > 500
          : "") ||
        (filtCred.a500_300
          ? el.discounted_price < 500 && el.discounted_price > 300
          : "") ||
        (filtCred.below300 ? el.discounted_price < 300 : "")) &&
      ((filtCred.Sarees ? el.category == "Sarees" : "") ||
        (filtCred.Dresses ? el.category == "Dresses" : "") ||
        (filtCred.Mens_Top_Were ? el.category == "Mens Top Were" : "") ||
        (filtCred.Jewellery ? el.category == "Jewellery" : "") ||
        (filtCred.Beauty_and_health
          ? el.category == "Beauty and health"
          : "") ||
        (filtCred.Bags_and_Footwear
          ? el.category == "Bags and Footwear"
          : "") ||
        (filtCred.Home_and_Kitchen ? el.category == "Home and Kitchen" : ""))
  );
  const check = (e) => {
    console.log(e.target);

    const { name, checked } = e.target;
    setFiltCred({
      ...filtCred,
      [name]: checked,
    });
    setPage(1); //part of paginaion set 1st page after filter
    setpageData(); //part of paginaion set data after filter
  };

  React.useEffect(() => {
    setProductData(data);
    setpageData(); //part of pagination
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
      {/* <div textAlign={"center"} marginTop="50px">
        <Pagination
          page={page}
          changePage={changePage}
          data={filtData.length == 0 ? data : filtData}
        />
      </div> */}
    </>
  );
}
