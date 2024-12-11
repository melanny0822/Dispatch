import React, { useState } from 'react'
import { 
  SafeAreaView, 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Alert } 
from 'react-native'

//Dependencies Imports
import LinearGradient from 'react-native-linear-gradient'
import { validateUser } from '../components/Authentications/AuthManager'

//Icons Imports
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

//Styles Imports
import StyleInitial from '../styles/StyleInitial'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] =  useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (email && password) {
      if (validateUser(email, password)){
        setEmail('')
        setPassword('')
        navigation.navigate('TabNavigation')
        Alert.alert('¡Inicio de sesión exitoso!')
      } else {
        Alert.alert('Inicio de sesión fallido, verifique su usuario o contraseña')
      }
    }
  }

  return (
    <LinearGradient colors={['#88FFA9', '#00AB8C']} style={StyleInitial.container}>
      <FontAwesome5 
        onPress={() => navigation.navigate('InitialScreen')}
        name='arrow-circle-left' style={StyleInitial.buttonBack}
      />
      <SafeAreaView style={StyleInitial.containerInner}>
        <View style={StyleInitial.containerLogo}>
          <Image source={require('../assets/Huge-icon.png')} style={StyleInitial.logoHuge}/>
          <Text style={StyleInitial.textLogo}>LOGIN</Text>
        </View>

        <View style={StyleInitial.containerForm}>
          <Text style={StyleInitial.titleLoginRegister}>WELCOME BACK</Text>
          <View style={StyleInitial.containerInputLoginRegister}>
            <FontAwesome 
              name='envelope' 
              style={StyleInitial.iconInputLoginRegister}
            />
            <TextInput
              style={StyleInitial.textInputLoginRegister}
              placeholder='Email'
              placeholderTextColor='#9F9F9F'
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={StyleInitial.containerInputLoginRegister}>
            <FontAwesome 
              name='lock' 
              style={StyleInitial.iconInputLoginRegister}
            /> 
            <TextInput
              style={StyleInitial.textInputLoginRegister}
              placeholder='Password'
              placeholderTextColor='#9F9F9F'
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity 
            style={StyleInitial.buttonLoginRegister} 
            onPress={handleLogin}
          >
            <LinearGradient 
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#88FFA9', '#00AB8C']} 
              style={StyleInitial.gradientButtonLoginRegister}
            >
              <Text style={StyleInitial.textButtonLoginRegister}>SIGN IN</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={StyleInitial.textForgot}>Your Forgot Password?</Text>
          <TouchableOpacity onPress={() =>{}}>
            <Text style={StyleInitial.textForgotLink}>Click here for recover your password</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default LoginScreen