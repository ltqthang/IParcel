import { AppRegistry } from 'react-native';
import App from './App';
import { Navigation } from 'react-native-navigation';

// AppRegistry.registerComponent('IParcel', () => App);
Navigation.registerComponent('App', () => App);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'App',
    title: 'IParcel',
    navigatorStyle: {},
    navigatorButtons: {}
  },
});