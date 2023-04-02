import { FC } from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Ellipse } from "../../assets/ellipse3d.svg";
import { ReactComponent as Contacts } from "../../assets/contact.svg";
import Menu from "../Menu";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Logo className={styles.logoHeader}/>
        <div className={styles.schedule}>
          <p>Пн-Сб: c 10:00 до 20:00</p>
          <p>Выходной: воскресенье</p>
        </div>
        <div className={styles.model}>
          <Ellipse className={styles.ellipse} />
          <div>Заказать 3D-макет дома</div>
        </div>
        <Contacts />
        <button className={styles.button}>Заказать звонок</button>
      </div>
      <Menu />
    </>
  );
};

export default Header;
