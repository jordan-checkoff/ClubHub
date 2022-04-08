import React, {useEffect, useState, useContext} from 'react';
import { app } from '../firebase.js';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Pressable, ScrollView, Image } from 'react-native';




const FollowingBox = ({following, navigation}) => {
    const view = (club) => {
        navigation.navigate('ClubScreen', { club });
      };
    
    return (
        <View style={styles.followingClub}>
            {following && Object.values(following).map((club) => 
            <TouchableOpacity style={styles.clubListItem} onPress={() => view(club)}>
                <View style={styles.clubListBlock1}>
                    <Image style={styles.clubListImage} source={{uri: club.icon}}></Image>
                </View>
                <View style={styles.clubListBlock2}> 
                    <Text style={styles.followingText} key={club.name}>{club.name}</Text>
                </View>              
            </TouchableOpacity>)}
        </View>
    )
    }

const styles = StyleSheet.create({
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
})

export default FollowingBox;