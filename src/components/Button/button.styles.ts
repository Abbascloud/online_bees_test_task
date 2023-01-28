import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    paddingTop: 16,
    paddingBottom: 16,
  },
  text: {
    color: theme.typography.colors.contrastTextColor,
    textAlign: "center",
  },
});
export const gradient = theme.pallete.backgrounds.gradientBg;
