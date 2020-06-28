import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import RefreshIcon from "../../assets/icons/icons-07.png";
import LockIcon from "../../assets/icons/icons-05.png";
const PollItems = ({ image, description }) => {
  return (
    <>
      <View style={styles.itemBox}>
        <View style={styles.items}>
          <Image source={image} style={styles.productImage} />
          <View
            style={{ display: "flex", flexDirection: "column", padding: 5 }}
          >
            <Text style={styles.productDesc}>
              Which one do you like the best?
            </Text>
            <Text style={styles.shared}>Share on 05/12/2020</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          // alignSelf: "center",
          flexDirection: "row",
        }}
      >
        <Text style={styles.daysLeft}>5 votes</Text>
        <View style={{ display: "flex", justifyContent: "flex-end" }}>
          <Image source={LockIcon} style={styles.sideIconImage} />
        </View>
      </View>
    </>
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
  },
  side: {
    display: "flex",
    flexDirection: "row",
  },
  sideItems: {
    display: "flex",

    flexDirection: "row",
    alignSelf: "flex-end",
  },

  sideIconImage: {
    height: 30,
    width: 30,
  },
  productDesc: {
    fontSize: 14,
    padding: 2,
    color: "#4D4C4C",
  },
  shared: {
    fontSize: 13,
    padding: 2,
    color: "#4D4C4C",
  },

  productImage: {
    height: 80,
    width: 80,
  },
});

export default PollItems;
