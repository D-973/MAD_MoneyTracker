import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Title from './components/Title';

const Ex7 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Title title="Users List" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map(({id, username, name, email, address, phone}) => (
          <View key={id} style={styles.userBox}>
            <Text style={styles.info}>
              <Text style={styles.label}>Name: </Text>
              {name}
            </Text>
            <Text style={styles.info}>
              <Text style={styles.label}>Username: </Text>
              {username}
            </Text>
            <Text style={styles.info}>
              <Text style={styles.label}>Email: </Text>
              {email}
            </Text>
            <Text style={styles.info}>
              <Text style={styles.label}>Phone: </Text>
              {phone}
            </Text>
            <Text style={styles.info}>
              <Text style={styles.label}>Address: </Text>
              {address.street}, {address.city}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Ex7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  userBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  info: {
    fontFamily: 'Calibri',
    fontSize: 16,
    color: 'black',
    marginBottom: 3,
  },
  label: {
    fontWeight: 'bold',
  },
});
