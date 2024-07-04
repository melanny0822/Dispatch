import { StyleSheet } from "react-native";
import Colors from "./Colors";

const StyleScreens = StyleSheet.create({

    //All Container
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

    containerIcons: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    containerUserChat: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center',
        marginHorizontal: 15
    }
})

export default StyleScreens