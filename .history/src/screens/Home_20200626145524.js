import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import Checkbox from "react-native-custom-checkbox";
import { Card, Text } from "react-native-elements";
import CustomButton from "../components/CustomButton";
import MenuCard from "../components/MenuCard";
import PollItems from "../components/PollItems";
import MenuCardMinimized from "../components/MenuCardMinimized";
import BackgroundHeader from "../../assets/img/backgroundHeader.png";
import Continue from "../../assets/img/continue.png";
import ContinueDisable from "../../assets/img/continueDisable.png";
import CustomTabs from "../components/CustomTabs";
import Product2 from "../../assets/products/product.png";
import Product3 from "../../assets/products/product3.png";
import Product from "../../assets/products/product2.jpg";
import RefreshIcon from "../../assets/icons/icons-07.png";
import LockIcon from "../../assets/icons/icons-05.png";
import PollsProduct from "../../assets/products/images.jpeg";
import SearchIcon from "../../assets/icons/searchIcon.png";

const Home = ({ navigation }) => {
  const [tab, setTab] = useState(0);
  const [screen, setScreen] = useState("");
  const [checkbox, showCheckbox] = useState({ status: false, type: null });
  const [data, setData] = useState([]);
  const [pollsData, setPollsData] = useState([]);
  const [items, setItems] = useState([]);

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
      image: PollsProduct,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2322223",
      title: "First Item",
      image: PollsProduct,
    },
  ];

  useEffect(() => {
    setData(DATA);
    setPollsData(DATA3);
  }, []);

  const handleCheckbox = (type) => {
    showCheckbox({ status: !checkbox.status, type: type });
  };

  const navigateHandler = (screen) => {
    if (screen === "Polls") {
      navigation.navigate("Polls");
    }
    if (checkbox.type === "compare") {
      navigation.navigate("Compare");
    } else if (checkbox.type === "share") {
      navigation.navigate("ShareFriends");
    }
  };

  const handleProductSelection = (item, index, checked) => {
    let newArr = [];
    if (checked) {
      newArr = [...data]; // copying the old datas array
      newArr[index].checked = checked; // replace e.target.value with whatever you want to change it to
      setData(newArr);
      // console.log("overhere");
      setItems((prevState) => [...prevState, item]);
    } else {
      newArr = [...data]; // copying the old datas array
      newArr[index].checked = checked; // replace e.target.value with whatever you want to change it to
      setData(newArr);

      setItems(items.filter((e) => e.id === item.id));
    }
  };

  const continueButton = () => {
    let continueButton = null;
    if (checkbox.status && items.length >= 1) {
      return (continueButton = (
        <View style={styles.continueButton}>
          <CustomButton
            fontSize={15}
            left={70}
            bottom={4}
            color="white"
            title="Continue"
            clickHandler={navigateHandler}
            imageSource={Continue}
          />
        </View>
      ));
    } else if (checkbox.status) {
      return (continueButton = (
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

  const getPanel = (tab) => {
    switch (tab) {
      case 0:
        return (
          <Card
            backgroundColor="white"
            borderRadius={15}
            marginTop={4}
            left={10}
          >
            <MenuCard
              showChecboxHandler={handleCheckbox}
              activeScreen={screen}
              setTab={setTab}
              setScreen={setScreen}
            />
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <Item image={item.image} item={item} index={index} />
              )}
              keyExtractor={(item) => item.id}
            />
          </Card>
        );

      case 1:
        return (
          <Card
            backgroundColor="white"
            borderRadius={10}
            marginTop={4}
            left={10}
          >
            <FlatList
              ListHeaderComponent={
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                    color: "grey",
                  }}
                >
                  <Text> My Polls</Text>
                </View>
              }
              data={data}
              renderItem={({ item, index }) => (
                <Item image={item.image} item={item} index={index} />
              )}
              keyExtractor={(item) => item.id}
            />
          </Card>
        );

      case 2:
        return (
          <Card
            backgroundColor="white"
            borderRadius={10}
            marginTop={4}
            left={10}
          >
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <Item image={item.image} item={item} index={index} />
              )}
              keyExtractor={(item) => item.id}
            />
          </Card>
        );
      case 3:
        return (
          <Card
            backgroundColor="white"
            borderRadius={10}
            width="90%"
            containerStyle={{
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
              left: 10,
            }}
          >
            <FlatList
              ListHeaderComponent={
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                    color: "grey",
                  }}
                >
                  <Text> My Polls</Text>
                </View>
              }
              data={pollsData}
              renderItem={({ item, index }) => (
                <PollItems
                  image={item.image}
                  navigateHandler={navigateHandler}
                />
              )}
              keyExtractor={(item) => item.id}
            />
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

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.headerImage}
          resizeMode="stretch"
          source={BackgroundHeader}
        >
          <CustomTabs tab={tab} setTab={setTab} />
          <TextInput style={styles.searchBar} placeholder="Search or Filter" />
        </ImageBackground>
        <View
          style={{
            marginTop: "-44%",
            marginLeft: -20,
          }}
        >
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
    borderRadius: 25,
    height: 50,
    width: "85%",
    marginLeft: 25,
    marginBottom: 110,
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
