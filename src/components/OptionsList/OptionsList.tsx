import { View } from "react-native";
import { styles } from "./optionList.styles";
import { OptionItem, OptionsListItem } from "./OptionListItem";

type OptionsListProps = {
  options: Array<OptionItem>;
};

export function OptionsList({ options }: OptionsListProps) {
  return (
    <View>
      {options.map((option) => (
        <OptionsListItem
          style={styles.item}
          key={option.description}
          image={option.image}
          description={option.description}
        />
      ))}
    </View>
  );
}
