import React, {useEffect, useState} from 'react';
import { app } from '../firebase.js';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { Text, View } from 'react-native';

const mapper = (list) => {
    list.map((item) => <Text>{item}</Text>)
}

const DashboardScreen = () => {
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
            {userData ? userData.clubs.map((item) => <Text key={item}>{item}</Text>) : <Text>loading</Text>}
        </View>
    )
}

export default DashboardScreen;