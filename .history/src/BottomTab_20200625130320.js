import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
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

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "home", title: "Home", icon: "queue-music" },
      { key: "albums", title: "Albums", icon: "album" },
      { key: "recents", title: "Recents", icon: "history" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        barStyle={{ backgroundColor: "white" }}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
