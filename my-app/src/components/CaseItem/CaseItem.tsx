import { FC } from "react";

import Bid from "../Bid";

import styles from "./CaseItem.module.scss";

const CaseItem: FC = () => {
  return (
    <div className={styles.caseItem}>
      <div className={styles.title}>
        Кейс: дом из оцилиндрованного бруса в Балашихе под ключ
      </div>
      <div className={styles.subTitle}>
        Двухэтажный дом, площадью 128 м² в европейском стиле
      </div>
      <Bid />
    </div>
  );
};

export default CaseItem;
