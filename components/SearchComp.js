import React, {useState, useEffect} from 'react';
import { app } from '../firebase.js';
import { getDatabase, ref, child, get } from "firebase/database";
import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import ClubList from './ClubList';

const SearchScreen = ({nav, search, clubList, filter}) => {

    const view = (club) => {
      nav.navigate('ClubScreen', { club });
    };
  
    return (
        <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}>
            <SafeAreaView style={styles.container}>
            <ClubList view={view} clubs={clubList} search={search} filter={filter}  /> 
        </SafeAreaView>
        </KeyboardAvoidingView>
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