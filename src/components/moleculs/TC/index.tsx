import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap} from '../../atoms';

const TC = ({date, item, cash, color = '#D9435E'}) => {
  return (
    <>
      <View style={styles.border}>
        <View style={styles.BT}>
          <Gap height={11} />
          <Text style={styles.text1}>{date}</Text>
          <Gap height={5} />
          <Text style={styles.text2}>{item}</Text>
        </View>
        <View style={styles.RG}>
          <Text style={styles.cash(color)}>{cash}</Text>
        </View>
      </View>
    </>
  );
};

export default TC;

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    height: 69,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderColor: 'white',
  },
  BT: {
    marginLeft: 20,
  },
  text1: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: '#8D92A3',
  },
  text2: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: '#020202',
  },
  RG: {
    position: 'absolute',
    marginLeft: 232,
    marginTop: 24,
  },
  cash: color => ({
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 14,
    color: color,
  }),
});
