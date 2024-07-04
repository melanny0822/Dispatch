import React from 'react'
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  Image, 
  View 
} from 'react-native'

//Images Imports
import PhotoPerfil1 from '../assets/Persona1.jpg'
import PhotoPerfil2 from '../assets/Persona2.jpg'

//Components Imports
import SearchbarComponent from '../components/modals/SearchbarComponent'
import AddFriendComponent from '../components/modals/AddFriendComponent'
import OptionsFriendsComponent from '../components/modals/OptionsFriendsComponent'

const FriendsScreen = () => {

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.containerNavbar}>
          <Text style={style.username}>Harold Sander</Text>
          <View style={style.containerIcons}>
            <AddFriendComponent/>
            <SearchbarComponent/>
            <Image source={PhotoPerfil1} style={style.PhotoPerfil}/>
          </View>
        </View>
    
        <View style={style.containerUserChat}>
          <Image source={PhotoPerfil2} style={style.PhotoPerfil} />
          <View style={style.containerMesagge}>
            <View style={style.name}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: '#00AB8C'}}>Jeffry Kayle</Text>
            </View>
            <View style={style.message}>
              <Text style={{fontSize: 14, marginRight: 6}}>Hello I am Jeffry Kayle and I’m new in Chatgtp</Text>
              <OptionsFriendsComponent/>
            </View>
          </View>
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
    marginHorizontal: 15
  },

  containerMesagge: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10
  },

  nameAndDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold'
  },

  message: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4
  }
})

export default FriendsScreen
