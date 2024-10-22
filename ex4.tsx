import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

const ex4 = () => {
  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
      <View style={styles.container}>
        <Image
          style={styles.Simages}
          source={require('./assets/logo-with-motto-3.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </>
  );
};

export default ex4;

const styles = StyleSheet.create({
  Simages: {
    width: width,
    height: undefined,
    aspectRatio: 1, // Adjust this value based on your image's aspect ratio
  },
  blackBox: {
    backgroundColor: 'black',
    height: 100,
    width: 100,
    margin: 10,
    marginTop: 20,
  },
  yellowBox: {
    backgroundColor: 'yellow',
    height: 100,
    width: 100,
    margin: 10,
    marginTop: 20,
  },
  topContainer: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: 'white',
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
