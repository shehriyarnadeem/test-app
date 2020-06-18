import React from "react";
import { View, Text } from "react-native";
const CustomTabs = ({ setTab, tab }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",

        top: -30,
      }}
    >
      <Text
        style={{
          fontSize: 19,
          color: tab == 0 ? "white" : "#dddddd",
          textDecorationLine: tab == 0 ? "underline" : null,
        }}
        onPress={() => console.log("sdsdsd")}
      >
        Maybe
      </Text>
      <Text
        style={{
          fontSize: 19,
          color: tab == 1 ? "white" : "#dddddd",
          textDecorationLine: tab == 1 ? "underline" : null,
        }}
        onPress={() => setTab(1)}
      >
        Purchases
      </Text>
      <Text
        style={{
          fontSize: 19,
          color: tab == 2 ? "white" : "#dddddd",
          textDecorationLine: tab == 2 ? "underline" : null,
        }}
        onPress={() => setTab(2)}
      >
        Keep
      </Text>
    </View>
  );
};

export default CustomTabs;
