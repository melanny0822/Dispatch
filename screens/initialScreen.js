import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InitialScreen = () => {
  return (
    <View>
      <Text>SCREEN INICIAL</Text>
      <View style={styles.iconContainer}>
        <AntDesign name='form' size={30} color="black" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    padding: 10,
    borderRadius: 5,
    width: 50,
    height: 50,
  },
 
});

export default InitialScreen;
