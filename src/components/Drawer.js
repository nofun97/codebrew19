import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, FlatList } from "react-native";
import { Chip } from "react-native-paper";

export class Drawer extends Component {
  constructor(props) {
    super(props);
    this.handleDistance = this.handleDistance.bind(this);
    this.state = {
      showLogIn: true,
      distance: -1,
      price: "",
    };
  }

  handleDistance(value) {
    this.setState(prevState => (prevState.distance === value? {
      distance: -1,
    } : {
      distance: value,
    }));
    this.props.distanceHandler(value);
  }

  handlePrice(value) {
    this.setState(prevState => (prevState.price === value? {
      price: "",
    } : {
      price: value,
    }));
    this.props.priceHandler(value);
  }

  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.Filter}> Filter</Text>
        <Text style={styles.Subheader}>Allergens</Text>
        <View style={styles.ChipContainer}>
          <Chip mode= "outlined" theme={{colors: {surface: '#fc5372'}}} selectedColor="white" style={styles.Chip}>Seafood</Chip>
        </View>
        <Text style={styles.Subheader}>Diet</Text>
        <View style={styles.ChipContainer}>
          <Chip mode= "outlined" theme={{colors: {surface: '#2778ef'}}} selectedColor="white" style={styles.Chip}>Vego</Chip>
          <Chip mode= "outlined" theme={{colors: {surface: '#2778ef'}}} selectedColor="white" style={styles.Chip}>GF</Chip>
        </View>
        <Text style={styles.Subheader}>Distance</Text>
        <FlatList
          data={[
            { key: "< 5 km", value: 5 },
            { key: "< 10 km", value: 10 },
            { key: "< 15 km", value: 15 },
          ]}
          renderItem={({ item }) => (
            <Chip
              mode="outlined"
              selected={item.value === this.state.distance}
              onPress={() => {
                this.handleDistance(item.value);
              }}
              style={styles.Distance}
            >
              {item.key}
            </Chip>
          )}
        />
        <Text style={styles.Subheader}>Price</Text>
        <FlatList
          data={[
            { key: "$", value: "$" },
            { key: "$$", value: "$$" },
            { key: "$$$", value: "$$$" },
          ]}
          renderItem={({ item }) => (
            <Chip
              mode="outlined"
              selected={item.value === this.state.price}
              onPress={() => {
                this.handlePrice(item.value);
              }}
              style={styles.Distance}
            >
              {item.key}
            </Chip>
          )}
        />
      </View>
    );
  }
}

const dimensions = Dimensions.get("window");

var styles = StyleSheet.create({
  Container: {
    paddingLeft: dimensions.width * (60 / 360),
    paddingTop: dimensions.height * (53 / 626),
  },
  ChipContainer: {
    flexDirection: "row",
  },
  Distance: {
    marginVertical: 5,
    marginRight: 15,
  },
  Chip: {
    marginRight: 5,
    marginVertical: 10,
  },
  Filter: {
    fontFamily: 'Raleway 800',
    color: "black",
    fontSize: 24,
    marginBottom: dimensions.height * (18 / 626),
  },
  Subheader: {
    fontFamily: "Josefin Sans regular",
    fontSize: 24,
    color: "black"
  },
});

export default Drawer;
