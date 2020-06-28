import React from "react";
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { Card, Text } from "react-native-elements";
import ProductDetailBox from "../components/ProductDetailBox";
import CardClose from "../../assets/icons/cardClose.png";

const ProductDetails = ({ navigation }) => {
  const DATA3 = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b12a",
      title: "First Item",
      // image: Product2,
    },
  ];
  return (
    <View style={styles.container}>
      <Card height="70%" borderRadius="45%">
        <TouchableHighlight onPress={() => navigation.navigate("Home")}>
          <Image source={CardClose} style={styles.image} />
        </TouchableHighlight>
        <View style={styles.title}>
          <Text style={styles.titleText}>Coach</Text>
        </View>
        <ProductDetailBox />
        <View style={styles.footerContainer}>
          <Text>4 days left to RQ</Text>
          <View></View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",
  },
  title: {
    display: "flex",
    padding: 5,
    justifyContent: "center",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "whitesmoke",

    width: "100%",
  },

  titleText: {
    fontSize: 24,
    color: "#8755DE",
    bottom: 20,
    alignSelf: "center",
  },
  image: { display: "flex", alignSelf: "flex-end" },

  footerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default ProductDetails;
