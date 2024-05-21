import React from 'react'
import { SafeAreaView, Text, Touchable, TouchableOpacity, View } from 'react-native'

const InitialScreen = ({navigation}) => {

  return (
    <SafeAreaView>
        <View>
            <Text>Initial Screen</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('TabNavigation')}
            >
              <Text>Cambiar</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default InitialScreen
