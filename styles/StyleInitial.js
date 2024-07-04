import { StyleSheet } from "react-native";
import Colors from "./Colors";

const StyleInitial = StyleSheet.create({
    gradient: {
        height: '100%'
    },

    gradientButtonLoginRegister: {
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        elevation: 10
    },

    //All Containers
    
    container: {
        flex: 1
    },

    containerInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerForm: {
        flex: 1,
        backgroundColor: Colors.color1,        
        padding: 30,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: '100%',
    },

    containerLogo: {
        alignItems: 'center',
        marginVertical: 20
    },

    containerInputLoginRegister: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.color7,
        elevation: 10,
        borderRadius: 40,
        marginVertical: 15,
        paddingVertical: 8,
        paddingHorizontal: 20,
        width: '100%'
    },

    containerSocialButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginBottom: 60,
    },

    //All Sizes

    logoHuge: {
        width: 100,
        height: 100,
    },

    //All Titles

    titleLoginRegister: {
        color: Colors.color3,
        fontSize: 40,
        fontWeight: '900',
        textAlign: 'center',
        marginVertical:20
    },

    //All Icons

    iconInputLoginRegister: {
        color: Colors.color6,
        fontSize: 25,
        marginRight: 10
    },

    //All Texts

    textButtonInitialScreen: {
        color: Colors.color4,
        fontSize: 18,
        fontWeight: 'bold'
    },

    textLogo: {
        color: Colors.color1,
        fontSize: 40,
        fontWeight: '900'
    },

    textInputLoginRegister: {
        flex: 1,
        color: Colors.color6,
        fontSize: 20
    },

    textButtonLoginRegister: {
        color: Colors.color1,
        fontSize: 25,
        fontWeight: '900',
    },

    textForgot: {
        color: Colors.color6,
        marginTop: 10,
        textAlign: 'center'
    },

    textForgotLink: {
        color: Colors.color4,
        textDecorationLine: 'underline',
        textAlign: 'center'
    },

    //All Lines

    lineRegister: {
        height: 4,
        marginVertical: 20,
        marginHorizontal: 10
    },

    //All Buttons

    buttonInitialScreen:{
        backgroundColor: Colors.color1,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        marginVertical: 10,
        width: '70%',
        alignItems: 'center',
    },

    buttonLoginRegister: {
        marginVertical: 40,
        marginHorizontal: 50
    },

    buttonSocial: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        marginVertical: 20,
        marginHorizontal: 30,
        paddingHorizontal: 70,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    buttonBack: {
        fontSize: 40, 
        color: Colors.color1,
        marginTop: 15,
        marginLeft: 15
    }
})

export default StyleInitial