import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { Card, Text } from "react-native-elements";
import ProductBoxPolls from "../components/ProductBoxPolls";
import CardClose from "../../assets/icons/cardClose.png";

const Polls = ({ navigation }) => {
  const DATA3 = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba12",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba12",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba12",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba12",
      title: "First Item",
      // image: Product2,
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Card width="90%" borderRadius={45}>
        <TouchableHighlight
          onPress={() => navigation.navigate("Home")}
          underlayColor="white"
        >
          <Image source={CardClose} style={styles.image} />
        </TouchableHighlight>
        <View style={styles.title}>
          <Text style={styles.titleText}>Which one do you like the best?</Text>

          <Text style={styles.subHeading}>Shared on 05/12/2020</Text>
        </View>

        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={styles.productBoxContainer}
          >
            <ProductBoxPolls />
            <ProductBoxPolls />
            <ProductBoxPolls />
          </ScrollView>
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",
  },
  commentsInput: {
    height: 50,
    borderColor: "#F4F2F2",
    backgroundColor: "#F4F2F2",
    padding: 20,
    alignSelf: "center",
    textAlign: "left",
    borderRadius: 10,
    borderWidth: 0.5,
  },
  subHeading: {
    color: "#4D4C4C",
    fontSize: 11,
  },
  productBoxContainer: {
    justifyContent: "space-evenly",
    display: "flex",

    flexDirection: "row",
  },
  continueButton: {
    width: "65%",
    height: 60,
    borderRadius: 30,

    padding: 5,
    justifyContent: "center",
    alignSelf: "center",
  },
  title: {
    display: "flex",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "whitesmoke",
    width: "100%",
  },
  titleText: {
    fontSize: 24,
    color: "#8755DE",

    textAlign: "center",
    alignSelf: "center",
  },
  image: { display: "flex", alignSelf: "flex-end" },
});

export default Polls;
