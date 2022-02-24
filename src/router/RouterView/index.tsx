import React, { ReactNode } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import router from "./router"

interface IRouterType {
  key: string
  path: string
  component: ReactNode
}

const RouterView: React.FC = () => {
  const generateRote = (r: IRouterType[]) => {
    return r.map((item) => {
      return <Route key={item.key} path={item.path} element={item.component} />
    })
  }

  return (
    <>
      <Router>
        <Routes>{generateRote(router)}</Routes>
      </Router>
    </>
  )
}

export default RouterView
