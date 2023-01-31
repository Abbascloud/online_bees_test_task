import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { theme } from "../../src/theme";
import { IconsProps } from "./icons.type";

export function SvgComponent({ focused }: IconsProps) {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none">
      <Path
        d="M11 20.5a9 9 0 100-18 9 9 0 000 18zM22 22.5l-4-4"
        stroke="#6E7191"
        strokeWidth={2}
        fill={focused ? theme.pallete.menuIcons.activeColor : "none"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
