import React from 'react'
import { 
  SafeAreaView, 
  Text, 
  TouchableOpacity, 
  View, 
  Image 
} from 'react-native'

//Dependencies Imports
import LinearGradient from 'react-native-linear-gradient'

//Styles Imports
import StyleInitial from '../styles/StyleInitial'

const InitialScreen = ({navigation}) => {
  return (
    <LinearGradient colors={['#88FFA9','#00AB8C']} style={StyleInitial.gradient}>
      <SafeAreaView style={StyleInitial.containerInner}>
        <View style={StyleInitial.containerLogo}>
          <Image 
            source={require('../assets/Logo.png')}
          />
        </View>
        <TouchableOpacity style={StyleInitial.buttonInitialScreen} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={StyleInitial.textButtonInitialScreen}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleInitial.buttonInitialScreen} onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={StyleInitial.textButtonInitialScreen}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleInitial.buttonInitialScreen} onPress={() => navigation.navigate('TabNavigation')}>
          <Text style={StyleInitial.textButtonInitialScreen}>Home Screen</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default InitialScreen
