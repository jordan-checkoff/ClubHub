import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LoadingScreen = () => {

    return (
        <View style={styles.container}>
            <Text>ClubHub</Text>
            <Text>Loading</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
})

export default LoadingScreen;