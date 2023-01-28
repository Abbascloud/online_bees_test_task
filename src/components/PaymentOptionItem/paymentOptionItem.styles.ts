import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderWidth: 1,
    borderColor: theme.pallete.backgrounds.regularBorder,
    borderRadius: 20,
    paddingTop: 17,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 17,
  },
  sale: {
    textAlign: "center",
    color: theme.typography.colors.contrastTextColor,
    backgroundColor: theme.pallete.backgrounds.dedicatedBg,
    width: 53,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 19,
    position: "absolute",
    right: 0,
    top: 0,
  },
  linedText: { textDecorationLine: "line-through", textAlign: "center" },
  title: { textAlign: "center", marginBottom: 8 },
  definitions: { textAlign: "center" },
});
