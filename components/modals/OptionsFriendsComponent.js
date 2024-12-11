import React, { useState, useRef} from 'react'
import { 
    Modal, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    TouchableWithoutFeedback, 
    View 
} from 'react-native'

//Icons Imports
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const OptionsFriendsComponent = () => {

    const [visible, setVisible] = useState(false)
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })
    const buttonRef = useRef(null)

    const handlePress = () => {
        buttonRef.current.measure((fx, fy, width, height, px, py) => {
          setButtonPosition({ x: px -130, y: py + height - 30});
          setVisible(true);
        })
    }

    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity
                    ref={buttonRef} 
                    onPress={handlePress}
                >
                    <Ionicons name='ellipsis-vertical' style={{fontSize: 20, marginRight: 5}}/>
                </TouchableOpacity>
            </View>

            <Modal            
                animationType='fade'
                onDismiss={console.log("Close Modal")}
                onShow={console.log("Show Modal")}
                transparent
                onRequestClose={() => setVisible(false)}
                visible={visible}
            >
                <TouchableWithoutFeedback  
                    onPress={() => setVisible(false)}
                >
                    <View style={{flex: 1}}>
                        <View style={[style.container, { top: buttonPosition.y, left: buttonPosition.x }]}>
                            <TouchableOpacity style={style.info}>
                                <FontAwesome name='trash' style={style.icons}/>
                                <Text>Delete Friend</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.info}>
                                <MaterialIcons name='block-flipped' style={style.icons}/>
                                <Text>Block Friend</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({

    container: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: 150,
        borderRadius: 20,
        elevation: 20
    },

    info: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    icons: {
        fontSize: 25,
        color: '#C30000',
        marginRight: 5,
        marginTop: 5
    }
})

export default OptionsFriendsComponent
