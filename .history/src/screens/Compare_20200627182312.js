import React from "react";
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { Card, Text } from "react-native-elements";
import ProductBox from "../components/ProductBox";
import CardClose from "../../assets/icons/cardClose.png";

const Compare = ({ navigation }) => {
  let panelMarginTop = -180;
  let panelMarginTopMinized = -205;
  let headerImageHeight = "50%";

  const screenHeight = Dimensions.get("window").height;
  if (screenHeight > 700 && screenHeight < 800) {
    panelMarginTop = -180;
  } else if (screenHeight < 700) {
    headerImageHeight = "51%";
  } else if (screenHeight >= 800) {
    headerImageHeight = "50%";
  }

  console.log(screenHeight);
  const DATA3 = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b12a",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b12a",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb282ba",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2812ba",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2812ba",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2812ba",
      title: "First Item",
      // image: Product2,
    },
  ];

  const selectedProductDetail = () => {
    navigation.navigate("ProductDetails");
  };
  return (
    <View style={styles.container}>
      <Card width="93%" borderRadius={45}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Compare</Text>
        </View>
        <TouchableHighlight
          onPress={() => navigation.navigate("Home")}
          underlayColor="white"
        >
          <Image source={CardClose} style={styles.image} />
        </TouchableHighlight>

        <FlatList
          title="Compare"
          data={DATA3}
          // keyExtractor={this._keyExtractor} //has to be unique
          renderItem={() => (
            <ProductBox selectedProductDetails={selectedProductDetail} />
          )} //method to render the data in the way you want using styling u need
          horizontal={false}
          numColumns={2}
        />
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
    fontFamily: "GilroyBold",
    alignSelf: "center",
  },
  image: { display: "flex", alignSelf: "flex-end" },
});

export default Compare;
