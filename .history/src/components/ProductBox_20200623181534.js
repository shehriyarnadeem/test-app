import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Product from "../../assets/products/product.png";
import Close from "../../assets/icons/close.png";
import CameraIcon from "../../assets/icons/cameraicon.png";
const ProductBox = ({ details }) => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.productBox}>
        <Image source={Close} style={styles.closeButton} />
        <Image source={Product} style={styles.productImage} />
        <Text style={styles.productDetails}>
          Coach leather Sutton baho Dusty Pink Bag Saks fifth avenue $129
        </Text>
        <View
          style={{
            position: "relative",
            top: 20,
          }}
        >
          <Image source={CameraIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productBox: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  productImage: {
    height: 130,
    width: 130,
    padding: 10,
  },
  productContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  productDetails: {
    textAlign: "left",
    fontSize: 12,
    color: "#4D4C4C",
    lineHeight: 14,
    top: 6,
  },

  closeButton: {
    position: "relative",
    left: 115,
    top: 15,
    zIndex: 1000000,
  },
});

export default ProductBox;
