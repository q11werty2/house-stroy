import { FC } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Polygon } from "../../assets/polygon.svg";

import { NAVIGATION_MENU } from "./constants";

import styles from "./Menu.module.scss";

const Menu: FC = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navigation}>
        {NAVIGATION_MENU.map(({ to, label }, index) => (
          <NavLink key={index} to={to} className={styles.menuItem}>
            {label}
            <Polygon />
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
export default Menu;
