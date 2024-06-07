import React, { useState } from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import {validateUser} from '../components/Authentications/AuthManager'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] =  useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (email && password) {
      if (validateUser(email, password)){
        setEmail('')
        setPassword('')
        navigation.navigate('HomeScreen')
        Alert.alert('¡Inicio de sesión exitoso!')
      } else {
        Alert.alert('Inicio de sesión fallido, verifique su usuario o contraseña')
      }
    }
  }


  return (
    <LinearGradient colors={['#88FFA9', '#00AB8C']} style={styles.container}> 
      <SafeAreaView style={styles.innerContainer}>
        <View style={styles.logo}>
          <Image source={require('../assets/Huge-icon.png')} style={styles.logo}/>
          <Text style={styles.logoText}>LOGIN</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>WELCOME BACK</Text>
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
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <LinearGradient colors={['#88FFA9', '#00AB8C']} style={styles.buttonGradient}>
             <Text style={styles.buttonText}>SIGN IN</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.forgotText}>Your Forgot Password?</Text>
          <TouchableOpacity onPress={() =>{}}>
            <Text style={styles.forgotLink}>Click here for recover your password</Text>
          </TouchableOpacity>
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
  forgotText: {
    color: '#888',
    marginTop: 10,
  },
  forgotLink: {
    color: '#00C07F',
    textDecorationLine: 'underline',
  },
  socialButton: {
    width: '100%',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#DB4437', 
  },
  socialButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen
