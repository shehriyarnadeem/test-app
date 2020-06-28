import React from "react";

const Compare = () => {
  return (
    <View
      style={{
        marginTop: "-44%",
        marginLeft: -20,
      }}
    >
      <Card
        width="100%"
        height={60}
        containerStyle={{
          shadowColor: "gray",
          shadowOffset: { width: 4, height: 1 },
          shadowOpacity: 2.8,
          shadowRadius: 2,
          elevation: 5,
        }}
      >
        <View style={styles.middleCard}>
          <View
            style={{
              borderRightColor: "#dddddd",
              borderRightWidth: 2,
              paddingRight: 20,
            }}
          >
            <Image source={UserIcon} style={styles.middleCardIcon} />

            <Text style={styles.middleCardText}>Share with friends</Text>
          </View>
          <TouchableHighlight onPress={handleCheckbox} underlayColor="white">
            <View
              style={{
                left: -20,
                borderRightColor: "#dddddd",
                borderRightWidth: 2,
                paddingRight: 20,
              }}
            >
              <Image source={UserIcon} style={styles.middleCardIcon} />

              <Text style={styles.middleCardText}>Compare</Text>
            </View>
          </TouchableHighlight>
          <View style={{ left: -20 }}>
            <Image source={UserIcon} style={styles.middleCardIcon} />

            <Text style={styles.middleCardText}>Polls</Text>
          </View>
        </View>
      </Card>

      {getPanel(tab, DATA, DATA2, DATA3, checkbox)}
    </View>
  );
};

export default Compare;
