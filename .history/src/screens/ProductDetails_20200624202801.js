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
import QuestionMark from "../../assets/icons/questionMark.png";
import Lock from "../../assets/icons/icons-05.png";
import Refresh from "../../assets/icons/icons-07.png";

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
      <Card height="70%" borderRadius="25%">
        <TouchableHighlight onPress={() => navigation.navigate("Home")}>
          <Image source={CardClose} style={styles.image} />
        </TouchableHighlight>
        <View style={styles.title}>
          <Text style={styles.titleText}>Coach</Text>
        </View>
        <ProductDetailBox />
        <View style={styles.footerContainer}>
          <Text style={{ fontSize: 16, color: "#8755DE" }}>
            4 days left to RQ
          </Text>
          <View style={styles.footerItems}>
            <Image source={QuestionMark} />
            <Image source={Lock} style={styles.footerImages} />
            <Image source={Refresh} style={styles.footerImages} />
          </View>
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
    color: "black",
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
  footerItems: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
  },

  footerImages: {
    marginLeft: 10,
    height: 42,
    width: 42,
  },
});

export default ProductDetails;
