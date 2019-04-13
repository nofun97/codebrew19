import React, { Component } from "react";
import { TouchableOpacity, FlatList, Image, View, Text } from "react-native";
import ReviewCard from "./ReviewCard";

export default class ReviewScrollCards extends Component {
  constructor(props) {
    super(props);
    this.state = { Reviews: [{key:'a'},{key:'b'},{key:'c'}] };
  }

  _keyExtractor = (item, index) => item.key;

  render() {
    return (
      <FlatList
        data={this.state.Reviews}
        keyExtractor={this._keyExtractor.bind(this)}
        renderItem={({ item }) => (
           <View style={{margin:10}}>
          <ReviewCard />
          </View> 
        )}
      />
    );
  }
}
