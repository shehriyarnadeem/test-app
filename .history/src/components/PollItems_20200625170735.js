import React from "react";

const PollItems = () => {
  return (
    <View style={styles.itemBox}>
      <View style={styles.items}>
        {checkbox.status ? (
          <View style={{ display: "flex", justifyContent: "center" }}>
            <Checkbox
              marginTop={20}
              checked={item.checked}
              style={{
                backgroundColor: item.checked ? "#8755DE" : "#F4F2F2",
                borderRadius: 20,
                borderWidth: 2,
                borderColor: item.checked ? "#8755DE" : "#F4F2F2",
                color: "#fff",
                position: "absolute",
                top: 21,
              }}
              onChange={(name, checked) =>
                handleProductSelection(item, index, checked)
              }
            />
          </View>
        ) : null}
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
