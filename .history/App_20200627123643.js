import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import MyTabs from "./src/Tabs";
import { useFonts } from "@use-expo/font";
export default function App() {
  let [fontsLoaded] = useFonts({
    sans_serif: require("./assets/fonts/Gilroy/Gilroy-Medium.ttf"),
  });

  return (
    <>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
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
