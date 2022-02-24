import Login from "../../pates/Login"
import Home from "../../pates/Home"

const router = [
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
    path: "/hoem",
    component: <Home />,
  },
]

export default router
