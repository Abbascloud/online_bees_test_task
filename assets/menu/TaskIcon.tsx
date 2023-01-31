import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { theme } from "../../src/theme";
import { IconsProps } from "./icons.type";

export function SvgComponent({ focused }: IconsProps) {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
      <Path
        d="M7.5 3.5h-1a3 3 0 00-3 3v14a3 3 0 003 3h12a3 3 0 003-3v-14a3 3 0 00-3-3h-1"
        stroke="#6E7191"
        fill={focused ? theme.pallete.menuIcons.activeColor : "none"}
        strokeWidth={2}
      />
      <Rect
        x={7.5}
        y={1.5}
        width={10}
        height={5}
        rx={2}
        stroke="#6E7191"
        fill={focused ? theme.pallete.menuIcons.activeColor : "none"}
        strokeWidth={2}
      />
    </Svg>
  );
}
