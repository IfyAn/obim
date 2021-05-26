import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Login from './containers/Login';
import Register from './containers/Register';
import Home from './containers/Home';
import Messages from './containers/Messages';
import Matches from './containers/Matches';
import Profile from './containers/Profile';
import Chat from './containers/Chat';

const Stack = createStackNavigator();

const globalScreenoptions={
  headerStyle:{backgroundColor:'#9932cc'},
  headerTitleStyle:{color:'white'},
  headerTintColor: 'white',
  //headerShown:{false}
}

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={globalScreenoptions} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Message" component={Messages} />
        <Stack.Screen name="Match" component={Matches} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
