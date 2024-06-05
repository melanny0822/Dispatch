import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, TextInput, View, Modal } from 'react-native'

//Icons Imports
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

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
            onDismiss={console.log("Cerrar Modal")}
            onShow={console.log("show")}
            transparent
            visible={visible}
            style={style.modal}
        >
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
                            style={{color: '#000000', fontSize: 18, paddingHorizontal: 20}}
                        />
                    </View>
            </View>
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
        marginTop: 80,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        elevation: 20
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
    }
})

export default AddFriendComponent
