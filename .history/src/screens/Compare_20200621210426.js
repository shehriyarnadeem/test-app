import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Card, Text } from "react-native-elements";
import Product from "../../assets/products/product.png";
const Compare = () => {
  return (
    <View style={styles.container}>
      <Card>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text>Compare</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 10,
          }}
        >
          <View>
            <Image source={Product} style={styles.productImage} />
          </View>
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
    alignContent: "center",
  },
  productImage: {
    height: 130,
    width: 130,
    padding: 10,
  },
});

export default Compare;
