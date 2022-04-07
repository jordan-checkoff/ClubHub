import React, {useEffect, useState, useContext} from 'react';
import { app } from '../firebase.js';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Pressable, ScrollView, Image } from 'react-native';

const FollowingBox = ({following}) => (
    <TouchableOpacity style={styles.followingClub}>
        {following && Object.values(following).map((name) => <Text style={styles.followingText} key={name}>{name}</Text>)}                   
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    followingClub:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
    },
    followingText:{
        borderColor: 'black',
        borderWidth: 1,
        padding:3,
    }
})

export default FollowingBox;