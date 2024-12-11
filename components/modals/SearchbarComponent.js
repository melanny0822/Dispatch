import React, { useState } from 'react'
import { 
    Modal, 
    SafeAreaView, 
    StyleSheet, 
    TouchableOpacity,
    View, 
    TextInput, 
    TouchableWithoutFeedback 
} from 'react-native'

//Icons Imports
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SearchbarComponent = () => {

    const [visible, setVisible] = useState(false)

    return (
      <SafeAreaView>
        <View>
            <TouchableOpacity
                onPress={() => setVisible(true)}
            >
                <FontAwesome6 name='magnifying-glass' style={style.magnifyingIcon}/>
            </TouchableOpacity>
        </View>
        <Modal
            animationType='fade'
            onDismiss={console.log("Close Modal")}
            onShow={console.log("Show Modal")}
            transparent
            visible={visible}
        >
            <TouchableWithoutFeedback 
                onPress={() => setVisible(false)}
            >
                <View style={{flex: 1}}>
                    <View style={style.container}>
                        <TouchableOpacity
                            onPress={() => setVisible(false)}
                        >
                            <AntDesign name='closecircle' style={{fontSize: 25, color: '#68ECA3', marginRight: 20}}/>
                        </TouchableOpacity>
                        <View style={style.inputContainer}>
                            <FontAwesome6 name='magnifying-glass' style={style.magnifyingIconSearchbar}/>
                            <TextInput
                                placeholder='Search...'
                                style={{color: '#000000', fontSize: 18, paddingHorizontal: 20, flex: 1}}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
      </SafeAreaView>
    )
}

const style = StyleSheet.create({

    magnifyingIcon: {
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

    magnifyingIconSearchbar: {
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

export default SearchbarComponent
