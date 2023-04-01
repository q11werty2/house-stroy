import { FC } from "react";
import Input from "../Input";

import { ReactComponent as Padlock } from "../../assets/padlock.svg";

import styles from "./Bid.module.scss";

const Bid: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Хотите сотрудничать с профессионалами?</div>
      <div className={styles.subTitle}>
        Оставьте заявку и получите бесплатную консультацию
      </div>
      <div className={styles.inputWrapper}>
        <Input type="text" placeholder="Ваше имя" />
        <Input type="text" placeholder="Выберите услугу" />
        <Input type="number" placeholder="Номер телефона" />
        <button className={styles.button}>Отправить</button>
      </div>
      <div className={styles.padlock}>
        <Padlock/>
        <div>Ваши данные не будут переданы третьим лицам</div>
      </div>
    </div>
  );
};

export default Bid;
