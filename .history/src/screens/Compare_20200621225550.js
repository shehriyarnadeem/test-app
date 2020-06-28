import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";
import { Card, Text } from "react-native-elements";
import ProductBox from "../components/ProductBox";

const Compare = () => {
  const DATA3 = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2",
      title: "First Item",
      image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2",
      title: "First Item",
      image: Product2,
    },
  ];
  return (
    <View style={styles.container}>
      <Card>
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
          style={
            {
              // flexDirection: "row",
              // flexWrap: "wrap",
            }
          }
        >
          <FlatList
            horizontal
            // data={this.state.data}
            renderItem={({ item: rowData }) => {
              return <ProductBox />;
            }}
            keyExtractor={(item, index) => index}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignContent: "center",
  },
});

export default Compare;
