import React, { useState } from 'react'
import { 
  Alert, 
  Image, 
  SafeAreaView, 
  ScrollView, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View } 
from 'react-native'

//Dependecies imports
import LinearGradient from 'react-native-linear-gradient'
import auth from '@react-native-firebase/auth'
import { LoginManager, AccessToken } from 'react-native-fbsdk-next'
import { GoogleSigninButton, GoogleSignin } from '@react-native-google-signin/google-signin'

//Components Imports
import { registerUser } from '../components/Authentications/AuthManager'

//Icons Imports
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

//Styles Imports
import StyleInitial from '../styles/StyleInitial'
import ErrorAlert from '../components/alerts/ErrorAlert'

const RegisterScreen = ({navigation}) => {

  //extern state
  const [errorVisible, setErrorVisible] = useState(true)

  //Inner state
  const [userData, setUserData] = useState({})
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignUp = () => {
    if (!username || !email || !password || !confirmPassword) {
      <ErrorAlert error={'Please fill in all fields'} open={setErrorVisible}/>
      return
    }

    if(password !== confirmPassword) {
      Alert.alert('Error', 'Password do not match')
      return
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/
    if (!password.match(passwordRegex)){
      Alert.alert('Error', 'The password must be at least 8 characters long')
      return
    }

    registerUser(username, email, password)
    Alert.alert('¡Usuario registrado con éxito!')
    setUsername('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    navigation.navigate('TabNavigation')
  }
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      Alert.alert('Inicio de sesion con Google exitoso')
    } catch (error) {
      Alert.alert('Error al iniciar sesion con Google', error.message)
    }
  }

  const handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        Alert.alert('Inicio de sesión con Facebook cancelado');
      } else {
        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
          <ErrorAlert error={'Error getting Facebook access token'} />
          return;
        }
        Alert.alert('¡Registro con Facebook exitoso!');
      }
    } catch (error) {
      Alert.alert('Error desconocido al iniciar sesión con Facebook');
    }
  };

  return (
    <LinearGradient colors={['#88FFA9', '#00AB8C']} style={StyleInitial.container}>
      <FontAwesome5 
        onPress={() => navigation.navigate('InitialScreen')}
        name='arrow-circle-left' style={StyleInitial.buttonBack}
      />
      <SafeAreaView style={StyleInitial.containerInner}>
        <View style={StyleInitial.containerLogo}>
          <Image source={require('../assets/Huge-icon.png')} style={StyleInitial.logo}/>
          <Text style={StyleInitial.textLogo}>REGISTER</Text>
        </View>

        <ScrollView style={StyleInitial.containerForm}>
          <Text style={StyleInitial.titleLoginRegister}>CHAT NOW!</Text>
          <View style={StyleInitial.containerInputLoginRegister}>
            <FontAwesome name='user' style={StyleInitial.iconInputLoginRegister}/>
            <TextInput
              style={StyleInitial.textInputLoginRegister}
              placeholder='Username'
              placeholderTextColor='#9F9F9F'
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={StyleInitial.containerInputLoginRegister}>
            <FontAwesome name='envelope' style={StyleInitial.iconInputLoginRegister}/>
            <TextInput
              style={StyleInitial.textInputLoginRegister}
              placeholder='Email'
              placeholderTextColor='#9F9F9F'
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={StyleInitial.containerInputLoginRegister}>
            <FontAwesome name='lock' style={StyleInitial.iconInputLoginRegister}/>
            <TextInput
              style={StyleInitial.textInputLoginRegister}
              placeholder='Password'
              placeholderTextColor='#9F9F9F'
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={StyleInitial.containerInputLoginRegister}>
            <FontAwesome name='lock' style={StyleInitial.iconInputLoginRegister}/>
            <TextInput
              style={StyleInitial.textInputLoginRegister}
              placeholder='Confirm Password'
              placeholderTextColor='#9F9F9F'
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
          <TouchableOpacity 
            style={StyleInitial.buttonLoginRegister} 
            onPress={handleSignUp}
          >
            <LinearGradient 
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#88FFA9', '#00AB8C']} 
              style={StyleInitial.gradientButtonLoginRegister}
            >
              <Text style={StyleInitial.textButtonLoginRegister}>SIGN UP</Text>
            </LinearGradient>
          </TouchableOpacity>

          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#88FFA9', '#00AB8C']} 
            style={StyleInitial.lineRegister}
          />

          <View style={StyleInitial.containerSocialButton}>
            <TouchableOpacity 
              style={StyleInitial.buttonSocial} 
              onPress={handleFacebookLogin}
            >
              <Image source={require('../assets/meta.png')}/>
            </TouchableOpacity>
            <TouchableOpacity 
              style={StyleInitial.buttonSocial} 
              onPress={handleGoogleLogin}
            >
            <Image source={require('../assets/gmail.png')}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default RegisterScreen