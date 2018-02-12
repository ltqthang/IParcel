import App from './App';
import DeliveryDetails from './Delivery/DeliveryDetails';
import { Navigation } from 'react-native-navigation';

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('DeliveryDetails', () => DeliveryDetails);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'App',
    title: 'IParcel',
    navigatorStyle: {},
    navigatorButtons: {}
  },
});