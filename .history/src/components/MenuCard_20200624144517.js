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
const MenuCard = ({ showChecboxHandler }) => {
  const handleCheckbox = (type) => {
    showChecboxHandler(type);
  };
  return (
    <Card
      width="100%"
      height={60}
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
              paddingRight: 20,
            }}
          >
            <Image source={ShareInActive} style={styles.middleCardIcon} />

            <Text style={styles.middleCardText}>Share with friends</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => handleCheckbox("compare")}
          underlayColor="white"
        >
          <View
            style={{
              left: -20,
              borderRightColor: "#dddddd",
              borderRightWidth: 2,
              paddingRight: 20,
            }}
          >
            <Image source={CompareInActive} style={styles.middleCardIcon} />

            <Text style={styles.middleCardText}>Compare</Text>
          </View>
        </TouchableHighlight>
        <View style={{ left: -20 }}>
          <Image source={PollInActive} style={styles.middleCardIcon} />

          <Text style={styles.middleCardText}>Polls</Text>
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
    marginLeft: -20,
  },

  middleCardText: {
    fontSize: 13,
    color: "grey",
    textAlign: "center",
  },
  middleCardIcon: {
    alignSelf: "center",
    padding: 5,
  },
});
export default MenuCard;
