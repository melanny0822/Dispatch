import React, { useState } from 'react'
import { 
    SafeAreaView, 
    StyleSheet, 
    TouchableOpacity, 
    View, 
    Image, 
    Modal,
    TouchableWithoutFeedback,
    Text,
} from 'react-native'

//Icons Imports
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

//Images Imports
import PhotoPerfil1 from '../../assets/Persona1.jpg'

const SidebarComponent = ({navigation}) => {

    const [visible, setVisible] = useState(false)

    return (
      <SafeAreaView>
          <View>
              <TouchableOpacity onPress={() => setVisible(true)}>
                  <Image source={PhotoPerfil1} style={style.PhotoPerfil}/>
              </TouchableOpacity>
          </View>

          <Modal
            animationType='none'
            onDismiss={console.log("Close Modal")}
            onShow={console.log("Show Modal")}
            onRequestClose={() => setVisible(false)}
            visible={visible}
            transparent
          >
            <TouchableWithoutFeedback
                onPress={() => setVisible(false)}
            >
                <View style={{flex: 1, backgroundColor: 'rgba(1, 1, 1, 0.5)'}}>
                    <View style={style.container}>
                    <TouchableOpacity>
                      <Image source={PhotoPerfil1} style={style.PhotoPerfilModal}/>
                    </TouchableOpacity>
                    <View style={style.section}>
                        <Text style={style.title}>Your Name</Text>
                        <View style={style.infoContainer}>
                            <Text style={style.info}>Harold Sander</Text>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name='pencil' style={style.icon}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.section}>
                        <Text style={style.title}>Your Gmail</Text>
                        <View style={style.infoContainer}>
                            <Text style={style.info}>HaroldSander@gmail.com</Text>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name='pencil' style={style.icon}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.section}>
                        <Text style={style.title}>Your Phrase</Text>
                        <View style={style.infoContainer}>
                            <Text 
                                style={style.info} 
                                numberOfLines={2} 
                                ellipsizeMode="tail"
                            >
                                Hello I am Jeffry Kayle and I’m new in Chatgtp
                            </Text>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name='pencil' style={style.icon}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.containerLogueOut}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('TabNavigation')}
                            style={style.buttonLogueOut}
                        >
                            <Ionicons name='exit-outline' style={style.iconLogueOut}/>
                            <Text style={style.textLogueOut}>LOGUE OUT</Text>    
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
          </Modal>
      </SafeAreaView>
    )
}

const style = StyleSheet.create({

    PhotoPerfil: {
        width: 60,
        height: 60,
        borderRadius: 50
    },

    container: {
        backgroundColor: '#FFFFFF',
        width: '70%',
        height: '100%',
        padding: 15
    },

    PhotoPerfilModal: {
        width: 200,
        height: 200,
        borderRadius: 100,
        alignSelf: 'center',
        marginVertical: 10
    },

    section: {
        marginVertical: 10
    },

    title: {
        color: '#68ECA3',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10
    },

    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10
    },

    info: {
        fontSize: 18,
    },

    icon: {
        fontSize: 18
    },

    containerLogueOut: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    buttonLogueOut: {
        backgroundColor: '#C30000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        paddingVertical: 15
    },

    iconLogueOut: {
        color: '#FFFFFF',
        fontSize: 30,
        marginRight: 5
    },

    textLogueOut: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default SidebarComponent
