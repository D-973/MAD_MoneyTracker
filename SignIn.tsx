import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/moleculs';
import {Button, Gap} from '../../components/atoms';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Router'; // Adjust path based on your file structure

type SignInNavigationProp = NativeStackNavigationProp
  RootStackParamList,
  'SignIn'
>;

type Props = {
  navigation: SignInNavigationProp;
};

const SignIn: React.FC<Props> = ({navigation}) => {
  const handleCreateAccount = () => {
    // Add navigation to sign up page when ready
    // navigation.navigate('SignUp');
  };

  const handleSignIn = () => {
    // Add your sign in logic here
    // navigation.replace('MainApp'); // Navigate to main app when signed in
  };

  return (
    <View style={styles.container}>
      <Header text="Sign In" />
      <View style={styles.contentWrapper}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput 
          label="Password" 
          placeholder="Type your password" 
          secureTextEntry // Add this for password field
        />
        <Gap height={24} />
        <Button text="Sign In" onPress={handleSignIn} />
        <Gap height={12} />
        <Button 
          text="Create New Account" 
          color="#8D92A3" 
          textColor="#FFFFFF" 
          onPress={handleCreateAccount}
        />
      </View>
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