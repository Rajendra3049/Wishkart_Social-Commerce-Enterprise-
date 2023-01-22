import { removeProduct } from "../../redux/Products/product.action";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import btnStyle from "../../styles/removeBtn.module.css";
import { RemoveProductNotify } from "../notify";

export default function DeleteCard({ singleData }) {
  // redux start
  let { loading, error, data } = useSelector((store) => store.UserManager);
  let dispatch = useDispatch();
  // redux end

  function HandleDelete() {
    dispatch(removeProduct(singleData.id));
  }

  return (
    <>
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          height: "70vh",
          padding: "4%",
          cursor: "pointer",
        }}>
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
        <h3
          style={{
            fontSize: "1.3rem",
            minHeight: "3.9rem",
            marginTop: "2%",
            color: "grey",
          }}>
          {singleData.title}
        </h3>
        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
          }}>
          ₹{singleData.discounted_price}{" "}
          <span
            style={{
              color: "grey",
              fontSize: "1.5rem",
            }}>
            onwards
          </span>
        </h1>

        <div
          style={{
            border: "0px solid red",
            textAlign: "center",
            marginTop: "1rem",
          }}>
          <button
            className={`${btnStyle.btn} ${btnStyle.custom_btn}`}
            onClick={HandleDelete}>
            <RemoveProductNotify />
          </button>
        </div>
      </div>
    </>
  );
}

// {
//   border: "1px solid black",
//   textAlign: "center",
//   width: "80%",
//   fontSize: "18px",
//   padding: "0.5rem 0.5rem",
// }
