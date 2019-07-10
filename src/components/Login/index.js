import React, { Component } from "react";
import { Container, Form, Item, Content, Input, Button, Text, Icon, View, CheckBox } from 'native-base';
import { ActivityIndicator, Image, ImageBackground } from 'react-native';
import styles from './Login.css';


class Login extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props)
        this.state = { loading: false }
    }
    onLogin = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
            const { navigate } = this.props.navigation;
            navigate('Home')
        }, 2000);
    }
    render() {
        const { loading } = this.state;
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
                                <Input placeholder="Username" style={styles.inputText} placeholderTextColor="#9E9E9E" ></Input>
                            </Item>
                            <Item style={styles.passwordInput}>
                                <Icon name="lock" style={styles.personIcon}></Icon>
                                <Input placeholder="Password" style={styles.inputText} secureTextEntry={true} placeholderTextColor="#9E9E9E" ></Input>
                                <Icon name="eye" style={styles.personIcon}></Icon>
                            </Item>
                            <View style={styles.labelsContainer} >
                                <CheckBox checked={true} color="#746E6E" style={styles.checkBox} />
                                <Text style={styles.rememberText} >Remember me</Text>
                                <Text style={styles.forgotText} >Forgot password?</Text>
                            </View>
                            <Button block bordered style={styles.loginButton} onPress={() => this.onLogin()}>
                                {loading ? <ActivityIndicator size="small" /> : <Text style={styles.loginText}>Login</Text>}
                            </Button>
                            <View style={styles.notAmemberContainer} >
                                <Text style={styles.notAmemberText}>Not a member?
                                <Text style={styles.signUpText} >Sign up</Text>
                                </Text>
                            </View>
                        </Form>
                    </Content>
                </ImageBackground>
            </Container>
        );
    }
}
export default Login;