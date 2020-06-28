import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";
import { Card, Text } from "react-native-elements";
import ProductBox from "../components/ProductBox";

const Compare = () => {
  const DATA3 = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      // image: Product2,
    },
  ];
  return (
    <View style={styles.container}>
      <Card>
        <View
          style={{
            display: "flex",
            padding: 5,
            justifyContent: "center",
            fontFamily: "Gilroy-Bold",
          }}
        >
          <Text style={{ fontSize: 24, color: "#8755DE" }}>Compare</Text>
        </View>
        <FlatList
          data={DATA3}
          keyExtractor={this._keyExtractor} //has to be unique
          renderItem={<ProductBox />} //method to render the data in the way you want using styling u need
          horizontal={false}
          numColumns={2}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 14,

    alignContent: "center",
  },
});

export default Compare;
