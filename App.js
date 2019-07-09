import { View, Text, AppRegistry } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/components/Login';
import React from 'react';

const MainNavigator = createStackNavigator({
  Home: { screen: Login },
});
const AppContainer = createAppContainer(MainNavigator);
export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
AppRegistry.registerComponent('carin', () => App, null);
