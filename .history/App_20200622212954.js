import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Compare from "./src/screens/Compare";
import MyTabs from "./src/Tabs";
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />

      <Stack.Navigator>
        <Stack.Screen name="Compare" component={Compare} />
      </Stack.Navigator>
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
