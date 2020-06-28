import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Image,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Checkbox from "react-native-custom-checkbox";
import { Card, Text, CheckBox, Button } from "react-native-elements";
import CustomButton from "../components/CustomButton";
import BackgroundHeader from "../../assets/img/backgroundHeader.png";
import Continue from "../../assets/img/continue.png";
import ContinueDisable from "../../assets/img/continueDisable.png";
import CustomTabs from "../components/CustomTabs";
import Product2 from "../../assets/products/product.png";
import Product3 from "../../assets/products/product3.png";
import Product from "../../assets/products/product2.jpg";
import RefreshIcon from "../../assets/icons/icons-07.png";
import LockIcon from "../../assets/icons/icons-05.png";
import UserIcon from "../../assets/icons/icons-13.png";
const Home = () => {
  const [tab, setTab] = useState(0);
  const [checkbox, showCheckbox] = useState(false);
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [counter, setCounter] = useState(0);

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28basds",
      title: "First Item",
      image: Product,
      checked: false,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63sd1",
      title: "Second Item",
      image: Product,
      checked: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d7212",
      title: "Third Item",
      image: Product,
      checked: false,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6412",
      title: "Second Item",
      image: Product,
      checked: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d7521",
      title: "Third Item",
      image: Product,
      checked: false,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6621",
      title: "Second Item",
      image: Product,
      checked: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d7712",
      title: "Third Item",
      image: Product,
      checked: false,
    },
  ];

  const DATA2 = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba12",
      title: "First Item",
      image: Product3,
      checked: false,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      image: Product3,
      checked: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      image: Product3,
      checked: false,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b322",
      title: "First Item",
      image: Product3,
      checked: false,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6222",
      title: "Second Item",
      image: Product3,
      checked: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d7122",
      title: "Third Item",
      image: Product3,
      checked: false,
    },
  ];
  const DATA3 = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba23222",
      title: "First Item",
      image: Product2,
    },
  ];

  useEffect(() => {
    setData(DATA);
  }, []);

  const handleCheckbox = () => {
    showCheckbox(!checkbox);
  };

  const continueButton = () => {
    let contiueButton = null;

    if (checkbox && items.length > 0) {
      return (contiueButton = (
        <View style={styles.continueButton}>
          <CustomButton
            fontSize={15}
            left={70}
            bottom={4}
            color="white"
            title="Continue"
            imageSource={Continue}
          />
        </View>
      ));
    } else {
      return (contiueButton = (
        <View style={styles.continueButton}>
          <CustomButton
            fontSize={15}
            left={70}
            bottom={4}
            color="#9A9A9A"
            title="Continue"
            imageSource={ContinueDisable}
          />
        </View>
      ));
    }
    return continueButton;
  };
  const getPanel = (tab, DATA2, DATA3, checkbox) => {
    switch (tab) {
      case 0:
        return (
          <Card backgroundColor="white" borderRadius={10} marginTop={4}>
            <SafeAreaView>
              <FlatList
                data={data}
                renderItem={({ item, index }) => (
                  <Item image={item.image} item={item} index={index} />
                )}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
          </Card>
        );

      case 1:
        return (
          <Card backgroundColor="white" borderRadius={10} marginTop={4}>
            <SafeAreaView>
              <FlatList
                data={data}
                renderItem={({ item, index }) => (
                  <Item image={item.image} item={item} index={index} />
                )}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
          </Card>
        );

      case 2:
        return (
          <Card backgroundColor="white" borderRadius={10} marginTop={4}>
            <SafeAreaView>
              <FlatList
                data={DATA3}
                renderItem={({ item, index }) => (
                  <Item image={item.image} item={item} index={index} />
                )}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
          </Card>
        );

      default:
        return Panel1;
    }
  };

  const Item = ({ title, image, item, index }) => {
    return (
      <View style={styles.itemBox}>
        <View style={styles.items}>
          {checkbox ? (
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

  const handleProductSelection = (item, index, checked) => {
    let newArr = [];
    if (checked) {
      let newArr = [...data]; // copying the old datas array
      newArr[index].checked = checked; // replace e.target.value with whatever you want to change it to
      setItems((prevState) => [...prevState, item]);
    } else {
      setItems(data.filter((e) => e.id !== item.id));
    }
  };

  console.log(data, "sd22sddsd");
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.headerImage}
          resizeMode="stretch"
          source={BackgroundHeader}
        >
          <CustomTabs tab={tab} setTab={setTab} />
          <TextInput style={styles.searchBar}>Search or Filter</TextInput>
        </ImageBackground>
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
              <TouchableHighlight
                onPress={() => handleCheckbox()}
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

          {getPanel(tab, DATA, DATA2, DATA3, checkbox)}
        </View>
      </View>

      {continueButton()}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },

  image: {},
  itemBox: {
    padding: 5,
    flex: 1,

    flexDirection: "row",
    borderTopWidth: 2,

    justifyContent: "space-between",
    borderTopColor: "whitesmoke",
  },
  title: {
    fontSize: 15,
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
  continueButton: {
    width: "65%",
    height: 60,
    borderRadius: 30,

    justifyContent: "center",
    alignSelf: "center",
    position: "absolute", //Here is the trick
    bottom: 0, //Here is the trick
  },

  continueButtonStyle: {
    width: "90%",
    height: "95%",
    resizeMode: "contain",
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

  middleCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: -20,
  },
  productImage: {
    height: 80,
    width: 80,
  },
  middleCardText: {
    fontSize: 13,
    color: "grey",
    textAlign: "center",
  },
  middleCardIcon: {
    height: 20,

    width: 20,
    alignSelf: "center",
  },
  searchBar: {
    borderRadius: 20,
    height: 50,
    width: "85%",
    marginLeft: 25,
    marginBottom: 100,
    textAlign: "center",
    fontSize: 15,
    color: "gray",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "white",
  },
  headerImage: {
    width: "100%",
    height: "45%",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default Home;
