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
            <IconButton size={40} color="black" style={styles.bookmark} icon="arrow-forward"/>
            <Text style={styles.styleTitle}> Recommended </Text>
          </View>
          <View style={styles.dietary}>
            <View style={styles.diets}>
              <Text style={styles.chipTitle}>Diets: </Text>
              <Chip mode= "outlined" theme={{colors: {surface: '#2778ef'}}} selectedColor="white"  style={{ marginRight: 5 }} onPress={() => {}}>
                Vegetarian
              </Chip>
              <Chip mode= "outlined" theme={{colors: {surface: '#2778ef'}}} selectedColor="white"  style={{ marginRight: 5 }} onPress={() => {}}>
                GF
              </Chip>
            </View>
            <View style={styles.allergens}>
              <Text style={styles.chipTitle}>Allergens: </Text>
              <Chip mode= "outlined" theme={{colors: {surface: '#fc5372'}}} selectedColor="white">Seafood</Chip>
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
    fontFamily: 'Raleway 800',
    color: "black",
    textAlign: "center",
    fontSize: 30,
    top: 0,
    left: "17%",
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
  bookmark: {
    backgroundColor: "#6EE5AD",
    margin: 0,
    marginLeft: -23,
    elevation: 10,
    height: dimensions.height * 0.07,
    width: dimensions.width * 0.12,
    borderRadius: 50
  },
  chipTitle: {
    fontFamily: 'Muli regular',
    color: "black",
  }
});
