import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./src/BottomTab";
import Compare from "./src/screens/Compare";
import GilroyMedium from "./assets/fonts/Gilroy/Gilroy-Medium.ttf";
import MyTabs from "./src/Tabs";
import { Font } from "expo";
export default function App() {
  let [fontsLoaded] = useFonts({
    sans_serif: require("../assets/fonts/sansserif/sans.otf"),
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
