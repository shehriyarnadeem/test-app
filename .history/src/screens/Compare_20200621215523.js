import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Card, Text } from "react-native-elements";
import ProductBox from "../components/ProductBox";
import Product from "../../assets/products/product.png";
import Close from "../../assets/icons/close.png";

const Compare = () => {
  return (
    <View style={styles.container}>
      <Card>
        <View
          style={{
            display: "flex",
            padding: 5,
            justifyContent: "center",
            alignSelf: "center",
            fontFamily: "Gilroy-Bold",
          }}
        >
          <Text style={{ fontSize: 24, color: "#8755DE" }}>Compare</Text>
        </View>
        <ProductBox />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default Compare;
