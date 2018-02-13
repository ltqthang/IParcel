import {View, StyleSheet, Text, Dimensions} from 'react-native';
import React, {Component, PropTypes} from 'react';
import {Card, Button} from 'react-native-elements'
import getMapPreviewUrl from "./../../../utils/getMapPreviewUrl";

const DeliveryCard = ({delivery, navigator}: {}) => {
  return (
    <Card
      title={delivery.customer}
      image={{uri: getMapPreviewUrl(delivery.from, delivery.to)}}>

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
        onPress={() => navigator.push(
          {
            screen: 'DeliveryDetails',
            title: 'Delivery Details',
            passProps: {delivery}
          }
        )}
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