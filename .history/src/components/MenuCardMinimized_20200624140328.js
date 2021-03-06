import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import { Card, Text } from "react-native-elements";
import UserIcon from "../../assets/icons/icons-13.png";
const MenuCard = ({ showChecboxHandler }) => {
  const handleCheckbox = (type) => {
    showChecboxHandler(type);
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
        elevation: 5,
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
              bottom: 10,
              width: 90,
            }}
          >
            <Image source={UserIcon} style={styles.middleCardIcon} />
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
              bottom: 10,
              width: 90,
            }}
          >
            <Image source={UserIcon} style={styles.middleCardIcon} />
          </View>
        </TouchableHighlight>
        <View>
          <Image source={UserIcon} style={styles.middleCardIcon} />
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

  middleCardIcon: {
    height: 30,
    // bottom: 10,
    width: 30,
    // alignSelf: "center",
  },
});
export default MenuCard;
