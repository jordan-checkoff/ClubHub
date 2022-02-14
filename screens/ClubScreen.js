import React from 'react';
import {Text} from 'react-native';
import { StyleSheet, TouchableOpacity, Image, SafeAreaView, View, Button } from 'react-native';

const ClubScreen = ({route}) => {
    const club = route.params.club;

    return (
        //Remember we can only have one parent view. We can have views inside parent!!
        <View style={styles.top}>
            <View style={styles.clubHub}>
                <Text style ={styles.heading}>ClubHub</Text>
            </View>
            <View style={styles.middleBlock}>
            </View>
            <Text>{club.name}</Text></View>
    )
}

const styles = StyleSheet.create({
    clubHub:{
        marginTop: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 10,
        height: 100,
    },
    heading:{
        fontSize: 32,
        color: 'black',
        textAlign: 'left',
        fontWeight: "bold",
        marginLeft: 10,
    },
    middleBlock:{
        //Implement this middle grey block
    }
})

export default ClubScreen;