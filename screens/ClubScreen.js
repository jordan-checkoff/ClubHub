import React, {useContext, useState, useEffect} from 'react';
import {Text} from 'react-native';
import { StyleSheet, TouchableOpacity, Image, SafeAreaView, View, Button } from 'react-native';
import { getDatabase, ref, get, child, update, push, set, remove} from "firebase/database";
import UserContext from '../UserContext';
import {app} from '../firebase'
import { updateCurrentUser } from 'firebase/auth';

const ClubScreen = ({route, navigation}) => {
    const db = getDatabase();
    const club = route.params.club;
    const user = useContext(UserContext);
    const [following, setFollowing] = useState(false);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const dbRef = ref(getDatabase(app));
        if (user) {
            get(child(dbRef, 'users/' + user + '/following')).then((snapshot) => {
                if (snapshot.exists()) {
                    if (Object.values(snapshot.val()).includes(club.name)) {
                        setFollowing(true);
                    } else {
                        setFollowing(false);
                    }
                } else {
                    setFollowing(false);
                }
            }).catch((error) => {
                console.error(error);
            });
            get(child(dbRef, "users/" + user + '/admin')).then((snapshot) => {
                if (snapshot.exists()) {
                    if (Object.values(snapshot.val()).includes(club.name)) {
                        setAdmin(true);
                    } else {
                        setAdmin(false);
                    }
                }
            }).catch((error) => {
                console.error(error);
            });
        }
      })

    const follow = () => {
        if (following) {
            const dbRef = ref(getDatabase(app));
            get(child(dbRef, 'users/' + user + '/following')).then((snapshot) => {
                if (snapshot.exists()) {
                    let following = snapshot.val();
                    let key = Object.keys(following).find(key => following[key] === club.name);
                    const postListRef = ref(db, 'users/' + user + '/following/' + key);
                    remove(postListRef);
                }
            }).catch((error) => {
                console.error(error);
            })
            setFollowing(false);
        } else {
            const postListRef = ref(db, 'users/' + user + '/following');
            const newPostRef = push(postListRef);
            set(newPostRef, club.name);
            setFollowing(true);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.clubscreen}>
                <View style={styles.clubHub}>
                    <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}><Text>back</Text></TouchableOpacity>
                    <Text style ={styles.heading}>{club.name}</Text>
                    <Image style={styles.profile}source={require('../assets/boomshaka.png')} />
                </View>
                <View style={styles.info}>
                    <Text style ={styles.title}>{club.name} Northwestern University</Text>
                    <Text style ={styles.username}>@{club.name}</Text>
                    <Text style ={styles.type}>Dance</Text>
                    <TouchableOpacity onPress={follow}><Text>{following ? 'Following' : 'Follow'}</Text></TouchableOpacity>
                    <Text>{admin && "Admin"}</Text>
                    {admin && <TouchableOpacity onPress={() => navigation.navigate("EventScreen", {club: club.name})}><Text>Create Event</Text></TouchableOpacity>}
                    <Text style = {styles.info}>{club.description}</Text>
                    <Text>Northwestern University's premier drum, dance, and rhythm ensemble.</Text>
                </View>
                <View style ={styles.followers}>
                    <Text style ={{ fontWeight: 'bold' }}>127 </Text>
                    <Text style ={styles.member}>members </Text>
                    <Text style ={{ fontWeight: 'bold' }}>284 </Text>
                    <Text style ={styles.follower}>followers</Text>
                </View>
                <View style ={styles.setting}>
                    <Image style={styles.location}source={require('../assets/745228.png')} />
                    <Text style ={styles.member}>Tech LR2 </Text>
                    <Image style={styles.location}source={require('../assets/ff22c66b5f7d9b60ec981b2f7411ed0d.png')} />
                    <Text style ={styles.follower}>Periodically</Text>
                </View>
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

export default ClubScreen;