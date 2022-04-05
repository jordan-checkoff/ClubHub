import React, {useState} from 'react';
import { getDatabase, ref, set } from "firebase/database";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import LoginInput from '../components/LoginInput';
import ErrorText from '../components/ErrorText';


const EventScreen = ({navigation, route}) => {

  let club = route.params.club;

  const [title, updateTitle] = useState("");
  const [date, updateDate] = useState("");
  const [location, updateLocation] = useState("");
  const [description, updateDescription] = useState("");
  const [error, updateError] = useState("");

  const create = (title, date, location, description) => {
    const db = getDatabase();
    if (title && date && location && description) {
      set(ref(db, 'events/' + club + '/' + title), {
        date: date,
        location: location,
        description: description
      });
      navigation.goBack();
    } else {
      updateError("All fields are required");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginbox}>
        <ErrorText message={error} />
        <Text style={styles.logintext}>Create Event</Text>
        <LoginInput field="Title" fieldvar={title} fieldupdate={updateTitle} />
        <LoginInput field="Date and Time" fieldvar={date} fieldupdate={updateDate} />
        <LoginInput field="Location" fieldvar={location} fieldupdate={updateLocation} />
        <LoginInput field="Description" fieldvar={description} fieldupdate={updateDescription} />
        <TouchableOpacity style={styles.loginbutton} onPress={() => create(title, date, location, description)}><Text>Create</Text></TouchableOpacity>
        <TouchableOpacity style={styles.loginbutton} onPress={() => navigation.goBack()}><Text>Cancel</Text></TouchableOpacity>
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

export default EventScreen;