import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Card, Text } from "react-native-elements";
import Product from "../../assets/products/product.png";
const Compare = () => {
  return (
    <View>
      <Card>
        <Text>Compare</Text>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Image source={Product} style={styles.productImage} />
          <Image source={Product} style={styles.productImage} />
          <Image source={Product} style={styles.productImage} />
          <Image source={Product} style={styles.productImage} />
          <Image source={Product} style={styles.productImage} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  productImage: {
    height: 130,
    width: 130,
  },
});

export default Compare;
