import React from "react";
import { View, Image, StyleSheet, TextInput, Button } from "react-native";
import { Text } from "react-native-elements";
import ImagePicker from "react-native-image-picker";
import { TouchableHighlight } from "react-native-gesture-handler";
import Product from "../../assets/products/product.png";
import Close from "../../assets/icons/close.png";
import CustomButton from "./CustomButton";

const ProductBox = ({ details, icon, textInput, selectedProductDetails }) => {
  const handlePhoto = () => {
    console.log("sds");
    // const options = {};
    // ImagePicker.launchImageLibrary(options, (response) => {
    //   console.log("response", response);
    // });
  };
  return (
    <TouchableHighlight onPress={selectedProductDetails} underlayColor="white">
      <View style={styles.productContainer}>
        <View style={styles.productBox}>
          <Image source={Close} style={styles.closeButton} />
          <Image source={Product} style={styles.productImage} />

          <Text style={styles.productDetails}>
            Coach leather Sutton baho Dusty Pink Bag Saks fifth avenue $129
          </Text>

          {icon ? (
            // <View
            //   style={{
            //     paddingTop: 30,
            //   }}
            // >
            <CustomButton
              fontSize={17}
              color="white"
              title="Share"
              clickHandler={handlePhoto}
            />
          ) : // </View>
          null}

          {textInput ? (
            <View
              style={{
                paddingTop: 10,
              }}
            >
              <TextInput
                style={styles.commentsInput}
                width={130}
                height={40}
                // onChangeText={(text) => onChangeText(text)}
                placeholder="Add comment"
                // value={value}
              />
            </View>
          ) : null}
        </View>
      </View>
    </TouchableHighlight>
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
});

export default ProductBox;
