import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Compare from "./src/screens/Compare";
import MyTabs from "./src/Tabs";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <MyTabs />

      <Stack.Screen name="Compare" component={Compare} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
