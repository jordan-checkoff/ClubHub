import React, {useState, useContext} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {TextInput, TouchableOpacity, Text, View} from 'react-native';

const auth = getAuth();

const LoginScreen = ({navigation}) => {
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [error, updateError] = useState("");

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // const user = userCredential.user;

          navigation.navigate('DashboardScreen');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
            updateError(error.code + ": " + error.message);
      })
  }

  return (
    <View>
      <Text>{error}</Text>
      <TextInput placeholder="Email" value={email} onChangeText={updateEmail}></TextInput>
      <TextInput placeholder="Password" value={password} onChangeText={updatePassword}></TextInput>
      <TouchableOpacity onPress={() => login(email, password)}><Text>Login</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}><Text>Don't have an account? Click here to register.</Text></TouchableOpacity>
    </View>
  )
}

export default LoginScreen;