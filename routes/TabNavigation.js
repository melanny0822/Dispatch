import React from 'react'
import "react-native-gesture-handler"
import { StyleSheet, Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Screens Imports
import HomeScreen from '../screens/HomeScreen'
import FriendsScreen from '../screens/FriendsScreen'
import CallsScreen from '../screens/CallsScreen'

//Icons Imports
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
            tabBarActiveTintColor: '#FFFFFF',
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarStyle: style.TabBarStyle
        }}
    >
        <Tab.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <View style={style.containerOptions}>
                            <Ionicons name='chatbubble-ellipses' color={focused ? '#FFFFFF': '#4DC683'} size={40}/>
                            <Text style={style.text} color={focused ? '#FFFFFF': '#4DC683'}>CHAT</Text>
                        </View>
                    )
                },
                headerShown: false,
                tabBarInactiveTintColor: '#4DC683',
            }}
        />
        <Tab.Screen
            name='FriendsScreen'
            component={FriendsScreen}
            options={{
                tabBarIcon: ({color}) => {
                    return(
                        <View style={style.containerOptions}>
                            <FontAwesome5 name='users' color={color} size={40}/>
                            <Text style={style.text}>FRIENDS</Text>
                        </View>
                    )
                },
                headerShown: false,
                tabBarInactiveTintColor: '#4DC683',
            }}
        />
        <Tab.Screen
            name='CallsScreen'
            component={CallsScreen}
            options={{
                tabBarIcon: ({color}) => {
                    return(
                        <View style={style.containerOptions}>
                            <FontAwesome6 name='phone' color={color} size={40}/>
                            <Text style={style.text}>FRIENDS</Text>
                        </View>
                    )
                },
                headerShown: false,
                tabBarInactiveTintColor: '#4DC683',
            }}
        />
    </Tab.Navigator>
  )
}
const style = StyleSheet.create ({
    TabBarStyle: {
        backgroundColor: '#68ECA3',
        height: 100,
        position: 'absolute',
        borderTopWidth: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },

    containerOptions: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },

    text: {
        marginTop: 5,
        fontSize: 12, 
        fontFamily: 'sans-serif', 
        fontWeight: 'bold', 
    }
})

export default TabNavigation