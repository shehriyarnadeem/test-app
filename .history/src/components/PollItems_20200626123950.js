import React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import ShareIcon from "../../assets/icons/icons-07.png";
import Background from "../../assets/icons/shareicon.png";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
const PollItems = ({ image, description, navigateHandler }) => {
  return (
    <>
      <TouchableOpacity
        // underlayColor="white"
        onPress={() => navigateHandler("Polls")}
      >
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

          <ImageBackground source={Background} style={styles.sideIconImage}>
            <Image source={ShareIcon} style={{ sideIconImage }} />
          </ImageBackground>
        </View>
      </TouchableOpacity>
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
