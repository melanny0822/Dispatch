import React from 'react'
import { 
  Image, 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native'

//Images Imports
import PhotoPerfil2 from '../assets/Persona2.jpg'

//Components Imports
import SearchbarComponent from '../components/modals/SearchbarComponent'
import ChatComponent from '../components/modals/ChatComponent'
import SidebarComponent from '../components/modals/SidebarComponent'

const HomeScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.containerNavbar}>
          <Text style={style.username}>Harold Sander</Text>
          <View style={style.containerIcons}>
            <SearchbarComponent/>
            <SidebarComponent/>
          </View>
        </View>
        <View style={style.containerUserChat}>
          <Image source={PhotoPerfil2} style={style.PhotoPerfil} />
          <ChatComponent/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  
  container: {
    flex: 1
  },

  containerNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#68ECA3',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  username: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

  containerIcons: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  PhotoPerfil: {
    width: 60,
    height: 60,
    borderRadius: 50
},

  containerUserChat: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
    marginHorizontal: 15
  }
})

export default HomeScreen
