import { FC, ReactNode } from 'react'

import Header from '../Header'

import styles from './Layout.module.scss'

type LayotProps = {
  children: ReactNode
}

const Layout: FC<LayotProps> = ({children}) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.childrenBlock}>{children}</div>
    </div>
  )
}

export default Layout
