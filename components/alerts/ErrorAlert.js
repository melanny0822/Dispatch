import React from 'react'
import { 
    Modal,
    Text, 
    TouchableOpacity 
} from 'react-native'

//Icons Imports
import Feather from 'react-native-vector-icons/Feather'

const ErrorAlert = ({error, setErrorVisible}) => {
  return (
    <Modal
        animationType='fade'
        onDismiss={console.log("Close Modal")}
        onShow={console.log("Show Modal")}
        visible={{}}
    >
        <View>
            <Feather name='alert-triangle'/>
            <Text>{error}</Text>
            <TouchableOpacity
                onPress={() => setErrorVisible(false)}
            >
                <Text>OK</Text>
            </TouchableOpacity>
        </View>
    </Modal>
  )
}

export default ErrorAlert
