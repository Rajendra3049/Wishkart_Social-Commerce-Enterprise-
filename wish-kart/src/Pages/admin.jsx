import React from "react";
import InputBox from "../components/admin/inputbox";

export default function Admin() {
  const [text, setText] = React.useState("");
  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      {/* <InputBox
        type="text"
        value={text}
        label="product name"
        maxLen="20"
        name="name"
        handleChange={handleChange}
      /> */}
    </div>
  );
}
