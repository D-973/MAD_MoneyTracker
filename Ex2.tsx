import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';

const Ex2 = () => {
  //component is a function that returns jsx
  return (
    <View>
      <Text style={styles.title}> Curriculum Vitae </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.inputName}> Dhea Nanlohy </Text>
        <Image style={styles.Simages} source={require('./assets/pic.png')} />
        <Text style={styles.isi}> Umur : 20 tahun </Text>
        <Text style={styles.isi}> Status : Single </Text>
        <Text style={styles.isi}> Pendidikan Terakhir: SMA</Text>
        <Text style={styles.isi}> Hobi : Gaming </Text>
        <View style={styles.pinkBox} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  isi: {
    color: '#ed4ad7',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10,
    fontWeight: '500',
  },
  inputName: {
    margin: 10,
    textAlign: 'center',
    padding: 10,
    borderRadius: 10, //this makes that curve in the border much important
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  },
  Simages: {
    alignSelf: 'center',
    padding: 40,
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 30,
    fontWeight: '900', //bolndness
    color: '#78116a',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 3,
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
  pinkBox: {
    backgroundColor: 'pink',
    width: 500,
    height: 1000,
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

export default Ex2;
