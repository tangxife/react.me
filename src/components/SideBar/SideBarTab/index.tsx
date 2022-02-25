import React, { ReactNode, useContext } from "react"
import { NavLink, useLocation } from "react-router-dom"

import { Box, Text } from "@chakra-ui/react"

import { ThemeContext } from "../../../theme/theme"

interface IPropsType {
  // key: string
  title: string
  link: string
  icon?: ReactNode
}

const SideBarTab: React.FC<IPropsType> = (props: IPropsType) => {
  const location = useLocation()
  const { theme } = useContext(ThemeContext)

  return (
    <Box mb={7} textAlign="center" className="leftBarStyle" fontSize="12px">
      <NavLink
        to={props.link}
        style={{ color: location.pathname === props.link ? theme.color.primary : theme.color.text.subText03 }}
      >
        <Text fontSize="20px" textAlign="center">
          {props.icon}
        </Text>
        <Text>{props.title}</Text>
      </NavLink>
    </Box>
  )
}

export default SideBarTab
