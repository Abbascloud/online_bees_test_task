import { View, StyleSheet } from "react-native";
import {
  BottomMenuItemProps,
  BottomMenuItem,
} from "./BottomMenuItem/BottomMenuItem";
import { styles } from "./buttomMenu.styles";
export function BottomMenu({
  menuItems,
}: {
  menuItems: Array<BottomMenuItemProps>;
}) {
  return (
    <View style={styles.container}>
      {menuItems.map((item) => (
        <BottomMenuItem
          key={item.title}
          image={item.image}
          path={item.path}
          title={item.title}
        />
      ))}
    </View>
  );
}
