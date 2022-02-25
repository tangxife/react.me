import React from "react"
import { Outlet } from "react-router-dom"
import SaideBar from "../../components/SideBar"
import Header from "../../components/Header"
import { Box, HStack } from "@chakra-ui/react"

const Home: React.FC = () => {
  return (
    // <div>
    //   <SaideBar />
    //   <Header />
    //   <Outlet />
    // </div>
    <HStack spacing="0px" flexDirection="row">
      <Box flex="0 0 86px" h="100VH" bg="white" borderRight="1px solid #DADFE4">
        <SaideBar />
      </Box>
      <Box w="100%" h="100VH">
        <Header />
        <Outlet />
      </Box>
    </HStack>
  )
}

export default Home
