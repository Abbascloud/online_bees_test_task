import { Cross, Points, ThumbUp, Settings, Premium } from "../../assets";
import { OptionItem } from "../components";

export const OPTIONS: Array<OptionItem> = [
  {
    image: ThumbUp,
    description: "Raising an ad once a week, but no more than 2 ads per week",
  },
  {
    image: Settings,
    description:
      "The ability to sort employees by rating and number of reviews",
  },
  {
    image: Cross,
    description: "Partial deactivation of ads",
  },
  {
    image: Premium,
    description: 'Premium status "regular user" after 5 completed transactions',
  },
  {
    image: Points,
    description: "Activity points system",
  },
];
