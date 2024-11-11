import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {TextInput, HWArrow, AddPhoto} from '../../components/moleculs';
import {Button, Gap} from '../../components/atoms';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('SignIn'); // Pindahkan navigasi ke sini
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.container}>
      <HWArrow text="Sign Up" onPress={() => navigation.goBack()} />
      <ScrollView style={styles.contentWrapper}>
        <AddPhoto text="Add Photo" />
        <Gap height={16} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          onChangeText={e => setEmail(e)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          onChangeText={e => setPassword(e)}
        />
        <Gap height={24} />
        <Button text="Continue" onPress={createUser} />
        {/* Ubah onPress ke createUser */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 25,
  },
});

export default SignUp;
