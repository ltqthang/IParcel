import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Alert} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from "./../../const";
import {Button} from "react-native-elements";

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.3;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const SINGAPORE_COORDINATE = {
  latitude: 1.3521,
  longitude: 103.8198,
};

class DeliveryDetails extends Component {

  constructor(props) {
    super(props);
    this.finishDelivery = this.finishDelivery.bind(this);

    this.state = {
      // Init with Singapore
      currentCoordinate: SINGAPORE_COORDINATE
    };

    this.mapView = null;
  }

  finishDelivery() {
    Alert.alert(
      'Confirm',
      'Confirm finish deliver this parcel?',
      [
        {text: 'Yes', onPress: () => this.props.navigator.pop()},
        {text: 'No', style: 'cancel'},
      ],
      {cancelable: false}
    )
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(current => {
      const {coords} = current;
      this.setState({
        currentCoordinate: {
          longitude: coords.longitude,
          latitude: coords.latitude,
        }
      })
    }, error => {
      alert('Cannot get current location!');
      console.log('error', error)
    })
  }

  render() {
    const {currentCoordinate} = this.state;
    const {delivery} = this.props;
    const {from, to} = delivery;

    return (
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <MapView
          initialRegion={{
            ...SINGAPORE_COORDINATE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
          style={StyleSheet.absoluteFill}
          ref={c => this.mapView = c}
        >

          <MapView.Marker
            title={'Pick up: ' + from.name}
            pinColor={'red'}
            key={`coordinate_${from.latitude + from.longitude}`}
            coordinate={from}/>

          <MapView.Marker
            title={'Drop off: ' + to.name}
            pinColor={'green'}
            key={`coordinate_${to.latitude + to.longitude}`}
            coordinate={to}/>

          <MapViewDirections
            origin={currentCoordinate}
            waypoints={[from]}
            destination={to}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            onReady={(result) => {
              this.mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: (width / 20),
                  bottom: (height / 20),
                  left: (width / 20),
                  top: (height / 20),
                }
              });
            }}
            onError={(errorMessage) => {
              alert('Cannot get direction!');
              console.log('errorMessage', errorMessage);
            }}
          />

        </MapView>

        <Button
          backgroundColor='#03A9F4'
          fontFamily='Lato'
          buttonStyle={{width: width - 16, margin: 8}}
          onPress={this.finishDelivery}
          text='Done'/>
      </View>
    );
  }
}

export default DeliveryDetails;