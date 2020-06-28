import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import { Card, Text } from "react-native-elements";
import UserIcon from "../../assets/icons/icons-13.png";
import ShareActive from "../../assets/icons/ShareActive.png";
import ShareInActive from "../../assets/icons/ShareInActive.png";
import PollActive from "../../assets/icons/PollActive.png";
import PollInActive from "../../assets/icons/PollInActive.png";
import CompareActive from "../../assets/icons/CompareActive.png";
import CompareInActive from "../../assets/icons/CompareInActive.png";
const MenuCardMinimized = ({ showChecboxHandler, activeScreen, setScreen }) => {
  const handleCheckbox = (type) => {
    showChecboxHandler(type);
    setScreen(type);
  };
  return (
    <Card
      width="100%"
      height={40}
      containerStyle={{
        shadowColor: "grey",
        shadowOffset: { width: 4, height: 2 },
        shadowOpacity: 2.8,
        shadowRadius: 2,
        elevation: 0,
        borderTopColor: "transparent",

        // shadowColor: "rgba(0,0,0, 0.0)", // Remove Shadow IOS
        // shadowOffset: { height: 0, width: 0 },
        // shadowOpacity: 0,
        // shadowRadius: 0,
        // elevation: 0, // This is for Android
      }}
    >
      <View style={styles.middleCard}>
        <TouchableHighlight
          onPress={() => handleCheckbox("share")}
          underlayColor="white"
        >
          <View
            style={{
              borderRightColor: "#dddddd",
              borderRightWidth: 2,
              paddingRight: 40,
            }}
          >
            <Image
              source={activeScreen === "share" ? ShareActive : ShareInActive}
              style={styles.middleCardIcon}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => handleCheckbox("compare")}
          underlayColor="white"
        >
          <View
            style={{
              borderRightColor: "#dddddd",
              borderRightWidth: 2,
              paddingRight: 50,
            }}
          >
            <Image
              source={
                activeScreen === "compare" ? CompareActive : CompareInActive
              }
              style={styles.middleCardIcon}
            />
          </View>
        </TouchableHighlight>
        <View style={{ left: -20 }}>
          <Image
            source={activeScreen === "poll" ? PollActive : PollInActive}
            style={styles.middleCardIcon}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  middleCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: -40,
  },

  middleCardIcon: {
    // alignSelf: "center",
    // padding: 5,
  },
});
export default MenuCardMinimized;
