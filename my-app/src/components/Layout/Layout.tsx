import { FC, ReactNode } from 'react'

import Header from '../Header'
import { ReactComponent as AsideMenu } from "../../assets/asideMenu.svg";

import styles from './Layout.module.scss'

type LayotProps = {
  children: ReactNode
}

const Layout: FC<LayotProps> = ({children}) => {
  return (
    <div className={styles.layout}>
      <Header />
      <AsideMenu className={styles.asideMenu}/>
      <div className={styles.childrenBlock}>{children}</div>
    </div>
  )
}

export default Layout
