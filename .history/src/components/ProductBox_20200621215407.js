import React from "react";

const ProductBox = () => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.productBox}>
        <Image source={Close} style={styles.closeButton} />
        <Image source={Product} style={styles.productImage} />
        <Text style={styles.productDetails}>
          Coach leather Sutton baho Dusty Pink Bag Saks fifth avenue $129
        </Text>
      </View>
    </View>
  );
};

export default ProductBox;
