import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/moleculs';
import {Button, Gap} from '../../components/atoms';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header text="Sign In" />
      <ScrollView style={styles.contentWrapper}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Sign In" onPress={() => navigation.navigate('Home')} />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        />
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
export default SignIn;
