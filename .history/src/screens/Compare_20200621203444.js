import React from "react";
import { View, Image, Text } from "react-native";
import Product from "../../assets/products/product.png";
const Compare = () => {
  return (
    <View>
      <Card width="100%">
        <Text>Compare</Text>
        <View>
          <Image source={Product} />

          <Text style={styles.middleCardText}>Share with friends</Text>
        </View>
      </Card>
    </View>
  );
};

export default Compare;
