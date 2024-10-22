import {StyleSheet, Text, View, Image} from 'react-native';
//karena kita menggunakan function pake ini
import React, {useState, useEffect} from 'react';
//kalau kelas pakai component didMount
import axios from 'axios';
import Title from './components/Title';
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?page=2')
      //kalau sebelumnya pakai console log untuk console
      //.then(res => console.log(res.data))
      .then(res => setUsers(res.data.data)) //data.data jadi array
      .catch(error => console.log(error));
  }, []);
  return (
    <View style={styles.container}>
      <Title title={'Home'} />
      {/* style itu di text */}
      {/* {users.map(item => {
        // return <Text style={styles.font}> {item.email}</Text>;
      })} */}
      {users.map(({id, first_name, avatar}) => {
        return (
          <>
            <Text style={styles.font}> {`${id} ${first_name}`}</Text>
            <Image
              style={styles.Simages}
              source={{
                uri: `${avatar}`,
              }}
            />
          </>
        );
      })}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    color: 'white',
  },
  font: {
    fontFamily: 'Calibri',
    fontWeight: '500',
    color: 'black',
    marginTop: 5,
    marginLeft: 30,
    fontSize: 25,
  },
  Simages: {
    alignSelf: 'center',
    padding: 40,
    width: 200,
    height: 200,
  },
});
