import { PaymentOption } from "../components";
import { SCREENS } from "../navigation/screens.enum";

export const PAYMENT_OPTIONS: Array<PaymentOption> = [
  {
    summ: 15,
    size: "regular",
    definitions: "Automatic push notifications to performers",
    navigationPath: SCREENS.changePaymentOptions,
  },
  {
    summ: 60,
    sale: 0.25,
    size: "regular",
    definitions: 'Premium status "regular user"',
    navigationPath: SCREENS.changePaymentOptions,
  },
  {
    summ: 30,
    size: "regular",
    definitions: "Premium task design",
    navigationPath: SCREENS.changePaymentOptions,
  },
];
