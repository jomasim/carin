import React, { Component } from "react";
import { Container, Form, Item, Content, Input, Button, Text, Icon, View, CheckBox } from 'native-base';
import { ActivityIndicator, Image, ImageBackground } from 'react-native';
import styles from './Login.css';


class Login extends Component {
    static navigationOptions = { header: null };

    state = { loading: false, username: '', password: '', validUsername: false, passwordHidden: true }

    componentDidUpdate() {
        this.validateForm();
    }
    validateForm = () => {
        const { username, password, validUsername } = this.state;
        if (username.length >= 6 && !validUsername) {
            this.setState({ validUsername: true });
            setTimeout(() => {
                this.setState({ validUsername: false });
            }, 1000);
        }
        // if (validUsername && username.length < 6) {
        //     this.setState({ validUsername: false });
        // }
    }
    toggleShow = () => {
        const { passwordHidden } = this.state;
        this.setState({ passwordHidden: !passwordHidden });
    }
    onLogin = () => {
        this.setState({ loading: true });
        console.log(this.state);
        setTimeout(() => {
            this.setState({ loading: false });
            const { navigate } = this.props.navigation;
            navigate('Home')
        }, 2000);
    }
    handleSubmit = () => {
        console.log('helllo');
        // const name = event.target.name;
        // const value = event.target.value;
        // this.setState({name: value});
        console.log(this.state);
    }
    render() {
        const { loading, validUsername, passwordHidden } = this.state;
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
                                    placeholderTextColor="#fff"
                                    onChangeText={(username) => { this.setState({ username }) }}>
                                </Input>
                                {validUsername === true ? <Icon name="checkmark-circle" style={styles.personIcon}  ></Icon> : null}
                            </Item>
                            <Item style={styles.passwordInput}>
                                <Icon name="lock" style={styles.personIcon}></Icon>
                                <Input name="password"
                                    placeholder="Password"
                                    style={styles.inputText}
                                    secureTextEntry={passwordHidden}
                                    placeholderTextColor="#fff"
                                    onChangeText={(password) => { this.setState({ password }) }}>
                                </Input>
                                <Icon name="eye" style={styles.personIcon} onPress={this.toggleShow}></Icon>
                            </Item>
                            <View style={styles.labelsContainer} >
                                <CheckBox checked={true} color='#f0f0f0' style={styles.checkBox} />
                                <Text style={styles.rememberText} >Remember me</Text>
                                <Text style={styles.forgotText} >Forgot password?</Text>
                            </View>
                            <Button block bordered style={styles.loginButton} onPress={this.handleSubmit}>
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