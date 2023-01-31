import { View } from "react-native";

import { ProfileInfo, ProfileInfoNavigate } from "../../../components";

import { styles } from "./profile.styles";

export function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ProfileInfo
          userName="Dmitry Saitov"
          accauntStatus="verified"
          reviewCount={0}
          userStatus="Beginner"
        />
        <ProfileInfoNavigate />
      </View>
    </View>
  );
}
