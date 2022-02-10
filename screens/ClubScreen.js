import React from 'react';
import {Text} from 'react-native';


const ClubScreen = ({route}) => {
    const club = route.params.club;

    return (
        <Text>{club.name}</Text>
    )
}

export default ClubScreen;