import React from "react"

const theme = {
  color: {
    primary: "#0064FE",
    deepPrimary: "rgba(10, 71, 166, 1)",
    sub: "#E8F4FF",
    deepSub: "rgba(207, 220, 239, 1)",
    green: "#1AB888",
    BG01: "#FFFFFF",
    BG02: "#F0F2F4",
    text: {
      header: "#192434",
      body: "rgba(24, 39, 58, 0.94)",
      secondary: "rgba(27, 43, 65, 0.72)",
      tertiary: "rgba(28, 48, 74, 0.5)",
      disabled: "rgba(28, 52, 84, 0.26)",
      error: "#F52419",
      Green: "#1AB888",
      text01: "#192434",
      text02: "#263446",
      subText01: "#5A6676",
      subText02: "#77828F",
      subText03: "#8D97A4",
      subText04: "#C4CBD3",
      subText05: "#DADFE4",
      subText06: "#000000",
      subText07: "#0014FE",
      subText08: "#F3F5F7",
    },

    BK100: "rgba(25,36,52,1)",
    BK94: "rgba(38, 52, 70, 1)",
    BK83: "rgba(65, 77, 94, 1)",
    BK72: "rgba(90,102,118,1)",
    BK60: "rgba(119,130,143,1)",
    BK50: "rgba(141,151,164,1)",
    BK38: "rgba(169,177,188,1)",
    BK26: "rgba(196,203,211,1)",
    BK16: "rgba(218,223,228,1)",
    BK10: "rgba(233,236,240,1)",
    BK5: "rgba(243,245,247,1)",

    shade: {
      100: "#192434",
      90: "rgba(24, 39, 58, 0.94)",
      80: "rgba(26, 41, 61, 0.83)",
      70: "rgba(27, 43, 65, 0.72)",
      60: "rgba(28, 46, 69, 0.6)",
      50: "rgba(28, 48, 74, 0.5)",
      40: "rgba(28, 50, 79, 0.38)",
      30: "rgba(28, 52, 84, 0.26)",
      20: "rgba(28, 55, 90, 0.16)",
      10: "rgba(26, 56, 96, 0.1)",
      5: "rgba(25, 59, 103, 0.05)",
    },

    icon: "rgba(28, 46, 69, 0.6)",
    error: "#FF4238",
  },

  border: {
    BK16: "1px solid #DADFE4",
    bottom02: "2px solid #eee",
    bottom03: "3px solid #0064FE",
  },

  cursor: {
    pointer: "pointer",
  },
}

export const ThemeContext = React.createContext({ theme })
export default theme
