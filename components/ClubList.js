import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ClubListItem from './ClubListItem';

const ClubList = ({view, clubs, search, filter}) => {
  const courseFilter = function(club) {
    if (filter.length != 0) {
      if (club.name.toLowerCase().includes(search.toLowerCase()) && filter.includes(club.type)) {
        return <ClubListItem view={view} club={club} key={club.name} />
      }
    } else {
      if (club.name.toLowerCase().includes(search.toLowerCase())) {
        return <ClubListItem view={view} club={club} key={club.name} />
      }
    }
  }
    
  return (
    <ScrollView style={styles.clubList}>
      {clubs.map(courseFilter)}
    </ScrollView>
  )}

const styles = StyleSheet.create({
    clubList: {
      width: "100%",
      backgroundColor: "lightgray",
    },
  })

export default ClubList;