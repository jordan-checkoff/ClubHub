import React, {useState, useEffect} from 'react';
import { app } from '../firebase.js';
import { getDatabase, ref, child, get } from "firebase/database";
import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity, Text } from 'react-native';
import ClubList from './ClubList';


const SearchScreen = ({navigation, route, search}) => {

    const [clubList, setClubList] = useState([]);
  
    useEffect(() => {
      const dbRef = ref(getDatabase(app));
  
      get(child(dbRef, 'clubList')).then((snapshot) => {
        if (snapshot.exists()) {
          setClubList(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    })
    
    const view = (club) => {
      navigation.navigate('ClubScreen', { club });
    };
  
    return (
        <SafeAreaView style={styles.container}>
            <ClubList view={view} clubs={clubList} search={search} filter={[]}  /> 
        </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#c65fd9',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
      }
    });
  
  export default SearchScreen;