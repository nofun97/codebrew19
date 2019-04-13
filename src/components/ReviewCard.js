import React, { Component } from "react";
import { Card, Caption, Chip } from "react-native-paper";
import { Text,View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Rating } from "react-native-elements";

const style = StyleSheet.create({
  Container: {
    justifyContent: "flex-start",
  },
  Description: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: -5,
    alignItems: 'center',
    justifyContent: "space-between"
  },
  nameRating: {
    flexDirection: "row",
    alignItems: "center"
  },
  date: {
      textAlign:"right",
  },
  secondPart: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  chip: {
      marginRight: 5
  },
  review: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 7,
    alignItems: 'center',
    paddingBottom: 10,
    marginBottom: 25
  }
});

export default class ReviewCard extends Component {
  render() {
    return (
        <Card>
          <View style={style.Container}>
            <View style={style.Description}>
            <View style={style.nameRating}>
              <Text style={{fontSize:16, fontWeight: "bold"}}>Jennifer Smith  </Text>
              <Rating
                imageSize={20}
                readonly
                startingValue={this.props.rating}
                style={{ paddingVertical: 10 }}
              />
              </View>
              <Text style={style.date}>06/03/2019</Text>
              </View>
              <View style={style.secondPart}>
              <Chip mode= "outlined" theme={{colors: {surface: 'grey'}}} selectedColor="white" style={style.chip}>Vego</Chip>
              <Text style={style.chip}>Allergy:</Text>
              <Chip style= {style.chip}>Seafood</Chip>
              </View>
              <Text style={style.review}>Great healthy sushi sold along londale street.</Text>
          </View>
        </Card>
    );
  }
}
