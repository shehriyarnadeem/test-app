import React from "react";
import { View, Image, StyleSheet, TextInput } from "react-native";
import { Text } from "react-native-elements";
import Product from "../../assets/products/product.png";
import Close from "../../assets/icons/close.png";
import { TouchableHighlight } from "react-native-gesture-handler";

const ProductDetailBox = ({
  details,
  icon,
  textInput,
  selectedProductDetails,
}) => {
  return (
    <TouchableHighlight onPress={selectedProductDetails} underlayColor="white">
      <View style={styles.productContainer}>
        <View style={styles.productBox}>
          <Image source={Product} style={styles.productImage} />

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",

              left: 10,
            }}
          >
            <Text style={styles.name}>
              Coach leather Sutton baho Dusty Pink Bag
            </Text>
            <Text style={styles.productDetails}>
              Date of Purchase: 3/30, 2020
            </Text>
            <Text style={styles.productDetails}>Store coach: Coach</Text>
            <Text style={styles.productDetails}>Price: $129</Text>
            <Text style={styles.productDetails}>Credit Card: *****123232</Text>
            <Text style={styles.productDetails}>Order: Coach</Text>
            <Text style={styles.productDetails}>Price: $129</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  productBox: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
  },
  productImage: {
    height: 130,
    width: 130,
    padding: 10,
  },
  commentsInput: {
    height: 40,
    borderColor: "#F4F2F2",
    backgroundColor: "#F4F2F2",

    textAlign: "center",
    borderRadius: 10,
    borderWidth: 0.5,
  },
  productContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,

    top: 10,
  },
  name: {
    fontSize: 17,

    color: "#504F4F",
  },

  productDetails: {
    fontSize: 14,

    color: "#504F4F",
  },

  closeButton: {
    position: "relative",
    left: 115,
    top: 15,
    zIndex: 1000000,
  },
});

export default ProductDetailBox;
