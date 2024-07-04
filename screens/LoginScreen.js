import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'

//conexion a firebase
import { auth, db } from '../database/firebase';
import {Formik} from 'formik'
import * as Yup from 'yup'

const LoginScreen = ({navigation}) => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid Email')
    .required('Email is required to login'),

    password: Yup.string()
    .min(8,'Password must be at least 8 characters long')
    .required('Password is required to login')
  })

  const handleLogin = async (values, { setSubmitting }) => {
    const { email, password } = values;

    try {
      // Verificar si el usuario está registrado en la base de datos
      const userDoc = await db.collection('users').doc(email).get();
      if (!userDoc.exists) {
        Alert.alert('Login failed', 'User not registered in the database');
        setSubmitting(false);
        return;
      }

      // Iniciar sesión con Firebase Authentication
      await auth.signInWithEmailAndPassword(email, password);
      Alert.alert('Successful login!');
      navigation.navigate('TabNavigation');
    } catch (error) {
      Alert.alert('Login failed', error.message);
    }

    setSubmitting(false);
  };


  return (
    <LinearGradient colors={['#88FFA9', '#00AB8C']} style={styles.container}> 
      <SafeAreaView style={styles.innerContainer}>
        <View style={styles.logo}>
          <Image source={require('../assets/Huge-icon.png')} style={styles.logo}/>
          <Text style={styles.logoText}>LOGIN</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>WELCOME BACK</Text>
          <Formik 
            initialValues={{email: '', password: ''}}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
          >
            {({handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting}) => (
              <>
                <View style={styles.inputContainer}>
                  <Icon name='envelope' size={20} color='#888' style={styles.inputIcon}/>
                  <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='#888'
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType='email-address'
                    autoCapitalize='none'
                  />
                </View>
                {errors.email && touched.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

                <View style={styles.inputContainer}>
                  <Icon name='lock' size={20} color='#888' style={styles.inputIcon}/> 
                  <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='#888'
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                  />
                </View>
                {errors.password && touched.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

                <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={isSubmitting}>
                  <LinearGradient colors={['#88FFA9', '#00AB8C']} style={styles.buttonGradient}>
                  <Text style={styles.buttonText}>SIGN IN</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </>
            )}
          </Formik>
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default LoginScreen
