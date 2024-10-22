import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Button from './components/button';
import Input from './components/input';
import Title from './components/Title';

//debugging
//https://reactnative.dev/docs/debugging?js-debugger=hermes
const ex6 = () => {
  //state
  const [title, setTitle] = useState('Welcome');
  //untuk suatu state yang akan diisi best to just leave it empty
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const handleClick = () => {
    // title = 'Selamat Datang';
    setTitle('Selamat Datang');
    const data = {
      userName: userName,
      password: password,
    };
    console.log(data);
  };
  const handleUserName = e => {
    setUserName(e);
  };
  const handlePassword = e => {
    setPassword(e);
  };
  const handleSecure = () => {
    setSecure(prevSecure => !prevSecure);
  };
  return (
    //in the main file, the best practice is just to call the components
    <View style={styles.container}>
      <Title title={title} />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={handleUserName}
      />
      <Input
        label="Password"
        placeholder="Masukan password anda"
        onChangeText={handlePassword}
        // to hide the text
        secureTextEntry={secure}
      />
      <Button label="Sign In" onPress={handleClick} />
      {/* no calling handleclick, that's why it'red */}
      <Button label="Register" color="green" />
      <Button
        label={secure ? 'Show' : 'Hide'}
        color="blue"
        onPress={handleSecure}
      />
    </View>
  );
};

export default ex6;

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
