import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Forvard } from "../../../assets/profile";
import { EVariants, TextContent } from "../TextContent";
import { styles } from "./profileNavigationButton.styles";
import { SCREENS } from "../../navigation/screens.enum";
export function ProfileInfoNavigate() {
  const navigation = useNavigation();
  return (
    <View
      onTouchStart={() => navigation.navigate(SCREENS.paymentOptions as never)}
      style={styles.profileNavigate}
    >
      <View>
        <TextContent
          text={SCREENS.paymentOptions}
          variant={EVariants.smallTitle}
          style={styles.profileNavigate__title}
        />
        <TextContent
          text="Find out the current, choose a new"
          variant={EVariants.smallDescription}
          style={styles.profileNavigate__desc}
        />
      </View>
      <Image source={Forvard} />
    </View>
  );
}
