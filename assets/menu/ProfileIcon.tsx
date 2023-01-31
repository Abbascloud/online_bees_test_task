import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconsProps } from "./icons.type";
import { theme } from "../../src/theme";

export function SvgComponent({ focused }: IconsProps) {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none">
      <Path
        d="M18.455 18.047C16.864 17.555 14.51 17 12 17c-2.51 0-4.863.555-6.455 1.047-1.297.4-2.171 1.548-2.38 2.89L3 22h18l-.166-1.064c-.208-1.34-1.082-2.49-2.379-2.89zM12 12.5a5 5 0 100-10 5 5 0 000 10z"
        fill={
          focused
            ? theme.pallete.menuIcons.activeColor
            : theme.pallete.menuIcons.defaultColor
        }
        stroke={
          focused
            ? theme.pallete.menuIcons.activeColor
            : theme.pallete.menuIcons.defaultborder
        }
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
