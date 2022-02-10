import React, {useState} from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity, Text } from 'react-native';
import ClubList from '../components/ClubList';

const database = {
    "clubList": [
      {"name": "Boomshaka", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": "https://www.ieee.org/content/dam/ieee-org/ieee/web/org/about/whatis/71858.gif", "type": "Performance"},
      {"name": "IEEE", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": "https://www.ieee.org/content/dam/ieee-org/ieee/web/org/about/whatis/71858.gif", "type": "Academic"},
      {"name": "Science Olympiad", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": "https://www.ieee.org/content/dam/ieee-org/ieee/web/org/about/whatis/71858.gif"},
      {"name": "Undergraduate Chemistry Council", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": "https://www.ieee.org/content/dam/ieee-org/ieee/web/org/about/whatis/71858.gif", "type": "Academic"},
      {"name": "Club 5", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": "https://www.ieee.org/content/dam/ieee-org/ieee/web/org/about/whatis/71858.gif"},
      {"name": "Club 6", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": "https://www.ieee.org/content/dam/ieee-org/ieee/web/org/about/whatis/71858.gif"},
      {"name": "Club 7", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": "https://www.ieee.org/content/dam/ieee-org/ieee/web/org/about/whatis/71858.gif"},
      {"name": "Club 8", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": "https://www.ieee.org/content/dam/ieee-org/ieee/web/org/about/whatis/71858.gif"},
      {"name": "Club 9", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": "https://www.ieee.org/content/dam/ieee-org/ieee/web/org/about/whatis/71858.gif"},
      {"name": "Club 10", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": "https://www.ieee.org/content/dam/ieee-org/ieee/web/org/about/whatis/71858.gif"},
      {"name": "Club 11", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": "https://www.ieee.org/content/dam/ieee-org/ieee/web/org/about/whatis/71858.gif"},
    ]
  }
const SearchScreen = ({navigation, route}) => {
    const [search, updateSearch] = useState('');

    const view = (club) => {
      navigation.navigate('ClubScreen', { club });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchBox}>
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
            <ClubList view={view} clubs={database.clubList} search={search} filter={route.params ? route.params.filter : []}  /> 
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