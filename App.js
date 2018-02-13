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

type Props = {};

const deliveries = mockdata;

export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.renderDeliveryCard = this.renderDeliveryCard.bind(this);
  }

  renderDeliveryCard({item}) {
    return (
      <DeliveryCard
        navigator={this.props.navigator}
        delivery={item}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
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
    backgroundColor: '#F5FCFF',
  },
});
