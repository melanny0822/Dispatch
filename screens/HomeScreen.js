import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

//Icons Imports
import Ionicons from 'react-native-vector-icons/Ionicons'

//Images Imports
import PhotoPerfil1 from '../assets/Persona1.jpg'
import PhotoPerfil2 from '../assets/Persona2.jpg'

//Components Imports
import SearchbarComponent from '../components/modals/SearchbarComponent'
import ChatComponent from '../components/modals/ChatComponent'

const HomeScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.containerNavbar}>
          <Text style={style.username}>Harold Sander</Text>
          <View style={style.containerIcons}>
            <SearchbarComponent/>
            <Image source={PhotoPerfil1} style={style.PhotoPerfil}/>
          </View>
        </View>
        <View style={style.containerUserChat}>
          <Image source={PhotoPerfil2} style={style.PhotoPerfil} />
          <View style={style.containerMesagge}>
            <View style={style.nameAndDate}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: '#00AB8C'}}>Jeffry Kayle</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>10:54 a.m</Text>
            </View>
            <View style={style.message}>
              <Ionicons name='checkmark-done' style={{fontSize: 16, marginRight: 5}}/>
              <Text style={{fontSize: 14}}>Hello guy, I have a new idea for the project and I...</Text>
            </View>
          </View>
        </View>

        <View style={style.containerUserChat}>
          <Image source={PhotoPerfil2} style={style.PhotoPerfil} />
          <View style={style.containerMesagge}>
            <View style={style.nameAndDate}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: '#00AB8C'}}>Jeffry Kayle</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>10:54 a.m</Text>
            </View>
            <View style={style.message}>
              <Ionicons name='checkmark-done' style={{fontSize: 16, marginRight: 5}}/>
              <Text style={{fontSize: 14}}>Hello guy, I have a new idea for the project and I...</Text>
            </View>
          </View>
        </View>

        <View style={style.containerUserChat}>
          <Image source={PhotoPerfil2} style={style.PhotoPerfil} />
          <View style={style.containerMesagge}>
            <View style={style.nameAndDate}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: '#00AB8C'}}>Jeffry Kayle</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>10:54 a.m</Text>
            </View>
            <View style={style.message}>
              <Ionicons name='checkmark-done' style={{fontSize: 16, marginRight: 5}}/>
              <Text style={{fontSize: 14}}>Hello guy, I have a new idea for the project and I...</Text>
            </View>
          </View>
        </View>

        <View style={style.containerUserChat}>
          <Image source={PhotoPerfil2} style={style.PhotoPerfil} />
          <View style={style.containerMesagge}>
            <View style={style.nameAndDate}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: '#00AB8C'}}>Jeffry Kayle</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>10:54 a.m</Text>
            </View>
            <View style={style.message}>
              <Ionicons name='checkmark-done' style={{fontSize: 16, marginRight: 5}}/>
              <Text style={{fontSize: 14}}>Hello guy, I have a new idea for the project and I...</Text>
            </View>
          </View>
        </View>

        <View style={style.containerUserChat}>
          <Image source={PhotoPerfil2} style={style.PhotoPerfil} />
          <View style={style.containerMesagge}>
            <View style={style.nameAndDate}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: '#00AB8C'}}>Jeffry Kayle</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>10:54 a.m</Text>
            </View>
            <View style={style.message}>
              <Ionicons name='checkmark-done' style={{fontSize: 16, marginRight: 5}}/>
              <Text style={{fontSize: 14}}>Hello guy, I have a new idea for the project and I...</Text>
            </View>
          </View>
        </View>

        <View style={style.containerUserChat}>
          <Image source={PhotoPerfil2} style={style.PhotoPerfil} />
          <View style={style.containerMesagge}>
            <View style={style.nameAndDate}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: '#00AB8C'}}>Jeffry Kayle</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>10:54 a.m</Text>
            </View>
            <View style={style.message}>
              <Ionicons name='checkmark-done' style={{fontSize: 16, marginRight: 5}}/>
              <Text style={{fontSize: 14}}>Hello guy, I have a new idea for the project and I...</Text>
            </View>
          </View>
        </View>

        <View style={style.containerUserChat}>
          <Image source={PhotoPerfil2} style={style.PhotoPerfil} />
          <View style={style.containerMesagge}>
            <View style={style.nameAndDate}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: '#00AB8C'}}>Jeffry Kayle</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>10:54 a.m</Text>
            </View>
            <View style={style.message}>
              <Ionicons name='checkmark-done' style={{fontSize: 16, marginRight: 5}}/>
              <Text style={{fontSize: 14}}>Hello guy, I have a new idea for the project and I...</Text>
            </View>
          </View>
        </View>

        <View style={style.containerUserChat}>
          <Image source={PhotoPerfil2} style={style.PhotoPerfil} />
          <View style={style.containerMesagge}>
            <View style={style.nameAndDate}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: '#00AB8C'}}>Jeffry Kayle</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>10:54 a.m</Text>
            </View>
            <View style={style.message}>
              <Ionicons name='checkmark-done' style={{fontSize: 16, marginRight: 5}}/>
              <Text style={{fontSize: 14}}>Hello guy, I have a new idea for the project and I...</Text>
            </View>
          </View>
        </View>

        <View style={style.containerUserChat}>
          <Image source={PhotoPerfil2} style={style.PhotoPerfil} />
          <View style={style.containerMesagge}>
            <View style={style.nameAndDate}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: '#00AB8C'}}>Jeffry Kayle</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>10:54 a.m</Text>
            </View>
            <View style={style.message}>
              <Ionicons name='checkmark-done' style={{fontSize: 16, marginRight: 5}}/>
              <Text style={{fontSize: 14}}>Hello guy, I have a new idea for the project and I...</Text>
            </View>
          </View>
        </View>

        <View style={style.containerUserChat}>
          <Image source={PhotoPerfil2} style={style.PhotoPerfil} />
          <View style={style.containerMesagge}>
            <View style={style.nameAndDate}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: '#00AB8C'}}>Jeffry Kayle</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>10:54 a.m</Text>
            </View>
            <View style={style.message}>
              <Ionicons name='checkmark-done' style={{fontSize: 16, marginRight: 5}}/>
              <Text style={{fontSize: 14}}>Hello guy, I have a new idea for the project and I...</Text>
            </View>
          </View>
        </View>

        <View style={style.containerUserChat}>
          <Image source={PhotoPerfil2} style={style.PhotoPerfil} />
          <View style={style.containerMesagge}>
            <View style={style.nameAndDate}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: '#00AB8C'}}>Jeffry Kayle</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>10:54 a.m</Text>
            </View>
            <View style={style.message}>
              <Ionicons name='checkmark-done' style={{fontSize: 16, marginRight: 5}}/>
              <Text style={{fontSize: 14}}>Hello guy, I have a new idea for the project and I...</Text>
            </View>
          </View>
        </View>

        <View style={style.containerUserChat}>
          <Image source={PhotoPerfil2} style={style.PhotoPerfil} />
          <View style={style.containerMesagge}>
            <View style={style.nameAndDate}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: '#00AB8C'}}>Jeffry Kayle</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>10:54 a.m</Text>
            </View>
            <View style={style.message}>
              <Ionicons name='checkmark-done' style={{fontSize: 16, marginRight: 5}}/>
              <Text style={{fontSize: 14}}>Hello guy, I have a new idea for the project and I...</Text>
            </View>
          </View>
        </View>

        <View style={style.containerUserChat}>
          <Image source={PhotoPerfil2} style={style.PhotoPerfil} />
          <View style={style.containerMesagge}>
            <View style={style.nameAndDate}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: '#00AB8C'}}>Jeffry Kayle</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>10:54 a.m</Text>
            </View>
            <View style={style.message}>
              <Ionicons name='checkmark-done' style={{fontSize: 16, marginRight: 5}}/>
              <Text style={{fontSize: 14}}>Hello guy, I have a new idea for the project and I...</Text>
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
    alignItems: 'center',
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
    alignItems: 'center',
    marginTop: 4
  }
})

export default HomeScreen
