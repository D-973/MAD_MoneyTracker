import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, color = 'orange', onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button(color)}
        activeOpacity={0.5}
        onPress={onPress}>
        <Text style={styles.sign}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  sign: {
    color: 'white',
  },
  button: color => ({
    backgroundColor: color,
    alignItems: 'center',
    padding: 10,
    margin: 30,
    borderRadius: 10,
    marginBottom: -10,
  }),
});
