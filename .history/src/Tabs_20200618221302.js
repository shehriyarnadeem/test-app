import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "./screens/Home";
import HomeTabIconActive from "../assets/tabIcons/icons-15.png";
import HomeTabIconInActive from "../assets/tabIcons/icons-10.png";
import AddTabIconActive from "../assets/tabIcons/icons-15.png";
import AddTabIconInActive from "../assets/tabIcons/icons-16.png";
import RefreshTabIconActive from "../assets/tabIcons/icons-19.png";
import RefreshTabIconInActive from "../assets/tabIcons/icons-15.png";
import ChartTabIconActive from "../assets/tabIcons/icons-17.png";
import ChartTabIconInActive from "../assets/tabIcons/icons-12.png";
import UserTabIconActive from "../assets/tabIcons/icons-17.png";
import UserTabIconInActive from "../assets/tabIcons/icons-12.png";
function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: "",

          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={focused ? HomeTabIconActive : HomeTabIconInActive}
              style={{
                height: 30,
                width: 30,
                top: 5,
                padding: 10,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={HomeTabIconActive}
              style={{ height: 30, width: 30, top: 10 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={HomeTabIconActive}
              style={{ height: 30, width: 30, top: 10 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
