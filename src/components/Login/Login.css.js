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
        borderColor: '#fff',
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
        color: '#f0f0f0',
    },
    errorIcon: {
        color: 'red',
    },
    loginText: {
        color: '#fff',
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
        color: '#D8BFBF',
        fontFamily: 'Montserrat-Medium'
    },
    forgotText: {
        textAlign: 'right',
        flex: 0.5,
        fontSize: 14,
        marginRight: 30,
        color: '#D8BFBF',
        fontFamily: 'Montserrat-Medium'
    },
    notAmemberContainer: {
        marginTop: 114,
        marginLeft: 30,
        alignItems: "center",
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
    },
    notAmemberText: {
        textAlignVertical: "center",
        color: '#fff',
        fontFamily: 'Montserrat-Regular',
        textAlign: "center",
    },
    signUpText: {
        paddingLeft: 20,
        color: '#FD8E1F',
        fontFamily: 'Montserrat-Regular'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 60,
        height: 60,
        marginTop: 30,
    },
    header: {
        color: '#D8BFBF',
        fontFamily: 'Montserrat-Regular'
    },
    checkBox: {
        marginLeft: 20,
        width: 17,
    },
    inputText: {
        color: '#fff',
        fontFamily: 'Montserrat-Regular'
    },
    messageLabel: {
        marginTop: 10,
        marginLeft: 30,
        color: "red",
        fontSize: 12,
    },
    welcomeText: {
        textAlignVertical: "center",
        color: '#fff',
        fontFamily: 'Montserrat-Regular',
        textAlign: "center",
        fontSize: 18,
    },
    welcomeLogo: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    welcomeLoader: {
        height: 10,
    }
});

export default styles;