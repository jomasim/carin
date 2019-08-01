import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
} from "react-native";
import { Container, Content } from 'native-base';
import * as Animatable from 'react-native-animatable';
import styles from '../Login/Login.css';
import { WaveIndicator } from 'react-native-indicators';
import { getToken } from '../../utils/auth';

class Welcome extends Component {
    static navigationOptions = { header: null };
    state = {
        loading: false,
        route: ''
    }

    componentDidUpdate() {
        const { navigate } = this.props.navigation;
        const { route, loading } = this.state;
        if (loading) {
            setTimeout(() => {
                this.setState({ loading: false });
            }, 1000);
        }
        if (route && !loading) {
            navigate(route);
        }

    }
    componentDidMount() {
        this.checkToken();
    }
    
    checkToken = async () => {
        const { route } = this.state;
        const token = await getToken();
        const link = token ? 'Home' : 'Login';
        if (!route) {
            setTimeout(() => {
                this.setState({ route: link, loading: true });
            }, 1000);
        }
    }

    render() {
        const { loading } = this.state;
        return (
            <Container>
                <ImageBackground source={require("./back.png")} style={{ width: '100%', height: '100%' }}>
                    {loading ? <WaveIndicator color='white' /> :
                        <Animatable.View
                            animation="zoomIn"
                            style={styles.welcomeLogo}
                            iterationCount={1} >
                            <Image
                                style={styles.logo}
                                source={require('./logo.png')} />
                            <Animatable.View
                                animation="zoomInUp"
                                iterationCount={1}>
                                <Text style={styles.welcomeText}>Welcome to Carab</Text>
                            </Animatable.View>
                        </Animatable.View>}
                </ImageBackground>
            </Container >
        );
    }
}
export default Welcome;