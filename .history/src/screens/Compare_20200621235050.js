import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Card, Text } from "react-native-elements";
import ProductBox from "../components/ProductBox";

const Compare = () => {
  return (
    <View style={styles.container}>
      <Card>
        <View
          style={{
            display: "flex",
            padding: 5,

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

            flexDirection: "column", // main axis
            justifyContent: "center", // main axis
          }}
        >
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
