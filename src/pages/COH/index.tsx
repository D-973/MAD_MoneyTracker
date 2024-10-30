import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput, HWArrow, TC} from '../../components/moleculs';
import {Gap, Button, SubTitle} from '../../components/atoms';

const COH = ({navigation}) => {
  return (
    <>
      <View>
        <HWArrow text="Cash On Hand" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.container}>
        <Gap height={24} />
        <TextInput label="Description" placeholder="Add your description" />
        <Gap height={17} />
        <TextInput label="Type" placeholder="Debit/Credit" />
        <Gap height={22} />
        <Button text="Save" />
      </View>
      <View style={styles.container}>
        <SubTitle text="Last 3 Transactions" />
        <Gap height={10} />
        <TC date="17 April 2020" item="Water,Food" cash="- Rp.300.000" />
        <Gap height={10} />
        <TC date="18 April 2020" item="Office supplies" cash="- Rp.300.000" />
        <Gap height={10} />
        <TC
          date="19 April 2020"
          item="Top Up"
          cash="+ Rp.300.000"
          color="#1ABC9C"
        />
      </View>
    </>
  );
};

export default COH;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    marginTop: 24,
    paddingTop: 20,
  },
});
