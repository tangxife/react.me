import React from "react"

import RouterView from "./router/RouterView"
import { routes } from "./router/RouterView/router"

function App() {
  return (
    <div className="App">
      <RouterView routes={routes} />
    </div>
  )
}

export default App
