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
            alignSelf: "center",
            padding: 2,
            color: tab == 0 ? "#F1F2F2" : "#dddddd",
          }}
          onPress={() => setTab(0)}
        >
          Maybe
        </Text>
        {tab === 0 ? <Image source={Underline} /> : null}
      </View>
      <View>
        <Text
          style={{
            fontSize: 19,

            padding: 2,
            color: tab == 1 ? "#F1F2F2" : "#dddddd",
          }}
          onPress={() => setTab(1)}
        >
          Purchases
        </Text>
        {tab === 1 ? (
          <Image source={Underline} style={{ alignSelf: "center" }} />
        ) : null}
      </View>
      <View>
        <Text
          style={{
            fontSize: 19,
            alignSelf: "center",
            padding: 4,
            color: tab == 2 ? "#F1F2F2" : "#dddddd",
          }}
          onPress={() => setTab(2)}
        >
          Keep
        </Text>
        {tab === 2 ? <Image source={Underline} /> : null}
      </View>
    </View>
  );
};

export default CustomTabs;
