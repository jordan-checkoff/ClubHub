import React, {useEffect, useState, useContext} from 'react';
import { app } from '../firebase.js';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Pressable, ScrollView, Image } from 'react-native';



const EventBox = ({events, following}) => {

    const isFollowing = (objectClubs, club) => {
        var result = false;
        Object.entries(objectClubs).map((array) => {
            if (array[1].name == club) {
                result = true;
            }
        })
        return result;
    };

    const thing = (x) => {
        if (following != undefined) {
        if (isFollowing(following, x[0])) {
        return <View key={x[0]}>
            <Text style={styles.followingText}>{x[0]}</Text>
            {Object.entries(x[1]).map(thing2)}
        </View>
        }
    }
    }
    
    const thing2 = (x) => {
        return <View key={x[0]} style={styles.event}>
            <Text style={styles.eventName}>{x[0]}</Text>
            <Text>{x[1].date}</Text>
            <Text>{x[1].location}</Text>
            <Text>{x[1].description}</Text>
        </View>
    }
    
    return (
        <View style={styles.followingClub}>
            {Object.entries(events).map(thing)}
        </View>
    );
    };

    

const styles = StyleSheet.create({
    event: {
        marginBottom: 20,
        marginLeft: 20
    },
    eventName: {
        fontWeight: 'bold'
    },
    followingClub:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
    },
    followingText:{
        fontWeight: 'bold',
        fontSize:17,
        paddingTop: 4,
        paddingLeft: 10,
    },
    clubListItem: {
        flexDirection: 'row',
        height: 70,
        padding: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
      },
    clubListImage: {
        width: 50,
        height: 50,
      },
    clubListBlock1: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    flex:1,
    paddingTop: 6,
    },
    clubListBlock2: {
        flex: 4,
    },
});

export default EventBox;