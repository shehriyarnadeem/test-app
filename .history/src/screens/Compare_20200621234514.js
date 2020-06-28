import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Card, Text } from "react-native-elements";
import ProductBox from "../components/ProductBox";

const Compare = () => {
  return (
    <View style={styles.container}>
      <Card height={100}>
        <View
          style={{
            display: "flex",
            padding: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignSelf: "center",
            fontFamily: "Gilroy-Bold",
          }}
        >
          <Text style={{ fontSize: 24, color: "#8755DE" }}>Compare</Text>
        </View>
        <View
          style={{
            elevation: 1,
            borderRadius: 2,
            backgroundColor: "white",

            flexDirection: "row", // main axis
            justifyContent: "flex-start", // main axis
          }}
        >
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 14,
    alignSelf: "stretch",
    // alignContent: "center",
  },
});

export default Compare;
