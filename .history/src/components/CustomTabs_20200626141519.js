import React from "react";
import { View, Text, Image } from "react-native";
import Underline from "../../assets/icons/rectangle.png";
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
      <View>
        <Text
          style={{
            fontSize: 19,
            color: tab == 0 ? "#F1F2F2" : "#dddddd",
          }}
          onPress={() => setTab(0)}
        >
          Maybe
        </Text>
        <Image source={Underline} />
      </View>
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
