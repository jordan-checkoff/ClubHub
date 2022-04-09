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
            <Text style={styles.text}>{type}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    filterButton: {
      width: "30%",
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      marginLeft: "1.666%",
      marginRight: "1.666%",
      backgroundColor: 'white',
      borderRadius: 10,
    },
    selectedFilterButton: {
        width: "30%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginLeft: "1.666%",
        marginRight: "1.666%",
        backgroundColor: '#757BC8',
        borderRadius: 10,
      },
      text: {
          fontSize: 12,
          color: 'black',
      }
  })

export default FilterButton;