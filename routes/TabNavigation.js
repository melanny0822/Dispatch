import React from 'react'
import "react-native-gesture-handler"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Screens Imports
import HomeScreen from '../screens/HomeScreen'
import FriendsScreen from '../screens/FriendsScreen'
import CallsScreen from '../screens/CallsScreen'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator
        initialRouteName='HomeScreen'
    >
        <Tab.Screen
            name='HomeScreen'
            component={HomeScreen}
        />
        <Tab.Screen
            name='FriendsScreen'
            component={FriendsScreen}
        />
        <Tab.Screen
            name='CallsScreen'
            component={CallsScreen}
        />
    </Tab.Navigator>
  )
}

export default TabNavigation
