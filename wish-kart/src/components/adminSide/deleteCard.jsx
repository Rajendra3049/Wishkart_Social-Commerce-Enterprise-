import {
  removeProduct,
  updateProduct,
} from "../../redux/Products/product.action";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import btnStyle from "../../styles/removeBtn.module.css";
import { RemoveProductNotify } from "../notify";
import { Link } from "react-router-dom";
import Update from "../adminSide/Update";

export default function DeleteCard({ singleData }) {
  // redux start
  let { loading, error, data } = useSelector((store) => store.UserManager);
  let dispatch = useDispatch();
  // redux end
  // const [dataUpdate,setUpdateData]=React.useState(singleData)

  function HandleDelete() {
    dispatch(removeProduct(singleData.id));
  }



  return (
    <>
      <div
        key={singleData.id}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          height: "90vh",
          padding: "4%",
          cursor: "pointer",
          border:"1px solid red"
        }}
      >
        <Link to={`/SingleProduct/${singleData.id}`}>
          <img
            style={{
              //   width: "50%",
              height: "70%",
              display: "block",
              margin: "auto",
              marginBottom: "1rem",
            }}
            src={singleData.images[0]}
            alt=""
          />
        </Link>

        <h3
          style={{
            fontSize: "1.3rem",
            minHeight: "3.9rem",
            marginTop: "2%",
            color: "grey",
          }}
        >
          {singleData.title}
        </h3>
        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
          }}
        >
          ₹{singleData.discounted_price}{" "}
          <span
            style={{
              color: "grey",
              fontSize: "1.5rem",
            }}
          >
            onwards
            
          </span>
          
        </h1>
     <button
            className={`${btnStyle.btn} ${btnStyle.custom_btn}`}
            onClick={HandleDelete}
          >
            <RemoveProductNotify />
          </button>
    
        {/* <button className={`${btnStyle.btn} ${btnStyle.custom_btn}`}> */}
          <Update singleData={singleData} />
        {/* <div
          style={{
            display:"flex",
            border: "0px solid red",
            textAlign: "center",
          
            marginTop: "1rem",
          }}
        > */}
     
        {/* </button> */}
        </div>
      {/* </div> */}
    </>
  );
}
