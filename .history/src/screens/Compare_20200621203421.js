import React from "react";
import { View, Image, Text } from "react-native";
import Product from "../../assets/products/";
const Compare = () => {
  return (
    <View>
      <Card width="100%">
        <Text>Compare</Text>
        <View>
          <Image source={UserIcon} style={styles.middleCardIcon} />

          <Text style={styles.middleCardText}>Share with friends</Text>
        </View>
      </Card>
    </View>
  );
};

export default Compare;
