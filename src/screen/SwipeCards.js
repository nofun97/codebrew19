"use strict";

import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { API } from "aws-amplify";
import SwipeCards from "react-native-swipe-cards";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image
          style={styles.thumbnail}
          source={{ uri: this.props.pictureURL }}
        />
        <Text style={styles.text}>{this.props.foodName}</Text>
      </View>
    );
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    );
  }
}

// const cards = [
//   { name: "1", image: "https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif" },
//   { name: "2", image: "https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif" },
//   { name: "3", image: "https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif" },
//   { name: "4", image: "https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif" },
//   { name: "5", image: "https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif" },
//   { name: "6", image: "https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif" },
//   { name: "7", image: "https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif" },
//   { name: "8", image: "https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif" },
//   {
//     name: "9",
//     image: "https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif",
//   },
// ];

// const cards2 = [
//   {
//     name: "10",
//     image: "https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif",
//   },
//   { name: "11", image: "https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif" },
//   { name: "12", image: "https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif" },
//   {
//     name: "13",
//     image: "https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif",
//   },
// ];

export default class SwipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      outOfCards: false,
    };
    API.get("Foods", "/")
      .then(response => this.setState({ cards: response }))
      .catch(err => console.log(err));
  }

  handleYup(card) {
    this.props.navigation.navigate("DetailsPage",{
      imageURL: card.pictureURL,
      name: card.foodName,
      rating: 5,
      restaurantIDs: card.restaurantIDs,
    })
    console.log("yup");
  }

  handleNope(card) {
    console.log("nope");
  }

  cardRemoved(index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3;

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(
        `There are only ${this.state.cards.length - index - 1} cards left.`
      );

      // if (!this.state.outOfCards) {
      //   console.log(`Adding ${cards2.length} more cards`);

      //   this.setState({
      //     cards: this.state.cards.concat(cards2),
      //     outOfCards: true,
      //   });
      // }
    }
  }

  render() {
    var yupStyle={
      position: "absolute",
      bottom: Dimensions.get('window').height * 0.02,
      right: Dimensions.get('window').width * 0.02,
      borderWidth: 0,
    }

    var yupView=(
      <View>
        <Image
          style={{width: 150, height: 150}}
          source={{uri: 'https://memecreator.org/static/images/memes/4900481.jpg'}}
        />
      </View>
    )

    var nopeStyle={
      position: "absolute",
      bottom: Dimensions.get('window').height * 0.02,
      left: Dimensions.get('window').width * 0.02,
      borderWidth: 0,
    }

    var nopeView=(
      <View>
        <Image
          style={{width: 150, height: 150}}
          source={{uri: 'https://cdn11.bigcommerce.com/s-7va6f0fjxr/images/stencil/1280x1280/products/53159/69398/Nope-Cat-Meme-Jdm-Japanese-Vinyl-Decal-Sticker__19930.1506204160.jpg?c=2&imbypass=on'}}
        />
      </View>
    )

    return (
      <SwipeCards
        cards={this.state.cards}
        loop={true}
        renderCard={cardData => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}
        yupStyle={yupStyle}
        yupView={yupView}
        nopeStyle={nopeStyle}
        noView={nopeView}
        handleYup={this.handleYup.bind(this)}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    borderRadius: 5,
    overflow: "hidden",
    borderColor: "grey",
    backgroundColor: "white",
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  noMoreCards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
