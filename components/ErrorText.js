import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ErrorText = ({message}) => {

    return (
        <Text style={styles.error}>{message}</Text>
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
})

export default ErrorText;