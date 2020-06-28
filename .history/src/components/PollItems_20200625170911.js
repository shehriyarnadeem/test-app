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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },

  itemBox: {
    padding: 5,
    flex: 1,

    flexDirection: "row",
    borderTopWidth: 2,

    justifyContent: "space-between",
    borderTopColor: "whitesmoke",
  },

  daysLeft: {
    fontSize: 13,
    color: "black",
    padding: 10,
  },
  items: {
    display: "flex",
    flexDirection: "row",
    width: 80,
  },
  side: {
    display: "flex",
    flexDirection: "column",
  },
  sideItems: {
    display: "flex",

    flexDirection: "row",
    alignSelf: "flex-end",
  },

  sideIconImage: {
    height: 30,
    width: 30,
    marginLeft: 5,
  },
  productDesc: {
    fontSize: 13,
    color: "#1a1c1b",
  },

  productImage: {
    height: 80,
    width: 80,
  },
});

export default PollItems;
