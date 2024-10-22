import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Button from './components/button';
import Input from './components/input';
import Title from './components/Title';
const ex6 = () => {
  //state
  const [title, setTitle] = useState('Registration');
  //untuk suatu state yang akan diisi best to just leave it empty
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pn, setPN] = useState('');
  const [secure, setSecure] = useState(true);
  const handleClick = () => {
    // title = 'Selamat Datang';
    //setTitle('Selamat Datang');
    const data = {
      userName: userName,
      password: password,
      email: email,
      address: address,
      pn: pn,
    };
    console.log(data);
  };
  const handleUserName = e => {
    setUserName(e);
  };
  const handlePassword = e => {
    setPassword(e);
  };
  const handleEmail = e => {
    setEmail(e);
  };
  const handleAddress = e => {
    setAddress(e);
  };
  const handlePN = e => {
    setPN(e);
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
        secureTextEntry={secure}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={handleEmail}
      />
      <Input
        label="Address"
        placeholder="Masukan Alamat anda"
        onChangeText={handleAddress}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan nomor telepon anda"
        onChangeText={handlePN}
        inputType="numeric"
      />
      <Button label="Sign In" color="#bd43bf" onPress={handleClick} />
    </View>
  );
};

export default ex6;

const styles = StyleSheet.create({});
