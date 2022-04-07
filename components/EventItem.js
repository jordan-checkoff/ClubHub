import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';

const EventItem = ({event}) => (
    <View>
        <Text>{event.description}</Text>
        <Text>{event.location}</Text>
        <Text>{event.date}</Text>
    </View>
)

// const styles = StyleSheet.create({
//   clubListItem: {
//     flexDirection: 'row',
//     height: 120,
//     padding: 20,
//     borderTopWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: 'gray',
//     backgroundColor: 'white',
//   },
//   clubListBlock1: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   clubListImage: {
//     width: 50,
//     height: 50,
//   },
//   clubListBlock2: {
//     flex: 4,
//   },
//   clubListName: {
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// })

export default EventItem;