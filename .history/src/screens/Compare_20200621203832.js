import React from "react";
import { View, Image } from "react-native";
import { Card, Text } from "react-native-elements";
import Product from "../../assets/products/product.png";
const Compare = () => {
  return (
    <View>
      <Card width="100%">
        <Text>Compare</Text>
        <View>
          <Image source={Product} />
        </View>
      </Card>
    </View>
  );
};

export default Compare;
