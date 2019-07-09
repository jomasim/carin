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
        marginTop: 100,
        borderColor: '#E0E0E0',
    },
    usernameInput: {
        marginTop: 10,
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
        color: '#E0E0E0'
    },
    loginText: {
        color: '#212121',
    },
    signInLabel: {
        marginTop: 100,
        marginLeft: 30,
        fontSize: 20,
        color: '#424242',
    },
    labelsContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    rememberText: {
        textAlign: 'left',
        marginLeft: 30,
        flex: 0.5,
        color: '#9E9E9E',
    },
    forgotText: {
        textAlign: 'right',
        flex: 0.5,
        marginRight: 30,
        color: '#9E9E9E',
    },
    notAmemberContainer: {
        marginTop: 20,
        marginLeft: 30,
        alignItems: "center",
    },
    notAmemberText: {
        textAlignVertical: "center",
        color: '#9E9E9E',
    },
    signUpText: {
        marginLeft: 30,
        color: '#A03A3A',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 60,
        height: 60,
        textAlignVertical: "center",
        marginTop:30,
    },
    header:{
        color: '#9E9E9E',
    }
});

export default styles;