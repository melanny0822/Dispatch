import React, { useState } from 'react'
import { 
    Modal, 
    SafeAreaView,
    View, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    Image , 
    ScrollView, 
    TextInput 
} from 'react-native'

//Dependencies Impots
import LinearGradient from 'react-native-linear-gradient'

//Icons Imports
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

//Images Imports
import PhotoPerfil2 from '../../assets/Persona2.jpg'

const ChatComponent = () => {

    const [visible, setVisible] = useState(false)

    return (
      <SafeAreaView>
        <TouchableOpacity
            onPress={() => setVisible(true)}
        >
            <View style={style.containerMesagge}>
                <View style={style.nameAndDate}>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#00AB8C'}}>Jeffry Kayle</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>10:54 a.m</Text>
                </View>
                <View style={style.message}>
                    <Ionicons name='checkmark-done' style={{fontSize: 16, marginRight: 5}}/>
                    <Text style={{fontSize: 14}}>Hello guy, I have a new idea for the project a...</Text>
                </View>
            </View>
        </TouchableOpacity>

        <Modal
            animationType='fade'
            onDismiss={console.log("Close Modal")}
            onShow={console.log("Show Modal")}
            visible={visible}
            style={style.modal}
        >
            <View style={style.containerNavBar}>
                <View style={style.userInfo}>
                    <TouchableOpacity
                        onPress={() => setVisible(false)}
                    >
                        <Ionicons name='arrow-back-circle' style={{color: '#FFFFFF', fontSize: 28}}/>
                    </TouchableOpacity>
                    <Image source={PhotoPerfil2} style={style.PhotoPerfil}/>
                    <Text style={style.username}>Jeffry Kayle</Text>
                </View>
                <View style={style.containerIcons}>
                    <FontAwesome6 name='camera' style={{color: '#FFFFFF', fontSize: 25, marginRight: 15}}/>
                    <FontAwesome6 name='phone' style={{color: '#FFFFFF', fontSize: 25}}/>
                </View>
            </View>
            <LinearGradient colors={['#6AFF94','#00AB8C']} style={style.gradientContainer}>
                <ScrollView>
                    <View style={style.messageContainer}>
                        <View style={style.messageChat}>
                            <Text style={{fontSize: 18,}}>Hi Jeffry, how's it going?</Text>
                            <View style={style.hourAndCheck}>
                                <Text style={style.hour}>10:00 a.m</Text>
                            </View>
                        </View>
                        <View style={style.messageChatTwo}>
                            <Text style={{fontSize: 18,}}>Hey Harold! I'm good, and you?</Text>
                            <View style={style.hourAndCheck}>
                                <Text style={style.hour}>10:00 a.m</Text>
                                <Ionicons name='checkmark-done' style={{fontSize:20, color: '#007BEC'}}/>
                            </View>
                        </View>
                        <View style={style.messageChat}>
                            <Text style={{fontSize: 18,}}>I'm doing well, thanks. Did you do anything fun over the weekend?</Text>
                            <View style={style.hourAndCheck}>
                                <Text style={style.hour}>10:00 a.m</Text>
                            </View>
                        </View>
                        <View style={style.messageChatTwo}>
                            <Text style={{fontSize: 18,}}>Yeah, I went hiking with some friends. The weather was perfect. How about you?</Text>
                            <View style={style.hourAndCheck}>
                                <Text style={style.hour}>10:00 a.m</Text>
                                <Ionicons name='checkmark-done' style={{fontSize:20, color: '#007BEC'}}/>
                            </View>
                        </View>
                        <View style={style.messageChat}>
                            <Text style={{fontSize: 18,}}>That sounds great! I went to a new restaurant downtown. The food was amazing.</Text>
                            <View style={style.hourAndCheck}>
                                <Text style={style.hour}>10:00 a.m</Text>
                            </View>
                        </View>
                        <View style={style.messageChatTwo}>
                            <Text style={{fontSize: 18,}}>Nice! I've been wanting to try that place. What did you have?</Text>
                            <View style={style.hourAndCheck}>
                                <Text style={style.hour}>10:00 a.m</Text>
                                <Ionicons name='checkmark-done' style={{fontSize:20, color: '#007BEC'}}/>
                            </View>
                        </View>
                        <View style={style.messageChat}>
                            <Text style={{fontSize: 18,}}>I had the seafood pasta. It was delicious. You should definitely go sometime.</Text>
                            <View style={style.hourAndCheck}>
                                <Text style={style.hour}>10:00 a.m</Text>
                            </View>
                        </View>
                        <View style={style.messageChatTwo}>
                            <Text style={{fontSize: 18,}}>I'll add it to my list. By the way, are you free this Saturday? A group of us are going to the beach.</Text>
                            <View style={style.hourAndCheck}>
                                <Text style={style.hour}>10:00 a.m</Text>
                                <Ionicons name='checkmark-done' style={{fontSize:20, color: '#007BEC'}}/>
                        </View>
                        </View>
                            <View style={style.messageChat}>
                            <Text style={{fontSize: 18,}}>That sounds fun! I'd love to join. What time are you going?</Text>
                            <View style={style.hourAndCheck}>
                                <Text style={style.hour}>10:00 a.m</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={style.chatContainer}>
                    <View style={style.barMessage}>
                        <View style={style.messageIcons}>
                            <FontAwesome6 name='face-grin-beam' style={{fontSize: 20, color: '28303F', marginRight: 5}}/>
                            <TextInput
                                placeholder='Message'
                                style={{fontSize: 20, backgroundColor: '28303F', flex: 1}}
                            />
                        </View>
                        <View style={style.messageIconsTwo}>
                            <Ionicons name='document-text-outline' style={{fontSize: 25,color: '28303F', marginRight: 3}}/>
                            <Ionicons name='image-outline' style={{fontSize: 25, color: '28303F'}}/>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </Modal>
      </SafeAreaView>
    )
}

const style = StyleSheet.create({
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
    },
    
    containerNavBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#68ECA3',
        paddingHorizontal: 15,
        paddingVertical: 15,
        elevation: 20
    },

    userInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    PhotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginHorizontal: 8
    },

    username: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    containerIcons: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    icons: {
        color: '#FFFFFF',
        fontSize: 25
    },

    gradientContainer: {
        flex: 1,
    },

    messageContainer: {
        flex: 1,
        padding: 20
    },

    messageChat: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginVertical: 10,
        textAlign: 'justify',
        alignSelf: 'flex-start'
    },

    messageChatTwo: {
        fontSize: 18,
        backgroundColor: '#78F59F',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginVertical: 10,
        textAlign: 'justify',
        alignSelf: 'flex-end'
    },

    hourAndCheck: {
        flexDirection: 'row',
        marginTop: 2,
        alignSelf: 'flex-end'
    },

    hour: {
        marginRight: 4
    },

    chatContainer: {
        backgroundColor: '#68ECA3',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },

    barMessage: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 23,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 21
    },

    messageIcons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    messageIconsTwo: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default ChatComponent
