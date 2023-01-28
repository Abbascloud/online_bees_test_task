import { View, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextContent, EVariants } from "../TextContent";
import { styles } from "./paymentOptionItem.styles";

export type PaymentOption = {
  summ: number;
  sale?: number;
  size: "auto" | "regular";
  definitions?: string;
  style?: ViewStyle;
  navigationPath?: string;
};

export function PaymentOptionItem({
  summ,
  sale,
  definitions,
  size,
  style,
  navigationPath,
}: PaymentOption) {
  const navigation = useNavigation();

  const getCurrentSumm = (): string => {
    if (sale) {
      return (summ - summ * sale).toString();
    }
    return summ.toString();
  };

  const makeConteinerStyles = (): ViewStyle => {
    const currentStyles = sale
      ? {
          ...style,
          ...styles.container,
          borderColor: "#5F2EEA",
        }
      : { ...style, ...styles.container };

    if (size === "regular") {
      return { ...currentStyles, minHeight: 116 };
    }

    return currentStyles;
  };

  const onTouchHeandler = () => {
    if (navigationPath) {
      navigation.navigate(navigationPath as never);
    }
  };

  return (
    <View onTouchStart={onTouchHeandler} style={makeConteinerStyles()}>
      {sale && (
        <>
          <TextContent
            style={styles.linedText}
            variant={EVariants.smallDescription}
            text={`$${summ}/in month`}
          />
          <TextContent
            style={styles.sale}
            variant={EVariants.smallDescription}
            text={`${sale * 100}%`}
          />
        </>
      )}
      <TextContent
        style={styles.title}
        variant={EVariants.mediumTitle}
        text={`$${getCurrentSumm()}/in month`}
      />
      {definitions && (
        <TextContent
          style={styles.definitions}
          variant={EVariants.mediumDescription}
          text={definitions}
        />
      )}
    </View>
  );
}
