import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 49,
    backgroundColor: theme.pallete.backgrounds.background,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingLeft: 31,
    paddingRight: 31,
  },
});
