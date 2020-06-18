import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Card, Text } from "react-native-elements";
import BackgroundHeader from "../../assets/img/backgroundHeader.png";
import Product from "../../assets/products/product2.jpg";
import RefreshIcon from "../../assets/icons/icons-07.png";
import LockIcon from "../../assets/icons/icons-05.png";
import UserIcon from "../../assets/icons/icons-13.png";
const Home = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          width: "100%",
          height: "45%",
          justifyContent: "center",
          alignContent: "center",
        }}
        resizeMode="stretch"
        source={BackgroundHeader}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",

            top: -30,
          }}
        >
          <Text
            style={{
              fontSize: "19",
              color: "white",
              textDecorationLine: "underline",
              textDecorationThickness: "10%",
            }}
          >
            Maybe
          </Text>
          <Text>Maybe</Text>
          <Text>Maybe</Text>
        </View>
        <TextInput
          style={{
            borderRadius: 20,
            height: 50,
            width: "85%",
            marginLeft: 25,
            marginBottom: 95,
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
          }}
        >
          Search or Filter
        </TextInput>
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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginLeft: -20,
            }}
          >
            <View>
              <Image
                source={UserIcon}
                style={{
                  alignSelf: "center",
                  height: 20,

                  width: 20,
                }}
              />

              <Text
                style={{ fontSize: 13, color: "grey", textAlign: "center" }}
              >
                Share with friends
              </Text>
            </View>

            <View style={{ left: -20 }}>
              <Image
                source={UserIcon}
                style={{
                  alignSelf: "center",
                  height: 20,

                  width: 20,
                }}
              />

              <Text
                style={{ fontSize: 13, color: "grey", textAlign: "center" }}
              >
                Compare
              </Text>
            </View>
            <View style={{ left: -20 }}>
              <Image
                source={UserIcon}
                style={{
                  height: 20,

                  width: 20,
                  alignSelf: "center",
                }}
              />

              <Text
                style={{ fontSize: 13, color: "grey", textAlign: "center" }}
              >
                Polls
              </Text>
            </View>
          </View>
        </Card>
      </View>
      <Card backgroundColor="white" borderRadius={10} marginTop={4}>
        <SafeAreaView>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </Card>
    </View>
  );
};

function Item({ title }) {
  return (
    <View style={styles.item}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: 80,
        }}
      >
        <Image
          source={Product}
          style={{
            height: 80,
            width: 80,
          }}
        />

        <Text style={{ fontSize: 13, color: "grey" }}>
          Apple tv 4k 1080p- wifi 64 GB storage Apple store $199
        </Text>
      </View>
      <View style={{ display: "flex", flexDirection: "column" }}>
        <Text style={{ fontSize: 13, color: "black", padding: 10 }}>
          4 days left to RQ
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignSelf: "flex-end",
          }}
        >
          <Image
            source={LockIcon}
            style={{
              height: 30,
              width: 30,
            }}
          />
          <Image
            source={RefreshIcon}
            style={{
              height: 30,
              width: 30,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },

  image: {},
  item: {
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
});

export default Home;
