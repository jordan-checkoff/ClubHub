import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClubScreen from './screens/ClubScreen';
import SearchScreen from './screens/SearchScreen';
import FilterScreen from  './screens/FilterScreen';
import RegisterScreen from  './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import FilterContext from './FilterContext';

const Stack = createStackNavigator();

export default function App() {
const [filter, updateFilter] = useState([]);
const [user, updateUser] = useState('');

  return (
    <FilterContext.Provider value={filter}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="LoginScreen"
              component={LoginScreen}
            />
            <Stack.Screen name="RegisterScreen"
              component={RegisterScreen}
            />
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
          </Stack.Navigator>
        </NavigationContainer>
    </FilterContext.Provider>
  )
}

