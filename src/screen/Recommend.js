import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  Dimensions,
} from "react-native";
import { Chip, IconButton, Searchbar } from "react-native-paper";
import FoodScrollCards from "../components/FoodScrollCards";
import Drawer from "../components/Drawer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.setDistanceFilter = this.setDistanceFilter.bind(this);
    this.setPriceFilter = this.setPriceFilter.bind(this);
    this.state = {
      showLogIn: true,
      distanceFilter: -1,
      priceFilter: "",
    };
  }

  setDistanceFilter(filter) {
    this.setState({
      distanceFilter: filter,
    });
  }

  setPriceFilter(filter) {
    this.setState({
      priceFilter: filter,
    });
  }

  openDrawer() {
    this.refs["DRAWER"].openDrawer();
  }

  render() {
    var navigationView = (
      <Drawer
        distanceHandler={this.setDistanceFilter}
        priceHandler={this.setPriceFilter}
      />
    );
    const dimensions = Dimensions.get("window");
    const drawerWidth = Math.round(dimensions.width * (202 / 360));

    return (
      <DrawerLayoutAndroid
        drawerWidth={drawerWidth}
        ref={"DRAWER"}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
      >
        <View style={{ paddingTop: 7 }}>
          <View style={styles.topPart}>
            <IconButton icon="menu" onPress={/*this.openDrawer.bind(this)*/ () => {}} />
            <Text style={styles.styleTitle}> Recommended </Text>
          </View>
          <View style={styles.dietary}>
            <View style={styles.diets}>
              <Text>Diets: </Text>
              <Chip style={{ marginRight: 5 }} onPress={() => {}}>
                Vegetarian
              </Chip>
              <Chip style={{ marginRight: 5 }} onPress={() => {}}>
                GF
              </Chip>
            </View>
            <View style={styles.allergens}>
              <Text>Allergens: </Text>
              <Chip>Seafood</Chip>
            </View>
          </View>
          <FoodScrollCards />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

var styles = StyleSheet.create({
  styleTitle: {
    textAlign: "center",
    fontSize: 30,
    top: 0,
    left: "21%",
    position: "absolute",
  },
  topPart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  diets: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  allergens: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    marginTop: 10,
    alignItems: "center",
  },
  dietary: {
    alignContent: "space-between",
    paddingLeft: 10,
  },
});
