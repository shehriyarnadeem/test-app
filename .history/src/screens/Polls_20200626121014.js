import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from "react-native";
import Checkbox from "react-native-custom-checkbox";
import CustomButton from "../components/CustomButton";
import Continue from "../../assets/img/continue.png";
import { Card, Text } from "react-native-elements";
import ProductBox from "../components/ProductBox";
import CardClose from "../../assets/icons/cardClose.png";
import ShareIcon from "../../assets/icons/shareicon.png";
import CameraIcon from "../../assets/icons/cameraicon.png";

const Polls = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const DATA3 = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba12",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba12",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba12",
      title: "First Item",
      // image: Product2,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba12",
      title: "First Item",
      // image: Product2,
    },
  ];

  const handlePhoto = () => {
    console.log("sds");
    // const options = {};
    // ImagePicker.launchImageLibrary(options, (response) => {
    //   console.log("response", response);
    // });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card width="90%" borderRadius="45%">
        <TouchableHighlight
          onPress={() => navigation.navigate("Home")}
          underlayColor="white"
        >
          <Image source={CardClose} style={styles.image} />
        </TouchableHighlight>
        <View style={styles.title}>
          <Text style={styles.titleText}>Which one do you like the best?</Text>
          <View
            style={{
              display: "flex",
              alignSelf: "center",

              flexDirection: "row",
            }}
          >
            <Text style={styles.subHeading}>Shared on 05/12/2020</Text>
          </View>
        </View>

        <View style={{ width: "100%" }}>
          <TextInput
            style={styles.commentsInput}
            // onChangeText={(text) => onChangeText(text)}
            placeholder="Add comment"
            width={300}
            // value={value}
          />
        </View>

        <View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              justifyContent: "space-evenly",
              display: "flex",

              flexDirection: "row",
            }}
          >
            <ProductBox icon={CameraIcon} textInput />
            <ProductBox icon={CameraIcon} textInput />
            <ProductBox icon={CameraIcon} textInput />
          </ScrollView>
          <View style={styles.continueButton}>
            <CustomButton
              fontSize={17}
              left={50}
              bottom={4}
              color="white"
              title="Share"
              icon={ShareIcon}
              // clickHandler={navigateHandler}
              imageSource={Continue}
            />
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",
  },
  commentsInput: {
    height: 50,
    borderColor: "#F4F2F2",
    backgroundColor: "#F4F2F2",
    padding: 20,
    alignSelf: "center",
    textAlign: "left",
    borderRadius: 10,
    borderWidth: 0.5,
  },
  subHeading: {
    color: "#4D4C4C",
    fontSize: 12,
  },
  continueButton: {
    width: "65%",
    height: 60,
    borderRadius: 30,

    padding: 5,
    justifyContent: "center",
    alignSelf: "center",
  },
  title: {
    display: "flex",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "whitesmoke",
    width: "100%",
  },
  titleText: {
    fontSize: 24,
    color: "#8755DE",

    textAlign: "center",
    alignSelf: "center",
  },
  image: { display: "flex", alignSelf: "flex-end" },
});

export default Polls;
