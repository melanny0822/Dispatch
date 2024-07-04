import React from 'react'
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Screens Imports
import InitialScreen from '../screens/InitialScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import TabNavigation from './TabNavigation'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='InitialScreen'
        >
            <Stack.Screen
                name='InitialScreen'
                component={InitialScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            >
               
            </Stack.Screen>
            <Stack.Screen
                name='RegisterScreen'
                component={RegisterScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='TabNavigation'
                component={TabNavigation}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    headerShown:false
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
