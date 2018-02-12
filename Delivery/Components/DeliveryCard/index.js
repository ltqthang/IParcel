import { View, StyleSheet, Text, Dimensions} from 'react-native';
import React, {Component, PropTypes} from 'react';
import {Card, Button} from 'react-native-elements'
import { Navigation } from 'react-native-navigation';

const DeliveryCard = ({delivery}: {}) => {
  return (
    <Card
      title={delivery.customer}
      image={{uri: delivery.image}}>

      <Text>
        <Text h4 style={{fontWeight: 'bold'}}>{'From: '}</Text>
        <Text h4>{delivery.from.name}</Text>
      </Text>
      <Text>
        <Text style={{fontWeight: 'bold'}}>{'From: '}</Text>
        <Text h4>{delivery.to.name}</Text>
      </Text>
      <View style={{height: 16}}/>

      <Button
        backgroundColor='#03A9F4'
        fontFamily='Lato'
        buttonStyle={{borderRadius: 2}}
        onPress={() => Navigation.showModal({screen: 'DeliveryDetails'})}
        text='Pick Up Now'/>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {},
  icon: {},
  text: {}
});


export default DeliveryCard