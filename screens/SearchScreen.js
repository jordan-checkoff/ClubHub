import React, {useState, useEffect, useContext} from 'react';
import { app } from '../firebase.js';
import { getDatabase, ref, child, get } from "firebase/database";
import { SearchBar } from 'react-native-elements';
import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity, Text } from 'react-native';
import DashboardComp from '../components/DashboardComp';
import SearchComp from '../components/SearchComp';
import UserContext from '../UserContext';


const SearchScreen = ({navigation, route}) => {

  const user = useContext(UserContext);
  const [data, updateData] = useState({clubList: {}, userData: {}, events: {}, pageLoaded: false});

  const dbRef = ref(getDatabase(app));
//   const databaseRecursion = (clubList, userData, list, length, events) => {
//     if (length == 0) {
//       updateData({clubList: clubList, userData: userData, events: databaseRecursion(list, length, {}), pageLoaded: true});
//     } else {
//       if (list[0][1]) {
//     get(child(dbRef, 'events/' + list[0][1].name)).then((snapshot) => {
//       if (snapshot.exists()) {
//         events[list[0][1].name] = {name: 5};
//         list.shift();
//         databaseRecursion(list, list.length, events);
//       }
//     }).catch((error) => {
//       console.error(error);
//     })
//   }
// }
//   }

//   const actualRecursion = (clubList, userData, list, length) => {
//     updateData({clubList: clubList, userData: userData, events: databaseRecursion(list, length, {}), pageLoaded: true})
//   }

  useEffect(() => {
    if (!data.pageLoaded) {
      let userData = {};
      let clubList = {};

      get(child(dbRef, 'clubList')).then((snapshot) => {
        if (snapshot.exists()) {
          clubList = snapshot.val();
        } else {
          console.log("No data available");
        }

          get(child(dbRef, 'users/' + user)).then((snapshot) => {
            if (snapshot.exists()) {
              userData = snapshot.val();
              
                  get(child(dbRef, 'events/')).then((snapshot) => {
                    if (snapshot.exists()) {
                      updateData({clubList: clubList, userData: userData, events: snapshot.val(), pageLoaded: true});
                    }
                  }).catch((error) => {
                    console.error(error);
                  })
            } else {
              console.log("No data available");
            }


      }).catch((error) => {
        console.error(error);
      });
    }).catch((error) => {
      console.error(error);
    });
    }})

  const [search, updateSearch] = useState('');
  const [dashboard, updateDashboard] = useState(true);

  const view = (club) => {
    navigation.navigate('ClubScreen', { club });
  };

  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.searchBox}>
              <TouchableOpacity onPress={() => updateDashboard(true)}><Image style={styles.filterButton} source={{uri: "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_home_48px-1024.png"}}/></TouchableOpacity>
              <SearchBar
              placeholder="Search"
              onFocus={() => updateDashboard(false)}
              onChangeText={updateSearch}
              value={search}
              round
              containerStyle={styles.searchBarOuter}
              inputContainerStyle={styles.searchBarInner}
              />
              <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}><Image style={styles.filterButton} source={{uri: "https://cdn4.iconfinder.com/data/icons/basic-user-interface-4/32/Filter-512.png"}}/></TouchableOpacity>
          </View>
          {dashboard ? <DashboardComp userData={data.userData} navigation={navigation} events={data.events}/>: <SearchComp nav={navigation} search={search} filter={route.params ? route.params.filter : [] } clubList={data.clubList}/> }
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#BBADFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrolling:{
      height: 100,
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
      width: 17,
      height: 17,
    }
  });

export default SearchScreen;