import { Slot } from "expo-router";
import * as React from "react";
import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { name as appName } from "../app.json";

export default function Layout() {
  return (
    <PaperProvider>
      <Slot />
    </PaperProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
