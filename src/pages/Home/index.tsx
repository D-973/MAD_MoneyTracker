import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Header} from '../../components/moleculs';
import {PP} from '../../assets/icon';
import {Gap, Button} from '../../components/atoms';

const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Header text="Money Tracker" style={styles.header} />
        <Text style={styles.subHeading}>Track Your Money</Text>
        <View style={styles.photoContainer}>
          <Image source={PP} style={styles.photo} />
        </View>
      </View>
      <>
        <View style={styles.container2}>
          <Text style={styles.text1}> Your Balance</Text>
          <Text style={styles.text2}> Rp.10.000.000</Text>
          <View style={styles.line} />
          <Gap height={20} />
          <View style={styles.contentWrapper}>
            <Text style={styles.text3}> Cash On Hand </Text>
            <Text style={styles.text4}> Rp. 4.000.000 </Text>
          </View>
          <Gap height={11} />
          <View style={styles.contentWrapper}>
            <Text style={styles.text3}> Cash On Bank </Text>
            <Text style={styles.text4}> Rp. 6.000.000 </Text>
          </View>
        </View>
      </>
      <View style={styles.container3}>
        <Text style={styles.text1}> Add Transaction</Text>
        <Gap height={8.81} />
        <Button
          text="Cash On Hand"
          onPress={() => navigation.navigate('COH')}
        />
        <Gap height={18.04} />
        <Button
          text="Cash On Bank"
          onPress={() => navigation.navigate('COB')}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text1}> WIP LOGO</Text>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container2: {
    flex: 2,
    backgroundColor: '#FFFFFF',
  },
  container3: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 25,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  photoContainer: {
    position: 'absolute',
    top: 32,
    right: 24,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  subHeading: {
    position: 'absolute',
    fontFamily: 'Poppins-Light',
    paddingTop: 63,
    paddingLeft: 24,
    fontWeight: '300',
    color: '#8D92A3',
  },
  text1: {
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 13,
    paddingLeft: 24,
    fontWeight: '500',
    color: '#000000',
  },
  text2: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: 24,
    paddingTop: 4,
    color: '#000000',
    textAlign: 'center',
  },
  text3: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 14,
    top: 20,
    left: 20,
    textAlign: 'center',
    marginLeft: 20,
    color: '#000000',
  },
  text4: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    fontSize: 14,
    top: 20,
    paddingLeft: 20,
    textAlign: 'center',
    marginLeft: 20,
    color: '#000000',
  },
  line: {
    width: 311,
    height: 1,
    top: 18,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    alignSelf: 'center',
  },
});
