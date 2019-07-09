import React, { Component } from "react";
import { Container, Form, Item, Content, Input, Button, Text, Icon, View } from 'native-base';
import { ActivityIndicator, Image } from 'react-native';
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
                <Content>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('./logo.png')}
                        />
                        <Text style={styles.header}>Welcome to Carab</Text>
                    </View>
                    <View>
                        <Text style={styles.signInLabel}>Sign in here</Text>
                    </View>
                    <Form>
                        <Item style={styles.usernameInput}>
                            <Icon name="person" style={styles.personIcon}></Icon>
                            <Input placeholder="Username" ></Input>
                        </Item>
                        <Item style={styles.passwordInput}>
                            <Icon name="lock" style={styles.personIcon}></Icon>
                            <Input placeholder="Password"></Input>
                        </Item>
                        <View style={styles.labelsContainer} >
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
            </Container>
        );
    }
}
export default Login;