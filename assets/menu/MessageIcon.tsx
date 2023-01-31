import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconsProps } from "./icons.type";
import { theme } from "../../src/theme";
export function SvgComponent({ focused }: IconsProps) {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none">
      <Path
        d="M2.05 13.826a7.5 7.5 0 112.624 2.625h0l-2.592.74a.626.626 0 01-.773-.773l.74-2.592h0z"
        stroke="#6E7191"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={
          focused
            ? theme.pallete.menuIcons.activeColor
            : theme.pallete.menuIcons.defaultColor
        }
      />
      <Path
        d="M8 17.485c.38 1.048.993 2 1.796 2.79a7.75 7.75 0 002.85 1.774 7.923 7.923 0 006.575-.599h0l2.666.74a.66.66 0 00.631-.158.622.622 0 00.164-.614l-.762-2.593h0a7.356 7.356 0 001.078-3.66 7.342 7.342 0 00-.907-3.704 7.593 7.593 0 00-2.66-2.795A7.871 7.871 0 0015.704 7.5"
        fill={focused ? theme.pallete.menuIcons.activeColor : "none"}
        stroke="#6E7191"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
