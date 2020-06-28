import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, TextInput } from "react-native";
import { Text } from "react-native-elements";
import Product from "../../assets/products/product.png";
import Close from "../../assets/icons/close.png";
import LockIcon from "../../assets/icons/icons-05.png";
import RefreshIcon from "../../assets/icons/icons-07.png";
import CollapseBox from "../components/CollapseBox";

const ProductBoxPolls = ({ details, icons }) => {
  return (
    <>
      <View style={styles.productContainer}>
        <View style={styles.productBox}>
          <Image source={Close} style={styles.closeButton} />
          <Image source={Product} style={styles.productImage} />
          <Text style={styles.productDetails}>
            Coach leather Sutton baho Dusty Pink Bag Saks fifth avenue $129
          </Text>
          <View
            style={{
              paddingTop: 10,
              display: "flex",

              flexDirection: "row",
            }}
          >
            <Image source={LockIcon} style={styles.iconImage} />
            <Image
              source={RefreshIcon}
              style={[styles.iconImage, { left: 5 }]}
            />
          </View>
          <View style={{ paddingTop: 10 }}>
            <CollapseBox title="Return" percentage="3%" />
            <CollapseBox title="Keep" percentage="3%" />
          </View>

          {/* {textInput ? (
          <View
            style={{
              paddingTop: 5,
              left: -2,
            }}
          >
            <TextInput
              style={styles.commentsInput}
              width={105}
              height={35}
              multiline={true}
              // onChangeText={(text) => onChangeText(text)}
              placeholder="Add comment"
              // value={value}
            />
          </View>
        ) : null} */}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  productBox: {
    display: "flex",

    flexDirection: "column",
  },
  productImage: {
    height: 130,
    width: 130,
    padding: 10,
  },
  iconImage: {
    height: 30,
    width: 30,
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
    padding: 15,
  },
  productDetails: {
    textAlign: "left",
    fontSize: 12,
    color: "#4D4C4C",

    width: 100,
    lineHeight: 17,
    // top: 6,
  },

  closeButton: {
    position: "relative",
    left: 115,
    top: 15,
    zIndex: 1000000,
  },

  listItemTitle: {
    color: "#8755DE",
    fontFamily: "GilroyBold",
    fontSize: 16,
  },
  listItemText: {
    textAlign: "left",
    color: "#8755DE",
    fontSize: 16,
    fontFamily: "GilroyMedium",
    padding: 1,
  },
});

export default ProductBoxPolls;
