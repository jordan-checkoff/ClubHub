import React, {useState, useContext} from 'react';
import { getAuth, createUserWithEmailAndPassword, updateCurrentUser } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import LoginInput from '../components/LoginInput';
import ErrorText from '../components/ErrorText';
import UserContext from '../UserContext';

const auth = getAuth();

const RegisterScreen = ({navigation}) => {
  // const [user, updateUser] = useContext(UserContext);


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
          // user = auth.currentUser.uid;
          // navigation.navigate('DashboardScreen');
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
    <View style={styles.container}>
      <View style={styles.loginbox}>
        <ErrorText message={error} />
        <Text style={styles.logintext}>Register</Text>
        <LoginInput field="First Name" fieldvar={fname} fieldupdate={updateFname} />
        <LoginInput field="Last Name" fieldvar={lname} fieldupdate={updateLname} />
        <LoginInput field="Email" fieldvar={email} fieldupdate={updateEmail} />
        <LoginInput field="Password" fieldvar={password} fieldupdate={updatePassword} />
        <TouchableOpacity style={styles.loginbutton} onPress={() => register(fname, lname, email, password)}><Text>Register</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}><Text style={styles.link}>Already have an account? Click here to log in.</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logintext: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30  
  },
  loginbox: {
      backgroundColor: 'white',
      width: '80%',
      padding: 20
  },
  buttoncontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  loginbutton: {
      backgroundColor: '#c65fd9',
      padding: 10,
      textAlign: 'center',
      color: 'white',
      marginBottom: 20
  },
  link: {
      color: 'blue',
      textAlign: 'center'
  }
});

export default RegisterScreen;