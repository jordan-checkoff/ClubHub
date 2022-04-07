import React, {useEffect, useState, useContext} from 'react';
import { app } from '../firebase.js';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Pressable, ScrollView, Image } from 'react-native';
import FollowingBox from './followingBox';




const DashboardScreen = ({navigation, userData, view, club}) => {
    const auth = getAuth();

    const mySignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.navigate("LoginScreen");
          }).catch((error) => {
            // An error happened.
          });
    }


return (
        <SafeAreaView style={styles.container}>
            <View style={styles.followListContainer}> 
                <View style={styles.followListTop}>
                    <Text style={styles.followingTopText}>Following</Text>
                </View>
                <ScrollView style={styles.followListContent}>
                    <FollowingBox following={userData.following}/>
                </ScrollView>
            </View>
            <View style={styles.eventListContainer}> 
                <View style={styles.followListTop}>
                    <Text style={styles.followingTopText}>Events</Text>
                </View>
                <View style={styles.followListContent}>
                </View>
            </View>
            <View style={styles.extra}>
                <Text>{'Hi ' + userData.fname + ' ' + userData.lname}</Text>
                <TouchableOpacity onPress={mySignOut}><Text>Sign Out</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
    
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#c65fd9',
      alignItems: 'center',
      justifyContent: 'center',
      width: '95%',
    },

    followListContainer: {
        borderRadius: 10,
        backgroundColor: 'white',
        height: 200,
        width: '95%',
    },
    followListTop:{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',    
    },
    followingTopText: {
        color: 'white',
        alignItems: 'center',
    },
    followListContent:{
        backgroundColor: '#AAC9CE',
        width: '100%',
        height: '100%'
    },
    extra:{
        marginTop: 30,
    },
    eventListContainer:{
        margin: 50,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 200,
        width: '95%',
    },
    followingClub:{
        flexDirection: 'row',
        height: 60,
        padding: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
    },
    clubListBlock1:{
        flex: 1,
        justifyContent: 'center',
    }
});
export default DashboardScreen;