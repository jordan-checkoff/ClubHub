import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ClubListItem} from './components/ClubListItem';
import SearchScreen from './screens/SearchScreen';
import FilterScreen from  './screens/FilterScreen';
import FilterContext from './FilterContext';

const Stack = createStackNavigator();

export default function App() {
const [filter, updateFilter] = useState([]);

  return (
    <FilterContext.Provider value={filter}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SearchScreen"
            component={SearchScreen}
          />
          <Stack.Screen name="FilterScreen"
            component={FilterScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FilterContext.Provider>
  )
}

