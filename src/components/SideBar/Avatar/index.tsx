import React from "react"
import { Avatar as A } from "@chakra-ui/react"

import theme from "../../../theme/theme"

type PropsType = {
  userName: string
  image?: string
}

const Avatar: React.FC<PropsType> = (props: PropsType) => {
  return <A name={props.userName} src={props.image} bg={theme.color.primary} />
}

export default Avatar
