import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const Title = ({title}) => {
  return (
    //in the main file, the best practice is just to call the components
    <View>
      <Text style={styles.welcome}> {title} </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 42,
    fontWeight: '900',
    color: 'black',
    margin: 20,
    marginLeft: 25,
  },
});
