import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  ChangePaymentTitle,
  PaymentOptionItem,
  OptionsList,
  Button,
} from "../../components";

import { styles } from "./changePaymentOptions.style";
import { OPTIONS } from "../../const";

export function ChangePaymentOptions() {
  const navigation = useNavigation();

  const buttonHeandler = () => {
    navigation.navigate("Home" as never);
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
