import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SingleCard = ({ props }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      key={props.id}
      style={{
        // border: "1px solid red",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        height: "70vh",
        padding: "4%",
        cursor: "pointer",
      }}>
      <Link to={`/SingleProduct/${props.category}/${props._id}`}>
        {" "}
        <img
          style={{
            //   width: "50%",
            height: "70%",
            display: "block",
            margin: "auto",
          }}
          src={props.images[0]}
          alt=""
        />
      </Link>

      <h3
        style={{
          fontSize: "medium",
          marginTop: "2%",
          color: "grey",
        }}>
        {props.title}
      </h3>
      <h1
        style={{
          fontSize: "large",
          fontWeight: "bold",
        }}>
        ₹{props.discounted_price}{" "}
        <span
          style={{
            color: "grey",
            fontSize: "medium",
          }}>
          onwards
        </span>
      </h1>
      <span
        style={{
          color: "grey",
          fontSize: "medium",
        }}>
        Free Delivery
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2%",
        }}>
        <h1
          style={{
            color: "white",
            fontWeight: "bold",
            padding: "2% 3%",
            borderRadius: "20px",
            backgroundColor: "green",
            display: "flex",
            alignItems: "center",
            fontSize: "12px",
            justifyContent: "space-evenly",
          }}>
          {props.rating}
          <p style={{ color: "green" }}>-</p>
          <FaStar />
        </h1>
        <h4
          style={{
            fontSize: "medium",
            marginRight: "5%",
          }}>
          1541 Reviews
        </h4>
      </div>
    </div>
  );
};
