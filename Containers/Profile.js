import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const Profile = (props) => {
  // console.warn("data",props.route.params);
  let data = props.route.params;
  return (
    <View style={{ flex: 1 }}>
      <Text>Profile Screen</Text>
      <FlatList data={data} renderItem={({ item }) =>
        <View style={styles.border}>
          <Text style={styles.title}>{item.name}</Text>
          <Text>{item.email}</Text>
          <Text>{item.mobile}</Text>
        </View>
      } />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  border: {
    borderWidth: 2,
    borderColor:"skyblue",
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 6,
  },
  title:{
    fontSize:40
  }

});
