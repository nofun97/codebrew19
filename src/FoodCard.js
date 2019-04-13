import React, { Component } from "react";
import { Card, Caption } from "react-native-paper";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Rating } from "react-native-elements";

const style = StyleSheet.create({
  Container: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  Description: {
    flex: 2,
    marginLeft: 7,
    marginVertical: 30,
  },
  Image: {
    width: 150,
    height: 150,
    flex: 1,
  },
});

export default class FoodCard extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Card>
          <View style={style.Container}>
            <Image
              source={{
                uri: this.props.imageURL,
              }}
              style={style.Image}
            />
            <View style={style.Description}>
              <Caption style={{ fontSize: 20 }}>{this.props.name}</Caption>
              <Rating
                imageSize={20}
                readonly
                startingValue={this.props.rating}
                style={{ paddingVertical: 10 }}
              />
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}
