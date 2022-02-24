import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { IRouteType } from "./router"

interface PropsType {
  routes: IRouteType[]
}

const RouterView: React.FC<PropsType> = (r: PropsType) => {
  const generateRote = (r: PropsType) => {
    return r.routes.map((item) => {
      return <Route key={item.key} path={item.path} element={item.component} />
    })
  }

  return (
    <>
      <Router>
        <Routes>{generateRote(r)}</Routes>
      </Router>
    </>
  )
}

export default RouterView
