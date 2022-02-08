import React, {useContext, useState} from 'react';
import FilterContext from '../FilterContext';
import { StyleSheet, TouchableOpacity, Image, SafeAreaView, View, Text, Button } from 'react-native';
import FilterButton from '../components/FilterButton';

const FilterScreen = ({navigation, route}) => {
    const filter = useContext(FilterContext);
    // const [filter, updateFilter] = useState([]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchBox}>
                <Text style={styles.title}>Filter Search</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SearchScreen', {filter})}><Image style={styles.filterButton} source={{uri: "https://icons-for-free.com/iconfiles/png/512/x-1321215629555778185.png"}}/></TouchableOpacity>
            </View>
            <FilterButton filter={filter} type="Academic" />
            <FilterButton filter={filter} type="Performance" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c65fd9',
    },
    title: {
        fontSize: 30,
        color: 'white',
        flex: 9,
        textAlign: 'center'
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
    filterButton: {
        width: 20,
        height: 20,
        flex: 1
    }
  });

export default FilterScreen;