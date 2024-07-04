import React, { useState } from 'react'
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import {useNavigation} from '@react-navigation/native'

//Firebase
import firebase from '../database/firebase'
import { Formik } from 'formik'
import * as Yup from 'yup'


const RegisterScreen = () => {
  const navigation = useNavigation()

  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChangeText = (name, value) => {
    setState({
      ...state,
      [name]: value,
    })
  }

  const createNewUser = async() => {
    if (state.username === '') {
      Alert.alert('Por favor, proporciona un nombre de usuario')
    } else {
      try {
        await firebase.db.collection('users').add({
          username: state.username,
          email: state.email,
          password: state.password,
          confirmPassword: state.confirmPassword,
        })
        Alert.alert('Usuario registrado con éxito')
        navigation.navigate('TabNavigation')
      } catch (error) {
        console.error('Error al crear nuevo usuario:', error)
        Alert.alert('Error registrando usuario', error.message)
      }
    }
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required'),
    email: Yup.string()
     .email('Invalid Email')
     .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/, 'Password must contain uppercase, lowercase, number and special character')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm Password is required')
  })


  return (
    <LinearGradient colors={['#88FFA9', '#00AB8C']} style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/Huge-icon.png')} style={styles.logo}/>
          <Text style={styles.logoText}>USERS REGISTER</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>CHAT NOW!</Text>

          <Formik
            initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
            validationSchema={validationSchema}
            onSubmit={createNewUser}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
              <>
                <View style={styles.inputContainer}>
                  <Icon name='user' size={20} color='#888' style={styles.inputIcon}/>
                  <TextInput
                    style={styles.input}
                    placeholder='Username'
                    placeholderTextColor='#888'
                    onChangeText={(value) => {
                      handleChangeText('username', value)
                      handleChange('username')(value)
                    }}
                    onBlur={handleBlur('username')}
                    value={values.username}
                  />
                </View> 
                {errors.username && touched.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}

                <View style={styles.inputContainer}>
                  <Icon name='envelope' size={20} color='#888' style={styles.inputIcon}/>
                  <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='#888'
                    onChangeText={(value) => {
                      handleChangeText('email', value)
                      handleChange('email')(value)
                    }}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                {errors.email && touched.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

                <View style={styles.inputContainer}>
                  <Icon name='lock' size={20} color='#888' style={styles.inputIcon}/>
                  <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='#888'
                    secureTextEntry
                    onChangeText={(value) => {
                      handleChangeText('password', value)
                      handleChange('password')(value)
                    }}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                </View>
                {errors.password && touched.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

                <View style={styles.inputContainer}>
                  <Icon name='lock' size={20} color='#888' style={styles.inputIcon}/>
                  <TextInput
                    style={styles.input}
                    placeholder='Confirm Password'
                    placeholderTextColor='#888'
                    secureTextEntry
                    onChangeText={(value) => {
                      handleChangeText('confirmPassword', value)
                      handleChange('confirmPassword')(value)
                    }}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                  />
                </View>
                {errors.confirmPassword && touched.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <LinearGradient colors={['#88FFA9', '#00AB8C']} style={styles.buttonGradient}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </>
            )}  
          </Formik>
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
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },

})

export default RegisterScreen
