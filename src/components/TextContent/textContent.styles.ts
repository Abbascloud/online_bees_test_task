import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  mainTitle: {
    fontWeight: theme.typography.weights.bold,
    color: theme.typography.colors.textColor,
    fontFamily: theme.typography.font,
    fontSize: theme.typography.fontSize.h1,
  },
  smallTitle: {
    fontWeight: theme.typography.weights.regular,
    fontFamily: theme.typography.font,
    color: theme.typography.colors.textColor,
    fontSize: theme.typography.fontSize.regular,
  },
  mediumTitle: {
    fontSize: theme.typography.fontSize.large,
    fontFamily: theme.typography.font,
    color: theme.typography.colors.textColor,
    fontWeight: theme.typography.weights.regular,
  },
  mediumDescription: {
    color: theme.typography.colors.secondaryTextColor,
    fontSize: theme.typography.fontSize.regular,
    lineHeight: 25,
    fontFamily: theme.typography.font,
    fontWeight: theme.typography.weights.small,
  },
  smallDescription: {
    color: theme.typography.colors.secondaryTextColor,
    fontSize: theme.typography.fontSize.small,
    lineHeight: 25,
    fontFamily: theme.typography.font,
    fontWeight: theme.typography.weights.small,
  },
});
