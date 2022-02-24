import React from "react"
import { Outlet } from "react-router-dom"
import SaideBar from "../../components/SideBar"
import Header from "../../components/Header"

const Home: React.FC = () => {
  return (
    <div>
      <SaideBar />
      <Header />
      <Outlet />
    </div>
  )
}

export default Home
