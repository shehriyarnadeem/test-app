import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./src/BottomTab";
import Compare from "./src/screens/Compare";
import MyTabs from "./src/Tabs";
import { Font } from "expo";
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  React.useEffect(() => [Font.loadA]);
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
