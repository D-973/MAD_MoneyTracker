import {StyleSheet, View} from 'react-native';
import React from 'react';
import Button from './components/button';
import Input from './components/input';
import Title from './components/Title';
const ex5 = () => {
  //state
  const title = 'Welcome';
  return (
    //in the main file, the best practice is just to call the components
    <View>
      <Title label={title} />
      <Input label="Username" placeholder="Masukkan username Anda" />
      <Input label="Password" placeholder="Masukkan password Anda" />
      <Button label="Sign In by Google" color="red" />
      <Button label="Sign In by Facebook" color="blue" />
      <Button label="Sign In by Apple" color="black" />
    </View>
  );
};

export default ex5;

const styles = StyleSheet.create({});
