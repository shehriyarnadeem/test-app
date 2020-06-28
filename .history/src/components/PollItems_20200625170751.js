import React from "react";

const PollItems = () => {
  return (
    <View style={styles.itemBox}>
      <View style={styles.items}>
        <Image source={image} style={styles.productImage} />
        <Text style={styles.productDesc}>
          Apple tv 4k 1080p- wifi 64 GB storage Apple store $199
        </Text>
      </View>
      <View style={styles.side}>
        <Text style={styles.daysLeft}>4 days left to RQ</Text>
        <View style={styles.sideItems}>
          <Image source={LockIcon} style={styles.sideIconImage} />
          <Image source={RefreshIcon} style={styles.sideIconImage} />
        </View>
      </View>
    </View>
  );
};

export default PollItems;
