import { View } from "react-native";

import { ProfileInfo, BottomMenu, ProfileInfoNavigate } from "../../components";
import { MENU_ITEMS } from "../../const/bottomMenuItem.const";
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
      <BottomMenu menuItems={MENU_ITEMS} />
    </View>
  );
}
