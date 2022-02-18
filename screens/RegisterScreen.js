import React, {useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

import {TextInput, TouchableOpacity, Text, View} from 'react-native';

const auth = getAuth();

const RegisterScreen = ({navigation}) => {
  const [fname, updateFname] = useState("");
  const [lname, updateLname] = useState("");
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [error, updateError] = useState("");

  const register = (fname, lname, email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // const user = userCredential.user;
          const db = getDatabase();
          set(ref(db, 'users/' + auth.currentUser.uid), {
            fname: fname,
            lname: lname,
            email: email
          });
          
          navigation.navigate('DashboardScreen');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode == "auth/invalid-email") {
            updateError("Please enter a valid email");
          } else if (errorCode == "auth/weak-password") {
            updateError("Your password must be at least 6 characters");
          } else {
            updateError(errorMessage);
          }
      })
  }

  return (
    <View>
      <Text>{error}</Text>
      <TextInput placeholder="First Name" value={fname} onChangeText={updateFname}></TextInput>
      <TextInput placeholder="Last Name" value={lname} onChangeText={updateLname}></TextInput>
      <TextInput placeholder="Email" value={email} onChangeText={updateEmail}></TextInput>
      <TextInput placeholder="Password" value={password} onChangeText={updatePassword}></TextInput>
      <TouchableOpacity onPress={() => register(fname, lname, email, password)}><Text>Register</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}><Text>Already have an account? Click here to log in.</Text></TouchableOpacity>
    </View>
  )
}

export default RegisterScreen;