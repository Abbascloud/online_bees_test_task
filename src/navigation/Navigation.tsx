import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChangePaymentOptions, PaymentOptions } from "../screens";
import { SCREENS } from "./screens.enum";
import { TabNavigation } from "./TabNavigation";

export function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={SCREENS.home}
          component={TabNavigation}
        />
        <Stack.Screen
          name={SCREENS.paymentOptions}
          component={PaymentOptions}
        />
        <Stack.Screen
          name={SCREENS.changePaymentOptions}
          component={ChangePaymentOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
