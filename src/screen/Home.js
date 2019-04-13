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

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.setDistanceFilter = this.setDistanceFilter.bind(this);
    this.setPriceFilter = this.setPriceFilter.bind(this);
    this.state = {
      showLogIn: true,
      distanceFilter: -1,
      priceFilter: "",
    };

    // ***** code use for getting location *****  (Need to implement this on recommend too)
    // navigator.geolocation.getCurrentPosition(
    //   position => {
    //     const currentLocation = JSON.stringify(position);
    //     // put API call here NOVAN
    //     console.log("hello");
    //   },
    //   error => Alert.alert(error.message),
    //   { enableHighAccuracy: false, timeout: 20000 }
    // );
    // TODO getLocation, send Location, Get Dishes, pass dishes to Food Scroll props
    // TODO Redo all the thing when setDistanceFilter or setPriceFilter triggered
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
        <View style={styles.container}>
          <View style={styles.topPart}>
            <IconButton size={40} color="black" style={styles.bookmark} icon="arrow-forward"/>
            <Text style={styles.styleTitle}> Home </Text>
          </View>
          <View style={{ paddingBottom: 10, paddingTop: 15 }}>
            <Searchbar>Avacado Roll</Searchbar>
          </View>
          <View style={styles.dietary}>
            <View style={styles.diets}>
              <Text>Diets: </Text>
              <Chip style={{ marginRight: 5 }}>Vegetarian</Chip>
              <Chip style={{ marginRight: 5 }}>GF</Chip>
            </View>
            <View style={styles.allergens}>
              <Text>Allergens: </Text>
              <Chip>Seafood</Chip>
            </View>
          </View>
          <FoodScrollCards navigation={this.props.navigation}/>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const dimensions = Dimensions.get("window");

var styles = StyleSheet.create({
  styleTitle: {
    textAlign: "center",
    fontSize: 30,
    top: 0,
    left: dimensions.width * 0.31,
    position: "relative",
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
  container: {
    paddingTop: 7,
  },
  bookmark: {
    backgroundColor: "#6EE5AD",
    margin: 0,
    marginLeft: -23,
    elevation: 10,
    height: dimensions.height * 0.07,
    width: dimensions.width * 0.12,
    borderRadius: 50
  }
});
