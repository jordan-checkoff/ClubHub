import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const FilterButton = ( {filter, type}) => {
    const [selected, updateSelected] = filter.includes(type) ? useState(true) : useState(false);

    const addFilter = () => {
        if (filter.includes(type)) {
            filter.splice(filter.indexOf(type), 1);
            updateSelected(false);
         } else {
             filter.push(type);
             updateSelected(true);
         }
    };

    return (
        // <Button title={type} onPress={addFilter} style={filter.includes(type) ? styles.selectedFilterButton : styles.filterButton} />
        <TouchableOpacity onPress={addFilter} style={selected ? styles.selectedFilterButton : styles.filterButton}>
            <Text>{type}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    filterButton: {
      width: 200,
      backgroundColor: 'lightgray',
      marginBottom: 20
    },
    selectedFilterButton: {
        width: 200,
        backgroundColor: 'gray',
        marginBottom: 20
      },
  })

export default FilterButton;