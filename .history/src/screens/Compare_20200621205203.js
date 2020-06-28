import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Card, Text } from "react-native-elements";
import Product from "../../assets/products/product.png";
const Compare = () => {
  return (
    <View style={}>
      <Card>
        <Text>Compare</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 10,
          }}
        >
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
  container: {
    flex: 1,
    justifyContent: "center",
  },
  productImage: {
    height: 130,
    width: 130,
    padding: 10,
  },
});

export default Compare;
