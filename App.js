/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import mockdata from "./utils/mockdata";
import DeliveryCard from "./Delivery/Components/DeliveryCard";
import {Header} from "react-native-elements";

type Props = {};

const deliveries = mockdata;

export default class App extends Component<Props> {

  renderDeliveryCard({item}) {
    return (
      <DeliveryCard
        delivery={item}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'IParcel', style: { color: '#fff' } }}
        />
        <FlatList
          data={deliveries}
          renderItem={this.renderDeliveryCard}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 36 : 0,
    backgroundColor: '#F5FCFF',
  },
});
