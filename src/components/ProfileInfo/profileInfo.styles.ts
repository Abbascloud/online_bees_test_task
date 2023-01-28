import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  profileInfo: {
    paddingBottom: 24,
    flexDirection: "row",
  },
  profileInfo_avatar: { marginRight: 16 },
  profileInfo_name: {
    marginBottom: 4,
  },
  profileInfo_descWrapper: {
    flexDirection: "row",
    marginBottom: 4,
    alignItems: "center",
  },
  profileInfo_status: {
    backgroundColor: theme.pallete.backgrounds.successBg,
    borderRadius: 8,
    color: theme.typography.colors.successTextColor,
    height: 24,
    paddingRight: 8,
    paddingLeft: 8,
    marginLeft: "auto",
  },

  profileInfo_descImg: {
    marginRight: 5,
  },
  profileInfo_revieCount: {
    marginRight: 8,
  },
});
