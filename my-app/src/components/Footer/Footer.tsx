import { FC } from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as VK } from "../../assets/vk.svg";
import { ReactComponent as YouTube } from "../../assets/youTube.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Inst } from "../../assets/inst.svg";
import { ReactComponent as Designer } from "../../assets/designer.svg";

import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return <div className={styles.wrapper}>
    <div className={styles.logo}>
      <Logo/>
      <button className={styles.button}>Заказать звонок</button>
    </div>
    <div>
      <p>Главная</p>
      <p>Каталог</p>
      <p>Услуги</p>
      <p>Расчет стоимости</p>
      <p>Консультация архитектора</p>
    </div>
    <div>
      <p>Экскурсия на объек</p>
      <p>3D-макет дома</p>
      <p>О нас</p>
      <p>Блог</p>
      <p>Контакты</p>
    </div>
    <div>
      <p>Делимся крутыми проектами в<br/> соц.сетях. Подписывайтесь!</p>
      <div className={styles.social}>
        <VK/>
        <Inst/>
        <Facebook/>
        <YouTube/>
      </div>
      <p>Разработка и продвижение сайта:</p>
      <Designer/>
    </div>
  </div>;
};

export default Footer;
