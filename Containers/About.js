import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const About = () => {

    const [filterData, setFilerData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchPosts();
        return () => {

        }
    }, [])

    const fetchPosts = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/posts';
        fetch(apiURL).then((response) => response.json())
            .then((responseJson) => {
                setFilerData(responseJson);
                setMasterData(responseJson);
            }).catch((error) => {
                console.error(error);
            })
    }

    const searchFilter = (text) =>{
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase() : "" .toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilerData(newData);
            setSearch(text); 
        }
        else{
            setFilerData(masterData);
            setSearch(text);
        }
    }

    const ItemView = ({ item }) => {
        return (
            <Text style={styles.itemStyle}>
                {item.id}{'. '}{item.title.toUpperCase()}
            </Text>
        )
    }

    const ItemSeparatorView = () => {
        return (
            <View style={{ borderWidth: 1, margin: 5, borderColor: "red" }} />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TextInput
                style={styles.TextInputStyle}
                value={search}
                placeholder="Search Here"
                underlineColorAndroid="transparent"
                onChangeText={(text) => searchFilter(text)}
            />
            <View style={styles.container}>
                <FlatList data={filterData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    itemStyle: {
        padding: 10,
    },
    TextInputStyle: {
        height: 60,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: "#009688",
        backgroundColor: "white",
    },
});
