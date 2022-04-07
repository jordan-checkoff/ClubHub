import React, {useState, useEffect} from 'react';
import { app } from '../firebase.js';
import { getDatabase, ref, child, get } from "firebase/database";
import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity, Text } from 'react-native';
import ClubList from './ClubList';


const SearchScreen = ({navigation, route, search, clubList, filter}) => {

    const view = (club) => {
      navigation.navigate('ClubScreen', { club });
    };
  
    return (
        <SafeAreaView style={styles.container}>
            <ClubList view={view} clubs={clubList} search={search} filter={filter}  /> 
        </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#c65fd9',
        alignItems: 'center',
        justifyContent: 'center',
      }
    });
  
  export default SearchScreen;