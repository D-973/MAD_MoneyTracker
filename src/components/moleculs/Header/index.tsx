import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({text, tcolor = '#020202'}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: tcolor}]}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingVertical: 38,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    fontWeight: '500',
  },
});
