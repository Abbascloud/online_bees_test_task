import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  altTitleContainer: { flexDirection: "row", alignItems: "center" },
  altTitleColor: {
    color: theme.typography.colors.alternativeTextColor,
    marginRight: 11,
  },
});
