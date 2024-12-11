import React, { useState } from 'react'
import { 
    SafeAreaView, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput, 
    View, 
    Modal, 
    Text, 
    Image, 
    TouchableWithoutFeedback 
} from 'react-native'

//Icons Imports
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

//Images Imports
import PhotoPerfil1 from '../../assets/Persona1.jpg'

const AddFriendComponent = () => {

    const [visible, setVisible] = useState(false)

    return (
      <SafeAreaView>
          <View>
              <TouchableOpacity
                onPress={() => setVisible(true)}
              >
                <Ionicons name='person-add' style={style.friendAdd}/>
              </TouchableOpacity>
          </View>
        <Modal
            animationType='fade'
            onDismiss={console.log("CLose Modal")}
            onShow={console.log("Show Modal")}
            transparent={true}
            visible={visible}
        >
            <TouchableWithoutFeedback
                onPress={() => setVisible(false)}
            >
                <View style={{flex: 1, backgroundColor: 'rgba(1, 1, 1, 0.5)'}}>
                    <View style={style.container}>
                        <TouchableOpacity
                            onPress={() => setVisible(false)}
                        >
                            <AntDesign name='closecircle' style={{fontSize: 25, color: '#68ECA3', marginRight: 20}}/>
                        </TouchableOpacity>
                        <View style={style.inputContainer}>
                            <Ionicons name='person-add' style={style.friendAddIconSearchbar}/>
                            <TextInput
                                placeholder='Search a new friend...'
                                style={{color: '#000000', fontSize: 18, paddingHorizontal: 20, flex: 1}}
                            />
                        </View>
                    </View>
                    <View style={style.backgroundFriends}>
                        <View style={style.friendsContainer}>
                            <Image source={PhotoPerfil1} style={style.PhotoPerfil}/>
                            <View style={{flex: 1}}>
                                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#00AB8C'}}>Jeffry Kayle</Text>
                                <View style={style.infoContainer}>
                                    <Text>Hello I am Jeffry Kayle and I’m new I...</Text>
                                    <Ionicons name='person-add' style={style.IconAdd}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
      </SafeAreaView>
    )
}

const style = StyleSheet.create({

    friendAdd: {
        fontSize: 20,
        color: '#68ECA3',
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 40,
        marginRight: 10
    },

    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },

    friendAddIconSearchbar: {
        fontSize: 20,
        color: '#68ECA3',
        paddingLeft: 10
    },

    inputContainer: {
        flex: 1,
        borderColor: '#58CA8B',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 30,
        alignItems: 'center',
    },

    backgroundFriends: {
        backgroundColor: '#FFFFFF',
        marginVertical: 20,
        marginHorizontal: 15,
        padding: 14,
        borderRadius: 20,
    },

    friendsContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    PhotoPerfil: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 8
    },

    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    IconAdd: {
        fontSize: 20, 
        backgroundColor: '#68ECA3',
        color: '#FFFFFF',
        padding: 10,
        borderRadius: 20,
        marginLeft: 10
    }
    
})

export default AddFriendComponent
