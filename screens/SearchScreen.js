import React, {useState, useEffect} from 'react';
import { app } from '../firebase.js';
import { getDatabase, ref, child, get } from "firebase/database";
import { SearchBar } from 'react-native-elements';
import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity, Text } from 'react-native';
import ClubList from '../components/ClubList';

const SearchScreen = ({navigation, route}) => {

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

  const [search, updateSearch] = useState('');

  const view = (club) => {
    navigation.navigate('ClubScreen', { club });
  };

  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.searchBox}>
              <TouchableOpacity onPress={() => navigation.navigate('DashboardScreen')}><Image style={styles.filterButton} source={{uri: "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_home_48px-1024.png"}}/></TouchableOpacity>
              <SearchBar
              placeholder="Search"
              onChangeText={updateSearch}
              value={search}
              round
              containerStyle={styles.searchBarOuter}
              inputContainerStyle={styles.searchBarInner}
              />
              <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}><Image style={styles.filterButton} source={{uri: "https://cdn4.iconfinder.com/data/icons/basic-user-interface-4/32/Filter-512.png"}}/></TouchableOpacity>
          </View>
          <ClubList view={view} clubs={clubList} search={search} filter={route.params ? route.params.filter : []}  /> 
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
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
    searchBoxOpen: {
      width: '100%',
      height: '100%',
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
    filterButton: {
      width: 20,
      height: 20
    }
  });

export default SearchScreen;