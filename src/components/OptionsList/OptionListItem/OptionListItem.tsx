import { View, Image, ImageSourcePropType, ViewStyle } from "react-native";

import { TextContent, EVariants } from "../../TextContent";
import { styles } from "./OptionListItem.styles";

export type OptionItem = {
  description: string;
  image: ImageSourcePropType;
  style?: ViewStyle;
};

export function OptionsListItem({ description, image, style }: OptionItem) {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Image style={styles.image} source={image} />
      <TextContent
        style={styles.description}
        variant={EVariants.smallDescription}
        text={description}
      />
    </View>
  );
}
