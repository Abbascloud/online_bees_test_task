import { useFonts } from "expo-font";

import React from "react";
import { Navigation } from "./src/navigation";

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return <Navigation />;
}
