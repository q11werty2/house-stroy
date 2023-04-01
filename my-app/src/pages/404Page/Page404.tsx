import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { PATHS } from '../../router/paths'

import styles from './Page404.module.scss'

const Page404: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404 NOT FOUND</h1>
      <NavLink to={PATHS.MAIN}>
        <p className={styles.text}>
          Please, keep calm and return to the home page
        </p>
      </NavLink>
    </div>
  )
}

export default Page404
