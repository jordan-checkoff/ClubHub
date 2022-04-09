import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';

const ClubListItem = ({view, club}) => (
    <TouchableOpacity style={styles.clubListItem} onPress={() => view(club)}>
      <View style={styles.clubListBlock1}>
        <Image style={styles.clubListImage} source={{uri: club.icon}}></Image>
      </View>
      <View style={styles.clubListBlock2}>
        <Text style={styles.clubListName}>{club.name}</Text>
        <Text>{club.description}</Text>
      </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  clubListItem: {
    flexDirection: 'row',
    height: 120,
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  clubListBlock1: {
    flex: 1,
    justifyContent: 'center',
  },
  clubListImage: {
    width: 50,
    height: 50,
  },
  clubListBlock2: {
    flex: 4,
  },
  clubListName: {
    fontFamily: "Futura-Medium",
    fontWeight: 'bold',
    marginBottom: 10,
  },
})

export default ClubListItem;