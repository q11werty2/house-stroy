import { FC } from "react";

import CaseItem from "../../components/CaseItem";
import Layout from "../../components/Layout";
import { ReactComponent as Video } from "../../assets/video.svg";

import styles from "./Case.module.scss";

const CasePage: FC = () => {
  return (
    <Layout>
      <article className={styles.topArtucle}>
        <CaseItem />
        <Video />
      </article>
      <article className={styles.content}></article>
    </Layout>
  );
};

export default CasePage;
