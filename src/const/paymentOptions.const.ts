import { PaymentOption } from "../components";

export const PAYMENT_OPTIONS: Array<PaymentOption> = [
  {
    summ: 15,
    size: "regular",
    definitions: "Automatic push notifications to performers",
    navigationPath: "Change payment options",
  },
  {
    summ: 60,
    sale: 0.25,
    size: "regular",
    definitions: 'Premium status "regular user"',
    navigationPath: "Change payment options",
  },
  {
    summ: 30,
    size: "regular",
    definitions: "Premium task design",
    navigationPath: "Change payment options",
  },
];
