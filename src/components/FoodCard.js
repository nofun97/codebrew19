import React, { Component } from "react";
import { Card, Caption } from "react-native-paper";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Rating } from "react-native-elements";

export default class FoodCard extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("DetailsPage", {
            imageURL: this.props.imageURL,
            name: this.props.name,
            rating: this.props.rating,
            restaurantIDs: this.props.restaurantIDs,
          });
        }}
      >
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
              <View style={style.Rating}>
                <Rating
                  imageSize={20}
                  readonly
                  startingValue={this.props.rating}
                  style={{ paddingVertical: 10 }}
                />
                <Text> {this.props.rating}/5</Text>
              </View>
              <Text>$$</Text>
              <Text>3.2km</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  Container: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  Description: {
    flex: 3,
    paddingLeft: 7,
    paddingTop: 12,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  Image: {
    width: 150,
    height: 150,
    flex: 2,
  },
  Rating: {
    flexDirection: "row",
    alignItems: "center",
  },
});
