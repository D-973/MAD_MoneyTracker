import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Arrow} from '../../../assets/icon';

const HWArrow = ({text, tcolor = '#020202', onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.backButton}
          onPress={onPress}>
          <Arrow />
        </TouchableOpacity>
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
    alignItems: 'center', // This centers items vertically in the row
    gap: 26,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    fontWeight: '500',
  },
  backButton: {
    width: 50,
    height: 33,
    justifyContent: 'center', // This centers the arrow vertically
    alignItems: 'center', // This centers the arrow horizontally
  },
});
