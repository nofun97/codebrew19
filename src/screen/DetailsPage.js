import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from "react-native";
import { Button, TextInput, IconButton } from "react-native-paper";
import { Rating, Icon } from "react-native-elements";

import ReviewScroll from "../components/ReviewScrollCard";

// in this component we have this.props.navigation.getParam(x)
// Where x are "name" "imageURL" "restaurantIDs" "rating"

export default class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogIn: true,
      email: "",
      password: "",
      username: "",
    };
  }

  render() {
    const dimensions = Dimensions.get("window");
    const imageHeight = Math.round(dimensions.width * 0.739);
    const imageWidth = dimensions.width;

    return (
      <ScrollView>
        <IconButton size={24} color="black" style={styles.bookmark} icon="arrow-back" onPress={() => {this.props.navigation.goBack()}}/>
        <Image
          style={{ width: imageWidth, height: imageHeight }}
          source={{
            uri: this.props.navigation.getParam('imageURL'),
          }}
        />
      <View style={{marginLeft: 10}}>
        <Text style={styles.foodName}>{this.props.navigation.getParam('name')}</Text>
        <View style={styles.ratings}>
        <Rating
                  imageSize={20}
                  readonly
                  startingValue={this.props.navigation.getParam('rating')}
                  style={{ paddingTop: 5 }}
                />
        <Text style={styles.RatingText}>  {this.props.navigation.getParam('rating')}/5</Text>
        </View>
        <Text style= {styles.dollarText}>$</Text>
        <Text style= {styles.distance}>1.5 km</Text>
        <Text style= {styles.randomText}>Tokui Sushi</Text>
        <View style={styles.button}>
          <Icon name= "location-on" color="lightseagreen"/>
          <Text style={styles.address}> 300 Lonsdale St, Melbourne, 3000, VIC </Text>
        </View>
        <Text style={styles.randomText}>Reviews</Text>
      </View>
      <ReviewScroll />
      </ScrollView>
    );
  }
}

const dimensions = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  foodName: {
    fontFamily: 'Raleway 800',
    fontSize: 24,
    color: "black",
    paddingTop: 10,
  },
  randomText: {
    fontFamily: "Muli 700",
    fontSize: 22,
    color: "black",
    paddingTop: 5
  },
  distance:{
    fontSize: 17
  },
  button: {
    fontSize: 13,
    alignItems: 'flex-end',
    flexDirection: "row",
    paddingTop: 5
  },
  ratings: {
    flexDirection: "row",
    alignItems: "center"
  },
  address: {
    fontFamily: "Muli regular",
    color: "black",
    fontSize: 14,
    marginLeft: -3
  }, 
  bookmark: {
    position: "absolute",
    zIndex: 5,
    width: dimensions.width * 0.11,
    backgroundColor: "white",
    height: dimensions.width * 0.11,
    elevation: 10
  },
  RatingText: {
    fontFamily: "HelveticaNeue",
    fontWeight: "bold",
    fontSize: 20,
    color: "black"
  },
  dollarText: {
    fontFamily: "Josefin Sans 600",
    fontSize: 22,
    color: "black"
  },
  distance: {
    fontFamily: "Muli 700",
    fontSize: 19,
    color: "black"
  }
});
