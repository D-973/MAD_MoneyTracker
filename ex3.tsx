import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ex3 = () => {
  return (
    <View>
      <Text style={styles.welcome}> Welcome </Text>
      <Text style={styles.usps}> Username</Text>
      <TextInput style={styles.usps2} placeholder="Masukkan username anda" />
      <Text style={styles.usps}> Password</Text>
      <TextInput style={styles.usps2} placeholder="Masukkan password anda" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.sign}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ex3;

const styles = StyleSheet.create({
  sign: {
    color: 'white',
  },
  button: {
    backgroundColor: '#ff6721',
    alignItems: 'center',
    padding: 10,
    margin: 30,
    borderRadius: 10,
  },
  welcome: {
    fontSize: 42,
    fontWeight: '900',
    color: 'black',
    margin: 20,
  },
  usps: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    margin: 30,
    marginBottom: 1,
  },
  usps2: {
    borderWidth: 1,
    margin: 30,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
});
