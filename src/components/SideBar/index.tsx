import React from "react"
import { Flex, Spacer, Box, Text, Wrap } from "@chakra-ui/react"

import Avatar from "./Avatar"

const SideBar: React.FC = () => {
  return (
    <Flex flexDirection="column" justifyContent="space-between" minHeight="100vh" alignItems="center">
      <Box>
        <Box mb={10} mt={4}>
          <Avatar userName="T" image="" />
        </Box>
        {/* <Box>{generateMenu(leftBarIsActive)}</Box> */}
      </Box>
      <Box mb={5}>
        <Text paddingLeft="5px" color="#8D97A4">
          {/* <UserSettingIcon boxSize={7} /> */}
        </Text>
        <Text fontSize="12px" color="#8D97A4">
          ヘルプ
        </Text>
      </Box>
    </Flex>
  )
}

export default SideBar
