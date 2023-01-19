import React from "react";
import styles from "../styles/addProduct.module.css";
import style from "../styles/inputbox.module.css";

export default function AddProduct() {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        {/* <h1>Add New Product</h1> */}
        <hr />
        <div className={styles.rowParent}>
          <h2>General Info About Product</h2>
          <div className={styles.row}>
            <div className={style.root}>
              <input className={style.input} type="text" required />
              <label className={style.label} htmlFor="Title">
                Title
              </label>
            </div>

            <select
              style={{
                border: "1px solid  #ccc",
                color: "#ff4397",
                padding: "1rem",
                width: "80%",
              }}>
              <option value="sarees">Sarees</option>
              <option value="jewellery">Jewellery</option>
              <option value="dresses">Dresses</option>
              <option value="mens">Mens Top Wear</option>
              <option value="beauty">Beauty and health</option>
              <option value="bags">Bags and Footwear</option>
              <option value="home">Home and Kitchen</option>
            </select>
          </div>
        </div>

        <div className={styles.rowParent}>
          <h2>Price of Product</h2>
          <div className={styles.row}>
            <div className={`${style.root}, ${styles.input}`}>
              <input className={style.input} type="text" required />
              <label className={style.label} htmlFor="Original Price">
                Original Price
              </label>
            </div>
          </div>
        </div>

        <div className={styles.rowParent}>
          <h2>Details About Product</h2>
          <div className={styles.row}>
            <div className={style.root}>
              <input className={style.input} type="text" required />
              <label className={style.label} htmlFor="Fabric/Material">
                Fabric/Material
              </label>
            </div>

            <div className={style.root}>
              <input className={style.input} type="text" required />
              <label className={style.label} htmlFor="Pattern/Design">
                Pattern/Design
              </label>
            </div>

            <div className={style.root}>
              <input className={style.input} type="text" required />
              <label className={style.label} htmlFor="Multipack">
                Multipack
              </label>
            </div>
            <div className={style.root}>
              <input className={style.input} type="text" required />
              <label className={style.label} htmlFor="Description">
                Description
              </label>
            </div>
          </div>
        </div>

        <div className={styles.rowParent}>
          <h2>More Info</h2>
          <div className={styles.row}>
            <div className={style.root}>
              <input className={style.input} type="text" required />
              <label className={style.label} htmlFor="Sizes (Sperated by , )">
                Sizes
              </label>
            </div>

            <div className={style.root}>
              <input className={style.input} type="url" required />
              <label
                className={style.label}
                htmlFor="Image URL's (Sperated by , )">
                Image
              </label>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <button className={styles.btn}>Add Product</button>
        </div>
      </div>
    </div>
  );
}
