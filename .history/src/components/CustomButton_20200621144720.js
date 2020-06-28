import React from "react";

const CustomButton = ({
  imageSource,
  left,
  bottom,
  right,
  fontSize,
  color,
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
          {title}
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
