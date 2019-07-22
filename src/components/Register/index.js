import React, { Component } from "react";
import { Container, Form, Item, Content, Input, Button, Text, Icon, View, CheckBox, Label } from 'native-base';
import { Image, ImageBackground } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';
import styles from '../Login/Login.css';

class Register extends Component {
    state = {
        loading: false,
        username: '',
        password: '',
        passwordHidden: true,
        passwordError: false,
        usernameError: false,
        errors: {}
    }

    handleLogin = () => {
        const { navigate } = this.props.navigation;
        navigate('Login');
    }

    render() {
        const { loading } = this.state;
        return (
            <Container>
                <ImageBackground source={require("./back.png")} style={{ width: '100%', height: '100%' }}>
                    <Content>
                        <Form>
                            <Item style={styles.usernameInput}>
                                <Icon name="person" style={styles.personIcon}></Icon>
                                <Input name="username"
                                    placeholder="Username"
                                    style={styles.inputText}
                                    placeholderTextColor="#fff">
                                </Input>

                            </Item>

                            <Item style={styles.passwordInput}>
                                <Icon name="lock" style={styles.personIcon}></Icon>
                                <Input name="password"
                                    placeholder="Password"
                                    style={styles.inputText}
                                    secureTextEntry={true}
                                    placeholderTextColor="#fff"
                                >
                                </Input>
                            </Item>

                            <View style={styles.labelsContainer} >
                                <CheckBox checked={true} color='#f0f0f0' style={styles.checkBox} />
                                <Text style={styles.rememberText} >Remember me</Text>
                                <Text style={styles.forgotText} >Forgot password?</Text>
                            </View>
                            <Button block bordered style={styles.loginButton} >
                                {loading ? <WaveIndicator color='white' /> : <Text style={styles.loginText}>Create account</Text>}
                            </Button>
                            <View style={styles.notAmemberContainer} >
                                <Text style={styles.notAmemberText}>Already have an account?
                                </Text>
                                <Button transparent onPress={this.handleLogin} >
                                    <Text style={styles.signUpText} >Sign in</Text>
                                </Button>
                            </View>
                        </Form>
                    </Content>
                </ImageBackground>
            </Container>
        );
    }
}
export default Register;