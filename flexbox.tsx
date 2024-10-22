import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const flexbox = () => {
  return (
    <>
      <View style={styles.topContainer} />
      <View style={styles.container}>
        <View style={styles.redBox} />
        <View style={styles.greenBox} />
        <View style={styles.blueBox} />
      </View>
      <View style={styles.bottomContainer} />
    </>
  );
};

export default flexbox;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: 'purple',
    flex: 1,
  },
  bottomContainer: {
    backgroundColor: 'pink',
    flex: 1, //so if you increase flex, it takes up a larger space
    //1 = 1, 2= .../3, 3=.../6
  },
  container: {
    backgroundColor: 'yellow',
    flex: 4, //flex 1 adalah untuk 1 layar penuh
    //main axis justify is vertical or sumbu y (dalam normal aka atas ke bawah)
    // justifyContent: 'center', //untuk membuat di tengah
    // justifyContent: 'flex-end', //dibawah kalo 'flex-start' di atas
    justifyContent: 'space-around', //yang spaces itu ada jarak
    //kalo align itu sumbu x (dalam normal aka atas ke bawah)
    alignItems: 'center', //same command as justifyContent
    //arah
    // flexDirection: 'column', //atas ke bawah
    flexDirection: 'row', //kiri ke kanan
  },
  redBox: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  greenBox: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
  },
  blueBox: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
  },
});
