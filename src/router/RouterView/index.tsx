import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { IRouteType } from "./router"

interface PropsType {
  routes: IRouteType[]
}

const RouterView: React.FC<PropsType> = (r: PropsType) => {
  const generateRote = (r: PropsType) => {
    return r.routes.map((item) => {
      if (item.children) {
        return (
          <Route key={item.key} path={item.path} element={item.component}>
            {item.children.map((i) => {
              return <Route key={i.key} path={i.path} element={i.component} />
            })}
          </Route>
        )
      }

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
