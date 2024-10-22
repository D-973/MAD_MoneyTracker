import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Arrow} from '../../../assets/icon';

const HWArrow = ({text, tcolor = '#020202'}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Arrow />
        <Text style={[styles.text, {color: tcolor}]}>{text}</Text>
      </View>
    </View>
  );
};

export default HWArrow;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingVertical: 38,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 26, // This creates the gap between arrow and text
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    fontWeight: '500',
  },
});
