import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';


export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        { title: 'Catch 22', rating: 5, body: 'helo', key: '1' },
        { title: 'The Old Man and the Sea', rating: 4, body: 'helo', key: '2' },
        { title: '12 Rules for Life', rating: 3, body: 'helo', key: '3' },
    ])
    const pressHandler = () => {
        navigation.navigate('ReviewDetails')
    }

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
