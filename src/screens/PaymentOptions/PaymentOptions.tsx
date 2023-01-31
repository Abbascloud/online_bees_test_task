import { View } from "react-native";

import { TextContent, EVariants, PaymentOptionItem } from "../../components";
import { PAYMENT_OPTIONS } from "../../const";

import { styles } from "./paymentOptions.styles";
export function PaymentOptions() {
  return (
    <View style={styles.container}>
      <TextContent variant={EVariants.mainTitle} text="Payment options:" />
      <TextContent
        variant={EVariants.mediumDescription}
        style={styles.description}
        text="By subscribing, you will receive a number of benefits at a low cost. you can choose the most suitable subscription option for yourself."
      />
      {PAYMENT_OPTIONS.map((option) => (
        <PaymentOptionItem
          key={option.definitions}
          size={option.size}
          style={styles.item}
          navigationPath={option.navigationPath}
          definitions={option.definitions}
          summ={option.summ}
          sale={option.sale}
        />
      ))}
    </View>
  );
}
