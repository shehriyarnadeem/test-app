import React from "react";
import { View, Image } from "react-native";
const Compare = () => {
  return (
    <View>
      <Card width="100%">
        <View>
          <Image source={UserIcon} style={styles.middleCardIcon} />

          <Text style={styles.middleCardText}>Share with friends</Text>
        </View>
      </Card>
    </View>
  );
};

export default Compare;
