import { StyleSheet, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextContent, EVariants } from "../TextContent";
import { styles, gradient } from "./button.styles";
type ButtonProps = {
  text: string;
  style: ViewStyle;
  heandler: () => void;
};

export function Button({ text, style, heandler }: ButtonProps) {
  return (
    <LinearGradient
      onTouchStart={heandler}
      colors={gradient}
      start={{ x: 0.9, y: 0.4 }}
      end={{ x: 0.3, y: 0.7 }}
      style={{ ...style, ...styles.button }}
    >
      <TextContent
        style={styles.text}
        variant={EVariants.smallDescription}
        text={text}
      />
    </LinearGradient>
  );
}
