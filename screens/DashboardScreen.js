import React, {useEffect, useState} from 'react';
import { app } from '../firebase.js';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { Text, View, TouchableOpacity, Touchable } from 'react-native';

const DashboardScreen = ({navigation}) => {
    const auth = getAuth();
    const user = auth.currentUser.uid;
    const [userData, setUserData] = useState('');

    useEffect(() => {
        const dbRef = ref(getDatabase(app));

        if (user) {
            get(child(dbRef, 'users/' + user)).then((snapshot) => {
                if (snapshot.exists()) {
                setUserData(snapshot.val());
                } else {
                console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            })
        }
      })

    return (
        <View>
            <Text>{'Hi ' + userData.fname + ' ' + userData.lname}</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("SearchScreen")}><Text>Search</Text></TouchableOpacity>
        </View>
    )
}

export default DashboardScreen;