import React, {useEffect, useState, useContext} from 'react';
import { app } from '../firebase.js';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Pressable, ScrollView, Image } from 'react-native';
import FollowingBox from './followingBox';
import EventBox from './EventBox';




const DashboardScreen = ({navigation, userData, events}) => {
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
            <View style={styles.header}>
                <Text style={styles.headerText}>CLUBHUB</Text>
            </View>
            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>{'Welcome, ' + userData.fname + ' ' + userData.lname}</Text>
            </View>
            <View style={styles.followListContainer}> 
                <View style={styles.followListTop}>
                    <Text style={styles.followingTopText}>following</Text>
                </View>
                <ScrollView style={styles.followListContent}>
                    <FollowingBox following={userData.following} navigation={navigation}/>
                </ScrollView>
            </View>
            <View style={styles.eventListContainer}> 
                <View style={styles.followListTop}>
                    <Text style={styles.followingTopText}>events</Text>
                </View>
                <View style={styles.followListContent}>
                <ScrollView>
                        <EventBox events={events} following={userData.following} />
                    </ScrollView>
                </View>
            </View>
            <View style={styles.extra}>
                <View style={styles.signOutButton}>
                    <TouchableOpacity onPress={mySignOut}><Text style={styles.signOutText}>sign out</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
    
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#BBADFF',
      alignItems: 'center',
      justifyContent: 'center',
      width: '95%',
    },
    header:{
        paddingTop: 10,
    },
    headerText:{
        fontFamily: 'Futura-Medium',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    welcome:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
    },
    welcomeText:{
        fontFamily: "Futura-Medium",
    },
    followListContainer: {
        borderRadius: 10,
        backgroundColor: 'white',
        height: 250,
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
        fontFamily: "Futura-Medium",
        color: 'white',
        alignItems: 'center',
    },
    followListContent:{
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
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
    },
    signOutButton:{
        width: 150,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: 'black',
        borderRadius: 10,
    },
    signOutText:{
        color: 'white',
        fontFamily: "Futura-Medium",
    }
});
export default DashboardScreen;