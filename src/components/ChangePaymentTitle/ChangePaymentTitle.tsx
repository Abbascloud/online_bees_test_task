import { View, Image } from "react-native";

import { Fire } from "../../../assets/changePayment";
import { TextContent, EVariants } from "../TextContent";
import { styles } from "./changePaymentTitle.styles";

export function ChangePaymentTitle() {
  return (
    <>
      <TextContent variant={EVariants.mainTitle} text="You payment options:" />
      <View style={styles.altTitleContainer}>
        <TextContent
          style={styles.altTitleColor}
          variant={EVariants.mainTitle}
          text="Hot Work"
        />
        <Image source={Fire} />
      </View>
    </>
  );
}
