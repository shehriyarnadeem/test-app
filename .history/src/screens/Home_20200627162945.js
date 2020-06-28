import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Image,
  FlatList,
  Animated,
  Dimensions,
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

import RefreshIcon from "../../assets/icons/icons-07.png";
import LockIcon from "../../assets/icons/icons-05.png";
import PollsProduct from "../../assets/products/images.jpeg";
import SearchIcon from "../../assets/icons/searchIcon.png";
import QuestionMark from "../../assets/icons/questionMark.png";
import AddReciept from "../../assets/icons/icons-11.png";
import Advertise from "../../assets/products/advertise.png";
import { DATASET_1, DATASET_2, DATASET_3, DATASET_4 } from "../datasets";
import {
  TouchableOpacity,
  TouchableHighlight,
} from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const scrollY = new Animated.Value(0);

  const screenHeight = Dimensions.get("window").height;
  console.log(screenHeight, "sds");

  const [tab, setTab] = useState(0);
  const [screen, setScreen] = useState("");
  const [checkbox, showCheckbox] = useState({ status: false, type: null });
  const [data, setData] = useState([]);
  const [minimizedHeader, setMinimized] = useState(false);
  const [dataset_1, setDataSet1] = useState([]);
  const [dataset_2, setDataSet2] = useState([]);
  const [dataset_3, setDataSet3] = useState([]);
  const [dataset_4, setDataSet4] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setDataSet1(DATASET_1);
    setDataSet2(DATASET_2);
    setDataSet3(DATASET_3);
    setDataSet4(DATASET_4);
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

  const handleProductSelection = (item, index, checked, data) => {
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
          <>
            {minimizedHeader === false ? (
              <MenuCard
                showChecboxHandler={handleCheckbox}
                activeScreen={screen}
                setTab={setTab}
                setScreen={setScreen}
              />
            ) : (
              <MenuCardMinimized
                showChecboxHandler={handleCheckbox}
                activeScreen={screen}
                setTab={setTab}
                setScreen={setScreen}
              />
            )}

            <Card
              backgroundColor="white"
              borderRadius={15}
              marginTop={4}
              left={10}
            >
              <FlatList
                data={dataset_1}
                onScroll={(e) => {
                  scrollY.setValue(e.nativeEvent.contentOffset.y);
                  scrollY.addListener((e) => {
                    if (e.value === 0) {
                      setMinimized(false);
                    } else if (e.value > 0) {
                      setMinimized(true);
                    }
                  });
                }}
                renderItem={({ item, index }) => (
                  <Item
                    image={item.image}
                    item={item}
                    index={index}
                    data={dataset_1}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </Card>
          </>
        );

      case 1:
        return (
          <>
            <Card
              backgroundColor="white"
              borderRadius={10}
              // marginTop={10}
              position="relative"
              left={10}
            >
              <FlatList
                onScroll={(e) => {
                  scrollY.setValue(e.nativeEvent.contentOffset.y);
                  scrollY.addListener((e) => {
                    if (e.value === 0) {
                      setMinimized(false);
                    } else if (e.value > 0) {
                      setMinimized(true);
                    }
                  });
                }}
                ListHeaderComponent={
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      padding: 10,
                      color: "grey",
                    }}
                  >
                    <Image
                      source={AddReciept}
                      style={{ height: 30, width: 30 }}
                    />
                    <Text style={{ fontSize: 15, color: "#4D4C4C" }}>
                      Add Reciept
                    </Text>
                  </View>
                }
                data={dataset_2}
                renderItem={({ item, index }) =>
                  item && item.advertise && item.advertise ? (
                    <Image source={item.image} />
                  ) : (
                    <Item
                      image={item.image}
                      item={item}
                      index={index}
                      data={dataset_2}
                    />
                  )
                }
                keyExtractor={(item) => item.id}
              />
            </Card>
          </>
        );

      case 2:
        return (
          <>
            <Card
              backgroundColor="white"
              borderRadius={10}
              // marginTop={-33}
              left={10}
            >
              <FlatList
                onScroll={(e) => {
                  scrollY.setValue(e.nativeEvent.contentOffset.y);
                  scrollY.addListener((e) => {
                    if (e.value === 0) {
                      setMinimized(false);
                    } else if (e.value > 0) {
                      setMinimized(true);
                    }
                  });
                }}
                data={dataset_1}
                renderItem={({ item, index }) => (
                  <Item
                    image={item.image}
                    item={item}
                    index={index}
                    data={dataset_2}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </Card>
          </>
        );
      case 3:
        return (
          <>
            {minimizedHeader === false ? (
              <MenuCard
                showChecboxHandler={handleCheckbox}
                activeScreen={screen}
                setTab={setTab}
                setScreen={setScreen}
              />
            ) : (
              <MenuCardMinimized
                showChecboxHandler={handleCheckbox}
                activeScreen={screen}
                setTab={setTab}
                setScreen={setScreen}
              />
            )}
            <Card
              backgroundColor="white"
              borderRadius={10}
              marginTop={4}
              left={10}
            >
              <FlatList
                onScroll={(e) => {
                  scrollY.setValue(e.nativeEvent.contentOffset.y);
                  scrollY.addListener((e) => {
                    if (e.value === 0) {
                      setMinimized(false);
                    } else if (e.value > 0) {
                      setMinimized(true);
                    }
                  });
                }}
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
                data={dataset_4}
                renderItem={({ item, index }) => (
                  <PollItems
                    image={item.image}
                    navigateHandler={navigateHandler}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </Card>
          </>
        );

      default:
        return Panel1;
    }
  };

  const Item = ({ title, image, item, index, data }) => {
    return (
      <View style={styles.itemBox}>
        <View style={styles.items}>
          {checkbox.status && tab !== 1 ? (
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
                  handleProductSelection(item, index, checked, data)
                }
              />
            </View>
          ) : null}

          <Image source={image} style={styles.productImage} />
          <Text style={styles.productDesc}>
            Apple tv 4k 1080p- wifi 64 GB storage Apple store $199
          </Text>
        </View>
        <TouchableHighlight
          onPress={() => navigation.navigate("ProductDetails")}
          underlayColor="white"
        >
          <View style={styles.side}>
            <Text style={styles.daysLeft}>4 days left to RQ</Text>
            <View style={styles.sideItems}>
              {tab === 1 ? (
                <Image source={QuestionMark} style={styles.sideIconImage} />
              ) : null}
              <Image source={LockIcon} style={styles.sideIconImage} />
              <Image source={RefreshIcon} style={styles.sideIconImage} />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={{
            ...styles.headerImage,
            height: minimizedHeader === false ? "45%" : "40%",
          }}
          resizeMode="stretch"
          source={BackgroundHeader}
        >
          <CustomTabs
            tab={tab}
            setTab={setTab}
            minimizedHeader={minimizedHeader}
          />
          {minimizedHeader === false ? (
            <TextInput
              style={styles.searchBar}
              placeholder="Search or Filter"
            />
          ) : null}
        </ImageBackground>
        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignSelf: "center",
            marginBottom: minimizedHeader === false ? -180 : -195,

            // position: "relative",
            flexDirection: "column",
            margin: 0,
          }}
        >
          {getPanel(tab, checkbox)}
        </View>
      </View>

      {tab !== 1 && tab !== 3 ? continueButton() : null}
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
    color: "#4D4C4C",
    fontFamily: "GilroyBold",
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

    color: "#535457",
    textAlign: "left",
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
