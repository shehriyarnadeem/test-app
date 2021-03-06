import React from "react";

const CustomButton = ({ imageSource, left, bottom, right, fontSize }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      // onPress={this.clickHandler}
    >
      <ImageBackground source={Continue} style={styles.continueButtonStyle}>
        <Text
          style={{
            fontSize: 15,
            color: "white",
            left: 60,
            bottom: 4,
          }}
        >
          Continue
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
