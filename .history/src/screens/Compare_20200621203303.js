import React from "react";
import { View, Image } from "react-native";
const Compare = () => {
  return (
    <View>
      <Card width="100%">
        <View>
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
        </View>
      </Card>

      {getPanel(tab, DATA, DATA2, DATA3, checkbox)}
    </View>
  );
};

export default Compare;
