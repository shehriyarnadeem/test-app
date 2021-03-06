import * as React from "react";
import { BottomNavigation, Text, View } from "react-native-paper";
import { Image } from "react-native";
import Home from "./screens/Home";
import Compare from "./screens/Compare";
import ShareFriends from "./screens/ShareWithFriends";
import ProductDetails from "./screens/ProductDetails";
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
import { Icon } from "react-native-paper/lib/typescript/src/components/Avatar/Avatar";
const MusicRoute = () => <Text>Music</Text>;

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "home", title: "Home", icon: HomeTabIconInActive },
      { key: "sample1" },
      { key: "sample2" },
      { key: "sample3" },
      { key: "sample4" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: Home,
    sample1: MusicRoute,
    sample2: MusicRoute,
    sample3: MusicRoute,
    sample4: MusicRoute,
  });

  renderIcon = (props) => {
    switch (props.route.key) {
      case "home":
        HomeTabIconInActive;
      case "sample1":
        HomeTabIconInActive;
    }
  };
  render() {
    return (
      <BottomNavigation
        // renderIcon={(props) => {
        //   if (props.route.key === "home") {
        //   }
        // }}

        // renderIcon={this.renderIcon}
        barStyle={{ backgroundColor: "white" }}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
