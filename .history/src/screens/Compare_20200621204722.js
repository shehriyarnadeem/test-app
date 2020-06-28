import React from "react";
import { View, Image } from "react-native";
import { Card, Text } from "react-native-elements";
import Product from "../../assets/products/product.png";
const Compare = () => {
  return (
    <View>
      <Card>
        <Text>Compare</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image source={Product} />
          <Image source={Product} />
          <Image source={Product} />
          <Image source={Product} />
          <Image source={Product} />
        </View>
      </Card>
    </View>
  );
};

export default Compare;
