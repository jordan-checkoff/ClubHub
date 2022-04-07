import React, {useEffect, useState, useContext} from 'react';
import { app } from '../firebase.js';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { SearchBar } from 'react-native-elements';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Pressable } from 'react-native';
import UserContext from '../UserContext';


const DashboardScreen = ({navigation}) => {
    const auth = getAuth();

    const user = useContext(UserContext);
    const [userData, setUserData] = useState([]);

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
                } else {
                console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            })
        }
      })

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
            onPress={()=> navigation.navigate("SearchScreen")}
            style={styles.searchBox}>
                <SearchBar
                    disabled
                    placeholder="Search"
                    round
                    containerStyle={styles.searchBarOuter}
                    inputContainerStyle={styles.searchBarInner}
                />
            </TouchableOpacity>
            <View style={styles.followListContainer}> 
                <View style={styles.followListTop}>
                    <Text style={styles.followingTopText}>Following</Text>
                </View>
                <View style={styles.followListContent}>
                </View>
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
            {/* <View>{userData.following.map((name) => <Text key={name}>{name}</Text>)}</View> */}
        </SafeAreaView>
    );
}
    
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#c65fd9',
      alignItems: 'center',
      justifyContent: 'center',
    },

    searchBox: {
        width: '100%',
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 17,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    searchBarOuter: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        height: 5,
        width: '95%',
        position: 'relative',
        top: -15
      },
      searchBarInner: {
      backgroundColor: 'white',
      height: 20,
      width: '100%',
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
    }
});
export default DashboardScreen;