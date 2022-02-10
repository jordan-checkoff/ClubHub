import React from 'react';
import {View, StyleSheet} from 'react-native';
import FilterButton from './FilterButton';

const FilterList = ({filter, types}) => {
    types.sort();

    return (

        <View style={styles.container}>
            {types.map((type) => <FilterButton filter={filter} type={type} key={type} /> )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        paddingLeft: "5%",
        paddingRight: "5%",
    }
  })

export default FilterList;