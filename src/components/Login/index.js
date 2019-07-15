import React, { Component } from "react";
import { Container, Form, Item, Content, Input, Button, Text, Icon, View, CheckBox, Label } from 'native-base';
import { ActivityIndicator, Image, ImageBackground } from 'react-native';
import styles from './Login.css';
import { WaveIndicator } from 'react-native-indicators';
import { loginUser } from '../../redux/actions/Login';
import { connect } from 'react-redux';


class Login extends Component {
    static navigationOptions = { header: null };

    state = {
        loading: false,
        username: '',
        password: '',
        passwordHidden: true,
        passwordError: false,
        usernameError: false,
        errors: {}
    }

    componentDidUpdate() {

    }

    validateUsername = () => {
        const { username, usernameError } = this.state;
        if (username.length < 4 && !usernameError) {
            this.setState({ usernameError: "Username must be more than 3 characters" });
        }
    }
    toggleShow = () => {
        const { passwordHidden } = this.state;
        this.setState({ passwordHidden: !passwordHidden });
    }

    validatePassword = () => {
        const { passwordError, password } = this.state;
        if (password.length < 4 && !passwordError) {
            this.setState({ passwordError: "Password must be more than 4 characters" });
        }
    };

    formIsValid = () => {
        return !this.validatePassword() && !this.validateUsername();
    }
    handleSubmit = () => {
        if (this.formIsValid()) {
            const { loginUser: loginAction } = this.props;
            const { username, password } = this.state;
            loginAction({ username, password });
            this.setState({ loading: true });
            setTimeout(() => {
                this.setState({ loading: false });
                const { navigate } = this.props.navigation;
                navigate('Welcome');
            }, 2000);
        }
    }
    handleRegister = () => {
        const { navigate } = this.props.navigation;
        navigate('Register');
    }
    render() {
        const { loading, usernameError, passwordHidden, passwordError, errors, password, username } = this.state;
        return (
            <Container>
                <ImageBackground source={require("./back.png")} style={{ width: '100%', height: '100%' }}>
                    <Content>
                        <View style={styles.logoContainer}>
                            <Image
                                style={styles.logo}
                                source={require('./logo.png')}
                            />
                            <Text style={styles.header}>Welcome to Carab</Text>
                        </View>
                        <Form>
                            <Item style={styles.usernameInput}>
                                <Icon name="person" style={styles.personIcon}></Icon>
                                <Input name="username"
                                    placeholder="Username"
                                    style={styles.inputText}
                                    onBlur={this.validateUsername}
                                    placeholderTextColor="#fff"
                                    onChangeText={(username) => { this.setState({ username, usernameError: "" }) }}>
                                </Input>
                                {usernameError ? (<Icon name="close-circle" style={styles.errorIcon} onPress={() => this.setState({ usernameError: "" })} ></Icon>) : null}
                                {username && !usernameError ? (<Icon name="checkmark-circle" style={styles.personIcon} ></Icon>) : null}
                            </Item>
                            {usernameError ? (<Label style={styles.messageLabel}>{usernameError}</Label>) : null}
                            <Item style={styles.passwordInput}>
                                <Icon name="lock" style={styles.personIcon}></Icon>
                                <Input name="password"
                                    placeholder="Password"
                                    style={styles.inputText}
                                    secureTextEntry={passwordHidden}
                                    placeholderTextColor="#fff"
                                    onBlur={this.validatePassword}
                                    onChangeText={(password) => { this.setState({ password, passwordError: "" }) }}>
                                </Input>
                                {passwordError ? (<Icon name="close-circle" style={styles.errorIcon} onPress={() => this.setState({ passwordError: false, errors: this.getErrors({ passwordError: "" }) })} ></Icon>) :
                                    (<Icon name="eye" style={styles.personIcon} onPress={this.toggleShow}></Icon>)}
                            </Item>
                            {passwordError ? (<Label style={styles.messageLabel}>{passwordError}</Label>) : null}
                            <View style={styles.labelsContainer} >
                                <CheckBox checked={true} color='#f0f0f0' style={styles.checkBox} />
                                <Text style={styles.rememberText} >Remember me</Text>
                                <Text style={styles.forgotText} >Forgot password?</Text>
                            </View>
                            <Button block bordered style={styles.loginButton} onPress={this.handleSubmit}>
                                {loading ? <WaveIndicator color='white' /> : <Text style={styles.loginText}>Login</Text>}
                            </Button>
                            <View style={styles.notAmemberContainer} >
                                <Text style={styles.notAmemberText}>Not a member?
                                </Text>
                                <Button transparent onPress={this.handleRegister}>
                                    <Text style={styles.signUpText} >Sign up</Text>
                                </Button>
                            </View>
                        </Form>
                    </Content>
                </ImageBackground>
            </Container>
        );
    }
}
const mapStateToProps = (state) => ({
    LoginStatus: state.login,
});
const mapDispatchToProps = {
    loginUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);