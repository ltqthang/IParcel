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
import generateMockData from "./utils/mockdata";
import DeliveryCard from "./Delivery/Components/DeliveryCard";

type Props = {};


export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.renderDeliveryCard = this.renderDeliveryCard.bind(this);
    this.refreshMockData = this.refreshMockData.bind(this);

    this.state = {
      deliveries: generateMockData(),
    }
  }

  renderDeliveryCard({item}) {
    return (
      <DeliveryCard
        navigator={this.props.navigator}
        delivery={item}/>
    )
  }

  refreshMockData() {
    this.setState({
      deliveries: generateMockData(),
    })
  }

  render() {
    const {deliveries} = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={deliveries}
          onRefresh={this.refreshMockData}
          refreshing={false}
          renderItem={this.renderDeliveryCard}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
