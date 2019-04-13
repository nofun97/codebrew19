import React, { Component } from "react";
import { TouchableOpacity, FlatList, Image, View, Text } from "react-native";
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

  render() {
    return (
      <FlatList
        data={this.state.foods}
        renderItem={({ item }) => (
          <FoodCard
            imageURL={item.pictureURL}
            rating={5}
            name={item.foodName}
          />
        )}
      />
    );
  }
}
