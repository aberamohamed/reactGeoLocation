import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {getPreciseDistance} from 'geolib';

const App = () => {
let pdis
  const calculatePreciseDistance = () => {
     pdis = getPreciseDistance(
      {latitude: 8.988434295712569, longitude: 38.79068811469387},
      {latitude: 8.990781276924057, longitude: 38.78451110581045},
    );
  };
calculatePreciseDistance()
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.header}>
            Distance Between Two Locations
          </Text>
          <Text style={styles.textStyle}>
            Distance between
            {'\n'}
            SkyLight(8.988434295712569, 38.79068811469387) 
            and 
            Alem Cinima (8.990781276924057, 38.78451110581045)
          </Text>
          <TouchableOpacity
          style = {styles.buttonStyle}
           >
            <Text>{pdis+" Meter OR "+pdis/1000+" KM"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    marginTop: 30,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    paddingVertical: 20,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#dddddd',
    margin: 10,
  },
});

export default App;