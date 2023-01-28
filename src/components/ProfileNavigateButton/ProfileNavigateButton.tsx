import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Forvard } from "../../../assets/profile";
import { EVariants, TextContent } from "../TextContent";
import { styles } from "./profileNavigationButton.styles";
export function ProfileInfoNavigate() {
  const navigation = useNavigation();
  return (
    <View
      onTouchStart={() => navigation.navigate("Payment options" as never)}
      style={styles.profileNavigate}
    >
      <View>
        <TextContent
          text="Payment options"
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
