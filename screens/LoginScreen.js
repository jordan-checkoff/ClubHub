import React, {useState} from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import LoginInput from '../components/LoginInput';
import ErrorText from '../components/ErrorText';

const auth = getAuth();

const LoginScreen = ({navigation}) => {

  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [error, updateError] = useState("");

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
            updateError(error.code + ": " + error.message);
      })
  }

  return (
    <View style={styles.container}>
        <View style={[styles.loginbox, styles.shadowprop]}>
            <ErrorText message={error} />
            <Text style={styles.logintext}>CLUBHUB</Text>
            <LoginInput field="Email" fieldvar={email} fieldupdate={updateEmail} />
            <LoginInput field="Password" fieldvar={password} fieldupdate={updatePassword} />
            <TouchableOpacity style={styles.loginbutton} onPress={() => login(email, password)}><Text>Login</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}><Text style={styles.link}>Don't have an account? Click here to register.</Text></TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#BBADFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logintext: {
      fontFamily: 'Futura-Medium',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 30
    },
    loginbox: {
        backgroundColor: 'white',
        width: '80%',
        padding: 20,
        borderColor: 'white',
        borderRadius: 10,
    },
    buttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    loginbutton: {
        backgroundColor: '#E0C3FC',
        padding: 10,
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    link: {
        color: '#757BC8',
        textAlign: 'center'
    },
    shadowprop: {
      shadowColor: '#171717',
      shadowOffset: {width: -3, height: 5},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    }
  });

export default LoginScreen;