import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';

const hehe = () => {
  //component is a function that returns jsx
  return (
    <View>
      <Text style={styles.title}> React Native Project </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* //this is jsx */}
        <TextInput style={styles.input} placeholder="Masukkan email: " />
        <Image
          style={styles.Simages}
          source={require('./assets/download.jpeg')}
        />
        <Image
          style={styles.Simages}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
        {/* <View style={backgroundColor: 'blue'} /> */}
        {/* <View style={(styles.blueBox, styles.greenBox, styles.redBox)} /> */}
        <View style={styles.redBox} />
        <View style={styles.orangeBox} />
        <View style={styles.yellowBox} />
        <View style={styles.greenBox} />
        <View style={styles.blueBox} />
        <View style={styles.grayBox} />
        <View style={styles.purpleBox} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    textAlign: 'center',
    padding: 10,
    borderRadius: 10, //this makes that curve in the border much important
    fontSize: 20,
    fontFamily: 'arial',
  },
  Simages: {
    alignSelf: 'center',
    padding: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: '900', //bolndness
    textAlign: 'center',
    borderColor: 'Black',
    borderWidth: 1,
    padding: 40,
    margin: 20,
    //paddingBottom :10,
  },
  blueBox: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    marginVertical: 10,
    alignSelf: 'center',
  },
  redBox: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    marginVertical: 10,
    alignSelf: 'center',
  },
  greenBox: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    marginVertical: 10,
    alignSelf: 'center',
  },
  yellowBox: {
    backgroundColor: 'yellow',
    width: 100,
    height: 100,
    marginVertical: 10,
    alignSelf: 'center',
  },
  orangeBox: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    marginVertical: 10,
    alignSelf: 'center',
  },
  grayBox: {
    backgroundColor: 'gray',
    width: 100,
    height: 100,
    marginVertical: 10,
    alignSelf: 'center',
  },
  purpleBox: {
    backgroundColor: 'purple',
    width: 100,
    height: 100,
    marginVertical: 10,
    alignSelf: 'center',
  },
});

export default hehe;
