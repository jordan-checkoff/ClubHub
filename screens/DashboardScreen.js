import React from 'react';
import reactDom from 'react-dom';
import {Text} from 'react-native';
import { StyleSheet, TouchableOpacity, Image, SafeAreaView, View, Button } from 'react-native';

const DashboardScreen = ({route}) => {
    const club = route.params.club; 

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

export default DashboardScreen;