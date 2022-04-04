import React, {useEffect, useState, useContext} from 'react';
import { app } from '../firebase.js';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { Text, TouchableOpacity, SafeAreaView, View } from 'react-native';
import UserContext from '../UserContext';


const DashboardScreen = ({navigation}) => {
    const auth = getAuth();

    const user = useContext(UserContext);
    const [userData, setUserData] = useState([]);
    const [following, setFollowing] = useState([]);

    const mySignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.navigate("LoginScreen");
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(() => {
        const dbRef = ref(getDatabase(app));

        if (user) {
            get(child(dbRef, 'users/' + user)).then((snapshot) => {
                if (snapshot.exists()) {
                    setUserData(snapshot.val());
                    if (snapshot.val().following) {
                        setFollowing(Object.keys(snapshot.val().following));
                    }
                } else {
                console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            })
        }
      })

    return (
        <SafeAreaView>
            <Text>{'Hi ' + userData.fname + ' ' + userData.lname}</Text>
            {following.map((name) => <Text key={name}>{name}</Text>)}
            <TouchableOpacity onPress={()=> navigation.navigate("SearchScreen")}><Text>Search</Text></TouchableOpacity>
            <TouchableOpacity onPress={mySignOut}><Text>Sign Out</Text></TouchableOpacity>
        </SafeAreaView>
    )
}

export default DashboardScreen;