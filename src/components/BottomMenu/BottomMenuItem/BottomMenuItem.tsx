import { View, Image, ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { TextContent, EVariants } from "../../TextContent";
import { styles } from "./bottomMenuItem.styles";

export type BottomMenuItemProps = {
  image: ImageSourcePropType;
  path: string;
  title: string;
};

export function BottomMenuItem({ image, path, title }: BottomMenuItemProps) {
  const navigation = useNavigation();
  return (
    <View
      onTouchStart={() => navigation.navigate(path as never)}
      style={styles.menu_item}
    >
      <Image source={image} />
      <TextContent variant={EVariants.smallDescription} text={title} />
    </View>
  );
}
