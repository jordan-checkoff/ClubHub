import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClubScreen from './screens/ClubScreen';
import SearchScreen from './screens/SearchScreen';
import FilterScreen from  './screens/FilterScreen';
import FilterContext from './FilterContext';
import UserContext from './UserContext';

const Stack = createStackNavigator();

export default function App() {
const [filter, updateFilter] = useState([]);
const [user, updateUser] = useState('');

  return (
    <FilterContext.Provider value={filter}>
      <UserContext.Provider value={user}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
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
      </UserContext.Provider>
    </FilterContext.Provider>
  )
}

