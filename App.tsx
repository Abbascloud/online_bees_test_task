import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Profile,
  PaymentOptions,
  ChangePaymentOptions,
  Chat,
  Work,
  Task,
} from "./src/screens";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Payment options" component={PaymentOptions} />
        <Stack.Screen
          name="Change payment options"
          component={ChangePaymentOptions}
        />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Work" component={Work} />
        <Stack.Screen name="Task" component={Task} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
