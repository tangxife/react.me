import React from "react"
import { Flex, Box, Text, Center } from "@chakra-ui/react"

import Avatar from "./Avatar"
import SideBarTab from "./SideBarTab"

import { routes, IRouteType } from "../../router/RouterView/router"
import HelpIcon from "../Icons/HelpIcon"

const SideBar: React.FC = () => {
  const generateNavLink = (routes: IRouteType[]) => {
    return routes
      .filter((e) => e.key !== "login")
      .map((route, index) => {
        return (
          <>
            <SideBarTab key={route.key} title={route.title} link={route.path} icon={route.icon}></SideBarTab>
            {route.children?.map((item) => {
              return (
                <SideBarTab key={item.key} title={item.title} link={item.path} icon={item.icon}></SideBarTab>
              )
            })}
          </>
        )
      })
  }

  return (
    <Flex flexDirection="column" justifyContent="space-between" minHeight="100vh" alignItems="center">
      <Box>
        <Box mb={10} mt={5}>
          <Center>
            <Avatar userName="T" image="" />
          </Center>
        </Box>
        <Box>{generateNavLink(routes)}</Box>
      </Box>
      <Box mb={5}>
        <Text paddingLeft="5px" align="center" color="#8D97A4">
          <HelpIcon boxSize={7} />
        </Text>
        <Text fontSize="12px" color="#8D97A4">
          setting
        </Text>
      </Box>
    </Flex>
  )
}

export default SideBar
