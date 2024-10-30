import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SubTitle = ({text}) => {
  return (
    <View>
      <Text style={styles.text1}>{text}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  text1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '700',
    color: '#020202',
  },
});
