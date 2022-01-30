// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Containers/Profile';
import About from './Containers/About';

function HomeScreen({navigation}) {
  const [data , SetData] = React.useState([
    {id:"1" , name:"Pratik" , email:"123@gmail.com" ,mobile:"01"},
    {id:"2" , name:"Patel" , email:"1234@gmail.com" ,mobile:"012"},
    {id:"3" , name:"Pratik" , email:"12345@gmail.com" ,mobile:"0123"},
    {id:"4" , name:"Patel" , email:"1234@gmail.com" ,mobile:"012"},
  ])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Profile' onPress={() => navigation.navigate('Profile',data)} />
      <Button title='About' onPress={() => navigation.navigate('About',data)} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;