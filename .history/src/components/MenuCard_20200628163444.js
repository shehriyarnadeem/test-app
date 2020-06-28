import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import { Card, Text } from "react-native-elements";
import UserIcon from "../../assets/icons/icons-13.png";
import ShareActive from "../../assets/icons/ShareActive.png";
import ShareInActive from "../../assets/icons/ShareInActive.png";
import BackIcon from "../../assets/icons/backIcon.png";
import PollActive from "../../assets/icons/PollActive.png";
import PollInActive from "../../assets/icons/PollInActive.png";
import CompareActive from "../../assets/icons/CompareActive.png";
import CompareInActive from "../../assets/icons/CompareInActive.png";
const MenuCard = ({
  showChecboxHandler,
  activeScreen,
  setScreen,
  setTab,
  menuCardHeight,
}) => {
  const handleCheckbox = (type) => {
    if (type === "polls") {
      setTab(3);
      setScreen(type);
      showChecboxHandler(null);
    } else {
      showChecboxHandler(type);
      setScreen(type);
    }
  };
  return (
    <Card
      width="100%"
      height={menuCardHeight}
      containerStyle={{
        shadowColor: "grey",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 2.3,
        shadowRadius: 2,
        elevation: 3,
        backgroundColor: "white",
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
          <Image source={BackIcon} style={{ height: 10, width: 10 }} />
          <View
            style={{
              borderRightColor: "#dddddd",
              borderRightWidth: 2,
              paddingRight: 10,
            }}
          >
            <Image
              source={activeScreen === "share" ? ShareActive : ShareInActive}
              style={styles.middleCardIcon}
            />

            <Text
              style={{
                ...styles.middleCardText,
                color: activeScreen === "share" ? "#8755DE" : "grey",
              }}
            >
              Share with friends
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => handleCheckbox("compare")}
          underlayColor="white"
        >
          <View
            style={{
              left: -10,
              display: "flex",
              justifyContent: "flex-start",
              alignSelf: "flex-start",
              alignItems: "flex-start",
              borderRightColor: "#dddddd",
              borderRightWidth: 2,
              paddingRight: 20,
            }}
          >
            <Image
              source={
                activeScreen === "compare" ? CompareActive : CompareInActive
              }
              style={styles.middleCardIcon}
            />

            <Text
              style={{
                ...styles.middleCardText,
                color: activeScreen === "compare" ? "#8755DE" : "grey",
              }}
            >
              Compare
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => handleCheckbox("polls")}
          underlayColor="white"
        >
          <View style={{ left: -10 }}>
            <Image
              source={activeScreen === "polls" ? PollActive : PollInActive}
              style={styles.middleCardIcon}
            />

            <Text
              style={{
                ...styles.middleCardText,
                color: activeScreen === "polls" ? "#8755DE" : "grey",
              }}
            >
              Polls
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  middleCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: -25,
  },

  middleCardText: {
    fontSize: 13,
    fontFamily: "GilroyMedium",
    padding: 5,
    textAlign: "center",
  },
  middleCardIcon: {
    alignSelf: "center",
    padding: 5,
  },
});
export default MenuCard;
