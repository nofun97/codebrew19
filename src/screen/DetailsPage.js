import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Rating, Icon } from "react-native-elements";

import ReviewScroll from "../components/ReviewScrollCard";

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
        <Image
          style={{ width: imageWidth, height: imageHeight }}
          source={{
            uri:
              "https://facebook.github.io/react-native/docs/assets/favicon.png",
          }}
        />
      <View style={{marginLeft: 10}}>
        <Text style={styles.foodName}>Avacado Roll</Text>
        <View style={styles.ratings}>
        <Rating
                  imageSize={20}
                  readonly
                  startingValue={this.props.rating}
                  style={{ paddingTop: 5 }}
                />
        <Text style={styles.randomText}>  4.6/5</Text>
        </View>
        <Text style= {styles.randomText}>$</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  foodName: {
    fontWeight: "bold",
    fontSize: 24,
    paddingTop: 5,
  },
  randomText: {
    fontWeight: "bold",
    fontSize: 19,
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
    marginLeft: -3
  }
});
