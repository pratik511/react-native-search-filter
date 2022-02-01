/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, StyleSheet, Text, View ,Platform} from 'react-native';

const Profile = props => {
  // console.warn("data",props.route.params);
  let data = props.route.params;
  return (
    <View style={styles.MainContainer}>
      <Text>Profile Screen</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.GridViewBlockStyle}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.mobile}</Text>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  MainContainer :{
    justifyContent: 'center',
    flex:1,
    margin: 10,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
  },
  GridViewBlockStyle: {
     justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    height: 100,
    margin: 5,
    backgroundColor: '#00BCD4',
  },
  border: {
    borderWidth: 2,
    borderColor: 'skyblue',
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 1,
    marginHorizontal:1,
  },
  title: {
    fontSize: 40,
  },
});
