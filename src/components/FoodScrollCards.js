import React, { Component } from "react";
import { TouchableOpacity, FlatList, Image, View, Text, StyleSheet } from "react-native";
import FoodCard from "./FoodCard";
import { API } from "aws-amplify";

export default class FoodScrollCards extends Component {
  constructor(props) {
    super(props);
    this.state = { foods: [] };
    API.get("Foods", "/")
      .then(response => this.setState({ foods: response }))
      .catch(err => console.log(err));
  }

  _keyExtractor = (item, index) => item.foodID;

  render() {
    return (
      <FlatList
        data={this.state.foods}
        keyExtractor={this._keyExtractor.bind(this)}
        renderItem={({ item }) => (
          <View style={styles.cards}>
          <FoodCard
            imageURL={item.pictureURL}
            rating={5}
            name={item.foodName}
          />
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  cards:{
    margin: 10,
  }
});
