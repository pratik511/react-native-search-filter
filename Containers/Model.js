/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Model = () => {
    const [show, setShow] = useState(false);
    return (
        <View style={{flex:1, marginTop:0}}>
            <Text style={{fontSize:40}}>Model</Text>
            <Button title='show model' onPress={() => { setShow(true) }} />
            <Modal visible={show} transparent={true}>
                <View style={{backgroundColor:'#000000aa' ,flex:1}}>
                    <View style={{margin:50,backgroundColor:'white',flex:1,borderRadius:10,padding:40}}>
                    <FontAwesome5 name={'git'} size={100} />
                        <Text style={{fontSize:70}}>Model Text</Text>
                        <Button title='hide model' onPress={() => { setShow(false) }} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Model;

const styles = StyleSheet.create({});
