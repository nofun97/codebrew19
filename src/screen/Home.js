import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Chip, IconButton, Searchbar } from 'react-native-paper';

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
          showLogIn : true,
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.topPart}>
                <IconButton icon= "menu" onPress= {()=> {}} />
                <Text style={styles.styleTitle}> My Home </Text>
            </View>
            <View style={{paddingBottom: 10, paddingTop: 10}}>
            <Searchbar>Avacado Roll</Searchbar>
            </View>
            <View style={styles.dietary}>
            <View style={styles.diets}>
                <Text>Diets: </Text>
                <Chip onPress={()=>{}}>Vegetarian</Chip>
                <Chip onPress={()=> {}}>GF</Chip>
            </View>
            <View style={styles.allergens}>
                <Text>Allergens: </Text>
                <Chip>Seafood</Chip>
            </View>
            </View>
        </View>
        )
    }
};

var styles = StyleSheet.create({
    styleTitle: {
        textAlign: "center",
        fontSize: 30,
        top: 0,
        left: "30%",
        position: "absolute"
    },
    topPart: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    diets: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "flex-start",
        alignItems: 'center',
        marginTop: 10
    },
    allergens: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "flex-start",
        marginTop: 10,
        alignItems: 'center'
    },
    dietary: {
        alignContent: "space-between",
        paddingLeft: 10
    },
    container: {
        paddingTop: 7
    }
})