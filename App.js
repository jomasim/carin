import { View, Text, AppRegistry } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/components/Login';
import RegisterScreen from './src/components/Register';
import WelcomeScreen from './src/components/Home';
import React from 'react';
import store from './src/redux';
import { Provider } from 'react-redux';

const MainNavigator = createStackNavigator({
  Home: { screen: Login },
  Welcome: { screen: WelcomeScreen },
  Register: { screen: RegisterScreen },
});

const AppContainer = createAppContainer(MainNavigator);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('carin', () => App);
