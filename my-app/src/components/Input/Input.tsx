import classNames from "classnames";
import { FC } from "react";

import styles from "./Input.module.scss";

interface Iinput {
  placeholder: string;
  type: string;
  className?: string;
}

const Input: FC<Iinput> = ({ placeholder, type, className }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={classNames(styles.input, className)}
    />
  );
};

export default Input;
