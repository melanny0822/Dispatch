import React, { useState } from 'react'
import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import {registerUser} from '../components/Authentications/AuthManager'
import auth from '@react-native-firebase/auth'
import {LoginManager, AccessToken} from 'react-native-fbsdk-next'
import {GoogleSigninButton, GoogleSignin} from '@react-native-google-signin/google-signin'

const RegisterScreen = ({navigation}) => {
  const [userData, setUserData] = useState({})
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignUp = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields')
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
    navigation.navigate('HomeScreen')
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
          Alert.alert('Error obteniendo el token de acceso de Facebook');
          return;
        }
        Alert.alert('¡Registro con Facebook exitoso!');
      }
    } catch (error) {
      Alert.alert('Error desconocido al iniciar sesión con Facebook');
    }
  };

  return (
    <LinearGradient colors={['#88FFA9', '#00AB8C']} style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/Huge-icon.png')} style={styles.logo}/>
          <Text style={styles.logoText}>USERS REGISTER</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>CHAT NOW!</Text>
          <View style={styles.inputContainer}>
            <Icon name='user' size={20} color='#888' style={styles.inputIcon}/>
            <TextInput
              style={styles.input}
              placeholder='Username'
              placeholderTextColor='#888'
              value={username}
              onChangeText={setUsername}
            />
          </View> 

          <View style={styles.inputContainer}>
            <Icon name='envelope' size={20} color='#888' style={styles.inputIcon}/>
            <TextInput
              style={styles.input}
              placeholder='Email'
              placeholderTextColor='#888'
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name='lock' size={20} color='#888' style={styles.inputIcon}/>
            <TextInput
              style={styles.input}
              placeholder='Password'
              placeholderTextColor='#888'
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name='lock' size={20} color='#888' style={styles.inputIcon}/>
            <TextInput
              style={styles.input}
              placeholder='Confirm Password'
              placeholderTextColor='#888'
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <LinearGradient colors={['#88FFA9', '#00AB8C']} style={styles.buttonGradient}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
              <Image source={require('../assets/meta.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
            <Image source={require('../assets/gmail.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 30,
    fontWeight: '900',
    color: 'white',
    marginLeft: 20,
    marginBottom:20
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 50,
    borderRadius: 20,
    width: '90%',
    alignItems: 'center',
    marginTop: 50
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00C07F',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#333',
  },
  button: {
    width: '100%',
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonGradient: {
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  socialButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fcbk:{
    backgroundColor: '#0768E1'
  }

})

export default RegisterScreen
