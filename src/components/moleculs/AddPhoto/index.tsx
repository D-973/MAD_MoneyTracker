import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AddPhoto = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default AddPhoto;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 26,
  },
  outerCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#8D92A3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    margin: 10,
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0', //because it uses view that's why it uses backgorund color
  },
  text: {
    textAlign: 'center',
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 25,
    paddingRight: 25,
  },
});
