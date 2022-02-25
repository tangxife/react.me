import { ReactNode } from "react"

import Login from "../../pages/Login"
import Home from "../../pages/Home"
import Candidate from "../../pages/Candidate"
import Question from "../../pages/Question"
import Setting from "../../pages/Setting/index"
import HomeIcon from "../../components/Icons/HomeIcon"
import CandidateIcon from "../../components/Icons/CandidateIcon"
import QuestionIcon from "../../components/Icons/QuestionIcon"
import SettingIcon from "../../components/Icons/SettingIcon"
import InfomationIcon from "../../components/Icons/InfomationIcon"

export interface IRouteType {
  key: string
  path: string
  component: ReactNode
  title: string
  icon?: ReactNode
  children?: IRouteType[]
}

export const routes: IRouteType[] = [
  {
    key: "root",
    path: "/",
    component: <Home />,
    title: "root",
    icon: <HomeIcon boxSize={7} />,
    children: [
      {
        key: "candidate",
        path: "/candidate",
        component: <Candidate />,
        title: "candidate",
        icon: <CandidateIcon boxSize={7} />,
      },
      {
        key: "question",
        path: "/question",
        component: <Question />,
        title: "question",
        icon: <QuestionIcon boxSize={7} />,
      },
      {
        key: "infomation",
        path: "/infomation",
        component: <>Infomation</>,
        title: "infomation",
        icon: <InfomationIcon boxSize={7} />,
      },
      {
        key: "setting",
        path: "/setting",
        component: <Setting />,
        title: "setting",
        icon: <SettingIcon boxSize={7} />,
      },
    ],
  },
  {
    key: "login",
    path: "/login",
    component: <Login />,
    title: "login",
  },
]
