import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./src/BottomTab";
import Compare from "./src/screens/Compare";
import MyTabs from "./src/Tabs";
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    <BottomTabs />
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
