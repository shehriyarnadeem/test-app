import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import RefreshIcon from "../../assets/icons/icons-07.png";
import LockIcon from "../../assets/icons/icons-05.png";
const PollItems = ({ image, description }) => {
  return (
    <View style={styles.itemBox}>
      <View style={styles.items}>
        <Image source={image} style={styles.productImage} />
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={styles.productDesc}>
            Which one do you like the best?
          </Text>
          <Text style={styles.productDesc}>Share on 05/12</Text>
        </View>
      </View>
      <View style={styles.side}>
        <Text style={styles.daysLeft}>4 days left to RQ</Text>
        <View style={styles.sideItems}>
          <Image source={LockIcon} style={styles.sideIconImage} />
          <Image source={RefreshIcon} style={styles.sideIconImage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },

  itemBox: {
    padding: 5,
    flex: 1,

    flexDirection: "row",
    borderTopWidth: 2,

    justifyContent: "space-between",
    borderTopColor: "whitesmoke",
  },

  daysLeft: {
    fontSize: 13,
    color: "black",
    padding: 10,
  },
  items: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  side: {
    display: "flex",
    flexDirection: "column",
  },
  sideItems: {
    display: "flex",

    flexDirection: "row",
    alignSelf: "flex-end",
  },

  sideIconImage: {
    height: 30,
    width: 30,
    marginLeft: 5,
  },
  productDesc: {
    fontSize: 13,
    color: "#1a1c1b",
  },

  productImage: {
    height: 80,
    width: 80,
  },
});

export default PollItems;
