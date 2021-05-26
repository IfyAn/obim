import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../containers/Login";
import Register from "../containers/Register";

export default function AuthNavigator() {

      const AuthStack = createStackNavigator();
      return (
            <AuthStack.Navigator headerMode='none'>
                 <AuthStack.Screen name='Login' component={Login} />
                 <AuthStack.Screen name='Register' component={Register} />
            </AuthStack.Navigator>
      )
}
