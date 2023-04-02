import classNames from "classnames";
import { FC } from "react";

import styles from "./Textarea.module.scss";

interface ITextarea {
  placeholder: string;
  className?: string;
}

const Textarea: FC<ITextarea> = ({ placeholder, className }) => {
  return (
    <textarea
      placeholder={placeholder}
      className={classNames(styles.textarea, className)}
    />
  );
};

export default Textarea;
