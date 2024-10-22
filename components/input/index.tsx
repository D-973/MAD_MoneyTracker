import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardTypeOptions,
} from 'react-native';

interface InputProps {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  inputType?: KeyboardTypeOptions;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  onChangeText,
  inputType = 'default',
  value,
  ...rest
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={inputType}
        value={value}
        {...rest}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    marginHorizontal: 30,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    borderColor: 'gray',
  },
});
