import React from "react";
import btnStyle from "../../styles/update.module.css";
import styles from "../../styles/addProduct.module.css";
import style from "../../styles/inputbox.module.css";
import { updateProduct } from "../../redux/admin/admin.action";
import { useDispatch, useSelector } from "react-redux";

const initialData = {
  category: "",
  title: "",
  original_price: "",
  discounted_price: "",
  sizes: [],
  images: [],
  details: {
    Fabric: "",
    Pattern: "",
    Multipack: "",
    Description: "",
  },
  rating: 4,
  seller_id: 30,
};

export default function UpdateProduct({
  singleData,
  onClose,
  token,
  query,
  setQuery,
}) {
  console.log(token);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [state, setState] = React.useState(singleData);

  let dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "sizes" || name === "images") value = value.split(",");
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleChangeDetails = (e) => {
    setState({
      ...state,
      details: {
        ...state.details,
        [e.target.name]: e.target.value,
      },
    });
  };
  function HandleUpdate(e) {
    e.preventDefault();
    dispatch(updateProduct({ token, id: singleData._id, data: state }));
    setQuery({ page: 1, category: "#", order: "#", title: "" });
    onClose();
  }

  return (
    <div className={styles.root}>
      <form onSubmit={HandleUpdate}>
        <div className={styles.main}>
          <hr />
          <div className={styles.rowParent}>
            <h2>General Info About Product</h2>
            <div className={styles.row}>
              <div className={style.root}>
                <input
                  className={style.input}
                  type="text"
                  required
                  name="title"
                  value={state.title}
                  onChange={handleChange}
                />
                <label className={style.label} htmlFor="Title">
                  Title
                </label>
              </div>

              <select
                value={state.category}
                name="category"
                onChange={handleChange}
                required
                style={{
                  border: "1px solid  #ccc",
                  color: "#ff4397",
                  padding: "1rem",
                  width: "80%",
                }}>
                <option value="#">Select Category</option>
                <option value="Sarees">Sarees</option>
                <option value="Jewellery">Jewellery</option>
                <option value="Dresses">Dresses</option>
                <option value="Mens Top Wear">Mens Top Wear</option>
                <option value="Beauty and health">Beauty and health</option>
                <option value="Bags and Footwear">Bags and Footwear</option>
                <option value="Home and Kitchen">Home and Kitchen</option>
              </select>
            </div>
          </div>

          <div className={styles.rowParent}>
            <h2>Price of Product</h2>
            <div className={styles.row}>
              <div className={style.root}>
                <input
                  className={style.input}
                  type="text"
                  required
                  value={state.original_price}
                  onChange={handleChange}
                  name="original_price"
                />
                <label className={style.label} htmlFor="Original Price">
                  Original Price
                </label>
              </div>
              <div className={`${style.root}, `}>
                <input
                  className={style.input}
                  type="text"
                  required
                  value={state.discounted_price}
                  onChange={handleChange}
                  name="discounted_price"
                />
                <label className={style.label} htmlFor="Discounted Price">
                  Discounted Price
                </label>
              </div>
            </div>
          </div>

          <div className={styles.rowParent}>
            <h2>Details About Product</h2>
            <div className={styles.row}>
              <div className={style.root}>
                <input
                  className={style.input}
                  type="text"
                  required
                  value={state.details.Fabric}
                  onChange={handleChangeDetails}
                  name="Fabric"
                />
                <label className={style.label} htmlFor="Fabric/Material">
                  Fabric/Material
                </label>
              </div>

              <div className={style.root}>
                <input
                  className={style.input}
                  type="text"
                  required
                  value={state.details.Pattern}
                  onChange={handleChangeDetails}
                  name="Pattern"
                />
                <label className={style.label} htmlFor="Pattern/Design">
                  Pattern/Design
                </label>
              </div>

              <div className={style.root}>
                <input
                  className={style.input}
                  type="text"
                  value={state.details.Multipack}
                  onChange={handleChangeDetails}
                  name="Multipack"
                  required
                />
                <label className={style.label} htmlFor="Multipack">
                  Multipack
                </label>
              </div>
              <div className={style.root}>
                <input
                  className={style.input}
                  type="text"
                  value={state.details.Description}
                  onChange={handleChangeDetails}
                  name="Description"
                  required
                />
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
                <input
                  className={style.input}
                  type="text"
                  required
                  value={state.sizes}
                  onChange={handleChange}
                  name="sizes"
                />
                <label className={style.label} htmlFor="Sizes (Sperated by , )">
                  Sizes
                </label>
              </div>

              <div className={style.root}>
                <input
                  className={style.input}
                  type="url"
                  value={state.images}
                  onChange={handleChange}
                  name="images"
                  required
                />
                <label
                  className={style.label}
                  htmlFor="Image URL's (Sperated by , )">
                  Image
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          {/* <button className={styles.btn}>Add Product</button> */}
          <button
            type="submit"
            className={`${btnStyle.btn} ${btnStyle.custom_btn}`}>
            {/* <AddProductNotify /> */}
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
