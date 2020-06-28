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
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: "35%",
            }}
          >
            <Image
              source={Close}
              style={{ display: "flex", justifyContent: "flex-end" }}
            />
            <Image source={Product} style={styles.productImage} />
            <Text
              style={{
                textAlign: "left",
                fontSize: 12,
                color: "#4D4C4C",
                lineHeight: 17,
                top: 6,
              }}
            >
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
  productImage: {
    height: 130,
    width: 130,
    padding: 10,
  },
});

export default Compare;
