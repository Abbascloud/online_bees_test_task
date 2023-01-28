import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  ChangePaymentTitle,
  PaymentOptionItem,
  OptionsList,
  Button,
} from "../../components";
import { OPTIONS } from "../../const/optionList.const";
import { styles } from "./changePaymentOptions.style";

export function ChangePaymentOptions() {
  const navigation = useNavigation();

  const buttonHeandler = () => {
    navigation.navigate("Profile" as never);
  };

  return (
    <View style={styles.container}>
      <ChangePaymentTitle />
      <PaymentOptionItem style={styles.paymentOption} summ={35} size="auto" />
      <OptionsList options={OPTIONS} />
      <Button
        heandler={buttonHeandler}
        style={styles.button}
        text="Change payment options"
      />
    </View>
  );
}
