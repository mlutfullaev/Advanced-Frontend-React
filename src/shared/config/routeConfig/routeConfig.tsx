import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import {NotFoundPage} from "pages/NotFoundPage";

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOTFOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOTFOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}
