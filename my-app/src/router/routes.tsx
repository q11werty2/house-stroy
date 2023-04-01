import React from 'react'

import { PATHS } from './paths'
import Page404 from '../pages/404Page'
import MainPage from '../pages/Main/Main'
import CasePage from '../pages/Case/Case'


interface Routes {
  path: string
  component: React.FC
}

export const routes: Routes[] = [
  {
    path: PATHS.MAIN,
    component: MainPage,
  },
  {
    path: PATHS.CASE,
    component: CasePage,
  },
  {
    path: PATHS.PAGE_404,
    component: Page404,
  },
]
