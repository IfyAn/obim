import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

export default function Place() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [geocode, setGeocode] = useState(null);

  useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setErrorMsg(
        'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
      );
    } else {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }

        
    let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
    const { latitude , longitude } = location.coords

    getGeocodeAsync({latitude, longitude})
    setLocation({latitude, longitude});
      })();
    }
  });

  getGeocodeAsync= async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location)
    setGeocode( geocode )
  }

  return (
    <View style={styles.container}>
         {/* <Text style={styles.heading2}>{geocode ? geocode[0].street :""}</Text> */}
     <Text style={styles.text}>{geocode  ? `${geocode[0].street} ${geocode[0].city}, ${geocode[0].isoCountryCode}` :""}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     justifyContent: 'center',   
  },
  text:{
    fontSize:14,
    fontWeight:'400',
    color:'#fff'
  },
});
