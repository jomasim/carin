import { View, Text, AppRegistry } from 'react-native'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './src/components/Login';
import RegisterScreen from './src/components/Register';
import HomeScreen from './src/components/Home';
import WelcomeScreen from './src/components/Welcome';
import React from 'react';
import store from './src/redux';
import { Provider } from 'react-redux';
import { Root } from 'native-base';

const MainNavigator = createStackNavigator({ 
  Home: { screen: HomeScreen },
});

const MainScreen = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  MainNavigator: { screen: MainNavigator }
})

const AppContainer = createAppContainer(MainScreen);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppContainer />
        </Root>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('carin', () => App);
