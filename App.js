import React, {useEffect, useState, useReducer, useMemo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClubScreen from './screens/ClubScreen';
import SearchScreen from './screens/SearchScreen';
import FilterScreen from  './screens/FilterScreen';
import RegisterScreen from  './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoadingScreen from './screens/LoadingScreen';
import FilterContext from './FilterContext';
import UserContext from './UserContext';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Stack = createStackNavigator();


export default function App() {
const [filter, updateFilter] = useState([]);

const auth = getAuth();
const [user, changeUser] = useState('loading');
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    changeUser(auth.currentUser.uid);
    // ...
  } else {
    // User is signed out
    changeUser(null);
  }
});


  if (user == 'loading') {
    // We haven't finished checking for the token yet
    return <LoadingScreen />;
}

  return (
    <FilterContext.Provider value={filter}>
      <UserContext.Provider value={user}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
          {user == null ? (
            <>
              <Stack.Screen name={"LoginScreen"} 
                component={LoginScreen} />
              <Stack.Screen name="RegisterScreen"
                component={RegisterScreen}/>
            </>
            ) : (
              <>
            <Stack.Screen name="DashboardScreen"
              component={DashboardScreen}
            />
            <Stack.Screen name="SearchScreen"
              component={SearchScreen}
            />
            <Stack.Screen name="FilterScreen"
              component={FilterScreen}
            />
            <Stack.Screen name="ClubScreen"
              component={ClubScreen}
            />
            </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </FilterContext.Provider>
  )
}

