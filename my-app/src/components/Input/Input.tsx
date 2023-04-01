import { FC } from "react";

import styles from "./Input.module.scss";

interface Iinput {
  placeholder: string;
  type: string;
  classname?: string;
}

const Input: FC<Iinput> = ({ placeholder, type }) => {
  return (
    <input placeholder={placeholder} type={type} className={styles.input} />
  );
};

export default Input;
