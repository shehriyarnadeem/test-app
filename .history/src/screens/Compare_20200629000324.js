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

  const DATA3 = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-43ad53abb28dfsb12a",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed53-3ad53sabb28bdf12a",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed53-3ad53sabb28bdf12a",
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
        <TouchableHighlight
          onPress={() => navigation.navigate("Home")}
          underlayColor="white"
        >
          <Image source={CardClose} style={styles.image} />
        </TouchableHighlight>

        <FlatList
          ListHeaderComponent={
            <View style={styles.title}>
              <Text style={styles.titleText}>Compare</Text>
            </View>
          }
          data={DATA3}
          // keyExtractor={this._keyExtractor} //has to be unique
          renderItem={() => (
            <ProductBox selectedProductDetails={selectedProductDetail} />
          )} //method to render the data in the way you want using styling u need
          showsHorizontalScrollIndicator={false}
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
    // bottom: 20,
    fontFamily: "GilroyBold",
    alignSelf: "center",
  },
  image: { display: "flex", alignSelf: "flex-end" },
});

export default Compare;
