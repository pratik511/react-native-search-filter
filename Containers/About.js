/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Platform, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const About = () => {
    const [filterData, setFilerData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [search, setSearch] = useState('');
    const [loder, setLoder] = useState(true);

    useEffect(() => {
        fetchPosts();
        // return () => {
        //     setLoder(false);
        //  };
        setTimeout(() => {
            setLoder(false);
        }, 1000);
    }, []);

    const fetchPosts = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/posts';
        fetch(apiURL)
            .then(response => response.json())
            .then(responseJson => {
                setFilerData(responseJson);
                setMasterData(responseJson);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const searchFilter = text => {
        if (text) {
            const newData = masterData.filter(item => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilerData(newData);
            setSearch(text);
        } else {
            setFilerData(masterData);
            setSearch(text);
        }
    };

    const ItemView = ({ item }) => {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.GridViewBlockStyle}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <Text style={{paddingLeft:7 ,paddingRight:7 ,paddingTop:5 }}>
                        {item.id}
                        {'. '}
                        {item.title.toUpperCase()}
                    </Text>
                </View>
            </View>
        );
    };

    //   const ItemSeparatorView = () => {
    //     return <View style={{ margin: 2}} />;
    //   };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TextInput
                style={styles.TextInputStyle}
                value={search}
                placeholder="Search Here"
                underlineColorAndroid="transparent"
                onChangeText={text => searchFilter(text)}
            />
            <View style={styles.MainContainer}>
                {loder ? <ActivityIndicator color={"blue"} size={"large"} /> : <FlatList
                    data={filterData}
                    keyExtractor={(item, index) => index.toString()}
                    //   ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                    numColumns={2}
                />}
            </View>
        </SafeAreaView>
    );
};

export default About;

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 5,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    },
    tinyLogo: {
        width: 150,
        height: 120,
        borderRadius:3,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    GridViewBlockStyle: {
        borderWidth: 2,
        // justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        height: 210,
        margin: 3,
        padding: 3,
        backgroundColor: '#00BCD4',
        borderRadius:4,
    },
    container: {
        backgroundColor: 'white',
    },
    flat: {
        borderWidth: 2,
        borderColor: 'skyblue',
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 1,
        marginHorizontal: 1,
    },
    itemStyle: {
        padding: 10,
    },
    TextInputStyle: {
        height: 60,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        fontSize: 18,
        borderColor: '#009688',
        backgroundColor: 'white',
        borderRadius: 20,
    },
});
