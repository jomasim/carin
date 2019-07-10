import {
    StyleSheet
} from "react-native";
const styles = StyleSheet.create({
    loginButton: {
        marginRight: 30,
        marginLeft: 30,
        flexDirection: 'row',
        flex: 1,
        borderRadius: 8,
        marginTop: 70,
        borderColor: '#9E9E9E',
    },
    usernameInput: {
        marginTop: 60,
        marginRight: 30,
        marginLeft: 30,
        flexDirection: 'row',
        flex: 1,
    },
    passwordInput: {
        marginRight: 30,
        marginLeft: 30,
        flexDirection: 'row',
        flex: 1,
    },
    personIcon: {
        color: '#746E6E',
    },
    loginText: {
        color: '#746E6E',
        fontFamily: 'Montserrat-Medium'
    },
    signInLabel: {
        marginTop: 100,
        marginLeft: 30,
        fontSize: 20,
        color: '#424242',
        fontFamily: 'Montserrat-Medium'
    },
    labelsContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    rememberText: {
        textAlign: 'left',
        marginLeft: 22,
        fontSize: 14,
        flex: 0.5,
        color: '#9E9E9E',
        fontFamily: 'Montserrat-Medium'
    },
    forgotText: {
        textAlign: 'right',
        flex: 0.5,
        fontSize: 14,
        marginRight: 30,
        color: '#9E9E9E',
        fontFamily: 'Montserrat-Medium'
    },
    notAmemberContainer: {
        marginTop: 114,
        marginLeft: 30,
        alignItems: "center",
    },
    notAmemberText: {
        textAlignVertical: "center",
        color: '#9E9E9E',
        fontFamily: 'Montserrat-Regular'
    },
    signUpText: {
        paddingLeft: 20,
        color: '#A03A3A',
        fontFamily: 'Montserrat-Regular'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 60,
        height: 60,
        textAlignVertical: "center",
        marginTop: 30,
    },
    header: {
        color: '#9E9E9E',
        fontFamily: 'Montserrat-Regular'
    },
    checkBox: {
        marginLeft: 20,
        width: 17,
    },
    inputText: {
        color: '#9E9E9E',
        fontFamily: 'Montserrat-Regular'
    },
});

export default styles;