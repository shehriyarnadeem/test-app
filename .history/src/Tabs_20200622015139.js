import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "./screens/Home";
import Compare from "./screens/Compare";
import Product from "../assets/products/product.png";
import HomeTabIconActive from "../assets/tabIcons/icons-15.png";
import HomeTabIconInActive from "../assets/tabIcons/icons-10.png";
import AddTabIconActive from "../assets/tabIcons/icons-16.png";
import AddTabIconInActive from "../assets/tabIcons/icons-11.png";
import RefreshTabIconActive from "../assets/tabIcons/icons-19.png";
import RefreshTabIconInActive from "../assets/tabIcons/icons-14.png";
import ChartTabIconActive from "../assets/tabIcons/icons-17.png";
import ChartTabIconInActive from "../assets/tabIcons/icons-12.png";
import UserTabIconActive from "../assets/tabIcons/icons-18.png";
import UserTabIconInActive from "../assets/tabIcons/icons-13.png";

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
const Stack = createStackNavigator();
function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Compare">
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
                top: 10,
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
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={focused ? AddTabIconActive : AddTabIconInActive}
              style={{ height: 30, width: 30, top: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Compare"
        component={Compare}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={focused ? AddTabIconActive : AddTabIconInActive}
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
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={focused ? RefreshTabIconActive : RefreshTabIconInActive}
              style={{ height: 30, width: 30, top: 10 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile2"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={focused ? ChartTabIconActive : ChartTabIconInActive}
              style={{ height: 30, width: 30, top: 10 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile3"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={focused ? UserTabIconActive : UserTabIconInActive}
              style={{ height: 30, width: 30, top: 10 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
