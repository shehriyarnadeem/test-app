import React from 'react';

const MenuCard = () => {
  return (
    <View style={styles.middleCard}>
    <TouchableHighlight
      onPress={() => handleCheckbox("share")}
      underlayColor="white"
    >
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
    </TouchableHighlight>
    <TouchableHighlight
      onPress={() => handleCheckbox("compare")}
      underlayColor="white"
    >
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
  );
};

export default MenuCard;