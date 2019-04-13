import React, { Component } from "react";
import { TouchableOpacity, FlatList, Image, View, Text } from "react-native";
import ReviewCard from "./ReviewCard";

export default class ReviewScrollCards extends Component {
  constructor(props) {
    super(props);
    this.state = { Reviews: ['a','a','a'] };
  }

  render() {
    return (
      <FlatList
        data={this.state.Reviews}
        renderItem={({ item }) => (
           <View style={{margin:10}}>
          <ReviewCard />
          </View> 
        )}
      />
    );
  }
}
