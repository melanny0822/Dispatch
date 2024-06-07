import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const InitialScreen = ({navigation}) => {

  return (
    <LinearGradient colors={['#88FFA9','#00AB8C']} style={{height:'100%'}}>
      <SafeAreaView style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/Logo.png')}
            style={styles.logo}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
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
    marginBottom: 50,
  },
  logo: {
    width: 400,
    height: 100,
    marginBottom: 20,
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10,
    width: '70%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#00C07F',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InitialScreen
