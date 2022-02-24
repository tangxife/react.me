import { ReactNode } from "react"

import Login from "../../pates/Login"
import Home from "../../pates/Home"
import Candidate from "../../pates/Candidate/"
import Question from "../../pates/Question/"
import Setting from "../../pates/Setting/index"

export interface IRouteType {
  key: string
  path: string
  component: ReactNode
  title: string
  children?: IRouteType[]
}

export const routes: IRouteType[] = [
  {
    key: "root",
    path: "/",
    component: <Home />,
    title: "root",
    children: [
      {
        key: "candidate",
        path: "/candidate",
        component: <Candidate />,
        title: "candidate",
      },
      {
        key: "question",
        path: "/question",
        component: <Question />,
        title: "question",
      },
      {
        key: "setting",
        path: "/setting",
        component: <Setting />,
        title: "setting",
      },
    ],
  },
  {
    key: "login",
    path: "/login",
    component: <Login />,
    title: "login",
  },
  // {
  //   key: "home",
  //   path: "/home",
  //   component: <Home />,
  //   title: "home",
  // },
]
