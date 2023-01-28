import { Text, StyleSheet, TextStyle } from "react-native";
import { styles } from "./textContent.styles";

export enum EVariants {
  mainTitle = "mainTitle",
  smallDescription = "smallDescription",
  smallTitle = "smallTitle",
  mediumDescription = "mediumDescription",
  mediumTitle = "mediumTitle",
}

type TextContentProps = {
  text: string;
  variant: EVariants;
  style?: TextStyle;
};

export function TextContent({ text, variant, style }: TextContentProps) {
  return <Text style={{ ...styles[variant], ...style }}>{text}</Text>;
}
