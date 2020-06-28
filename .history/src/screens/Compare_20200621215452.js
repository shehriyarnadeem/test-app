import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Card, Text } from "react-native-elements";
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
        <View style={styles.productContainer}>
          <View style={styles.productBox}>
            <Image source={Close} style={styles.closeButton} />
            <Image source={Product} style={styles.productImage} />
            <Text style={styles.productDetails}>
              Coach leather Sutton baho Dusty Pink Bag Saks fifth avenue $129
            </Text>
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
    alignContent: "center",
  },
});

export default Compare;
