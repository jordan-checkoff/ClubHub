import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const LoginInput = ({field, fieldvar, fieldupdate}) => {

    return (
        <TextInput placeholder={field} value={fieldvar} onChangeText={fieldupdate} style={styles.input}/>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: 'gray',
        marginBottom: 20,
        padding: 10,
    },
})

export default LoginInput;