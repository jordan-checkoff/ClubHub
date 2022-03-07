import React from 'react';
import reactDom from 'react-dom';
import {Text} from 'react-native';
import { StyleSheet, TouchableOpacity, Image, SafeAreaView, View, Button } from 'react-native';

const DashboardScreen = (route) => {
    // const club = route.params.club; 

    return (
        <SafeAreaView >
            <View >
                <Text style ={styles.type}>Upcoming Events</Text>
                <View style={styles.upcoming_event_container}>
                    <Text style ={styles.club_event}>Club_name | Event_name</Text>
                    <Text style ={styles.club_eventdescription}>Club event description</Text>
                </View>
                <View style={styles.upcoming_event_container}>
                    <Text style ={styles.club_event}>Club_name | Event_name</Text>
                    <Text style ={styles.club_eventdescription}>Club event description</Text>
                </View>
                <View style={styles.upcoming_event_container}>
                    <Text style ={styles.club_event}>Club_name | Event_name</Text>
                    <Text style ={styles.club_eventdescription}>Club event description</Text>
                </View>
                <View style={styles.media}>
                <Image style={styles.location}source={require('../assets/ff22c66b5f7d9b60ec981b2f7411ed0d.png')} />
                </View>
                <View style={styles.switch_view}></View>
            </View>   
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    clubHub:{
        backgroundColor: "#B6D0E2",
        height: 100,
    },
    heading:{
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        fontWeight: "bold",
        marginTop: 10,
    },
    profile:{
        marginTop:20,
        marginLeft: 30,
        width: 100,
        height: 100,
        borderRadius: 45,
    },
    info:{
        marginTop: 30,
        marginLeft: 30
    },
    title:{
        fontSize: 22,
        fontWeight:"bold",
        marginTop: 30,
        
    },
    username:{
        fontSize: 15,
    },
    type:{
        backgroundColor:'#90EE90',
        height:17,
        width:50,
        textAlign: 'center',
        borderRadius: 30,
    },
    followers:{
        marginTop:11,
        marginLeft:30,
        flexDirection:'row'
    },
    member:{
        paddingRight:20,
    },
    setting:{
        marginTop:10,
        marginLeft:30,
        flexDirection:'row'
    },
    location:{
        height:20,
        width: 20,
    },
})

export default DashboardScreen;