import { useEffect, useRef, useState } from "react";
import style from "../../styles/inputbox.module.css";

const InputBox = ({ type, label, value, maxLen, name, handleChange }) => {
  return (
    <div className={style.root}>
      <input
        className={style.input}
        type={type}
        value={value}
        name={name}
        required
        maxLength={maxLen}
        onChange={handleChange}
      />
      <label className={style.label} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default InputBox;
