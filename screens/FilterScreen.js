import React, {useContext, useState} from 'react';
import FilterContext from '../FilterContext';
import { StyleSheet, TouchableOpacity, Image, SafeAreaView, View, Text, Button } from 'react-native';
import FilterList from '../components/FilterList';

const FilterScreen = ({navigation}) => {
    const filter = useContext(FilterContext);
    const types = ["Academic", "Cultural", "Performance", "Pre-Professional", "Volunteer", "Advocacy", "Entertainment", "Fraternity/Sorority"];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>Filter Search</Text>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('SearchScreen', {filter})}>
                    <Image style={styles.filterButton} source={{uri: "https://icons-for-free.com/iconfiles/png/512/x-1321215629555778185.png"}}/>
                </TouchableOpacity>
            </View>
            <FilterList filter={filter} types={types} />
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
        textAlign: 'center',
        position: 'relative',
        left: 20
    },
    titleBox: {
        width: '100%',
        height: 80,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
    buttonWrapper: {
        height: 30
    },
    filterButton: {
        width: 30,
        height: 30,
        flex: 1,
    }
  });

export default FilterScreen;