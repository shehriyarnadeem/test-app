import React from "react";
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { Card, Text } from "react-native-elements";
import ProductBox from "../components/ProductBox";
import CardClose from "../../assets/icons/cardClose.png";
import CameraIcon from "../../assets/icons/cameraicon.png";

const Compare = ({ navigation }) => {
  const DATA3 = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      // image: Product2,
    },
  ];
  return (
    <View style={styles.container}>
      <Card height="90%" borderRadius="45%">
        <TouchableHighlight onPress={() => navigation.navigate("Home")}>
          <Image source={CardClose} style={styles.image} />
        </TouchableHighlight>
        <View style={styles.title}>
          <Text style={styles.titleText}>Share with Friends</Text>
        </View>
        <View
          style={{
            paddingTop: 10,
          }}
        >
          <TextInput
            style={styles.commentsInput}
            // onChangeText={(text) => onChangeText(text)}
            placeholder="Add comment"
            width={200}
            // value={value}
          />
        </View>
        <FlatList
          data={DATA3}
          // keyExtractor={this._keyExtractor} //has to be unique
          renderItem={() => <ProductBox icon={CameraIcon} textInput />} //method to render the data in the way you want using styling u need
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

    justifyContent: "center",

    alignItems: "center",
  },
  commentsInput: {
    height: 40,
    borderColor: "#F4F2F2",
    backgroundColor: "#F4F2F2",

    textAlign: "center",
    borderRadius: 10,
    borderWidth: 0.5,
  },
  title: {
    display: "flex",
    padding: 5,
    justifyContent: "center",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "whitesmoke",
    width: "100%",
  },
  titleText: {
    fontSize: 24,
    color: "#8755DE",
    bottom: 20,
    alignSelf: "center",
  },
  image: { display: "flex", alignSelf: "flex-end" },
});

export default Compare;
