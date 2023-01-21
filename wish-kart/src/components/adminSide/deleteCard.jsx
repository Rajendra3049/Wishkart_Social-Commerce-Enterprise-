import { removeProduct } from "../../redux/Products/product.action";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

export default function DeleteCard({ singleData }) {
  // redux start
  let { loading, error, data } = useSelector((store) => store.UserManager);
  let dispatch = useDispatch();
  // redux end

  function HandleDelete() {
    dispatch(removeProduct(singleData.id));
  }
  React.useEffect(() => {
    console.log("delete dispatch");
    console.log(data);
  }, [dispatch]);
  return (
    <>
      <div
        style={{
          border: "0px solid red",
          padding: "1rem",
          height: "50rem",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}>
        <div
          style={{
            border: "0px solid blue",
            height: "30rem",
            marginBottom: "2rem",
          }}>
          <img
            src={singleData.images[0]}
            alt={singleData.title}
            style={{ height: "100%", width: "100%", border: "1px solid #ccc" }}
          />
        </div>
        <div
          style={{
            border: "0px solid green",
            padding: "1rem",
            lineHeight: "2.2rem",
            height: "15rem",
          }}>
          <h2
            style={{
              border: "0px solid blue",
              height: "8rem",
            }}>
            <b>{singleData.title}</b>
          </h2>
          <p style={{ border: "0px solid red", height: "4rem" }}>
            <span>Price: Rs{singleData.discounted_price}</span>{" "}
            &nbsp;&nbsp;&nbsp;
            <span
              style={{
                textDecoration: "line-through",
                fontSize: "1.3rem",
                color: "gray",
              }}>
              MRP: Rs{singleData.original_price}
            </span>
          </p>
          <button
            style={{
              width: "100%",
              border: "0px solid red",
              margin: "auto",
              marginTop: "1.5rem",
            }}
            onClick={HandleDelete}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
