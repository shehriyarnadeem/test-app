import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
const CustomButton = ({
  imageSource,
  left,
  bottom,
  right,
  fontSize,
  color,
  title,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      // onPress={this.clickHandler}
    >
      <ImageBackground source={imageSource} style={styles.continueButtonStyle}>
        <Text
          style={{
            fontSize: fontSize,
            color: color,
            left: left, //60
            bottom: bottom, //4
            right: right,
          }}
        >
          {title ? title : "Title"}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  continueButtonStyle: {
    width: "90%",
    height: "95%",
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomButton;
