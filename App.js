import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import KontakList from './components/KontakList';
import KontakDetail from './components/KontakDetail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Kontak List" component={KontakList} />
        <Stack.Screen name="Detail" component={KontakDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
