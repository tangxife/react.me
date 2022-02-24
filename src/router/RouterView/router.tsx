import { ReactNode } from "react"

import Login from "../../pates/Login"
import Home from "../../pates/Home"

export interface IRouteType {
  key: string
  path: string
  component: ReactNode
}

export const routes: IRouteType[] = [
  {
    key: "root",
    path: "/",
    component: <Home />,
  },
  {
    key: "login",
    path: "/login",
    component: <Login />,
  },
  {
    key: "home",
    path: "/home",
    component: <Home />,
  },
]
