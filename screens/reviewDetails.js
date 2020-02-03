import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

//Review Details Screen layout
export default function ReviewDetails({ navigation }) {
    const rating = navigation.getParam('rating')
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>
                    {navigation.getParam('title')}
                </Text>
                <Text style={globalStyles.author}>
                    Author: {navigation.getParam('author')}
                </Text>
                <Text style={globalStyles.bookDescription}>
                    {navigation.getParam('body')}
                </Text>
                <View style={styles.rating}>
                    <Text style={styles.bookworm}>Book Worm rating: </Text>
                    <Image source={images.ratings[rating]} style={styles.ratingimg} />
                </View>
            </Card>
        </View>
    )
}

//Local styles
const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        paddingTop: 6,
        marginTop: 7,
        borderTopWidth: 2,
        borderTopColor: '#eee'
    },

    ratingimg: {
        position: 'absolute',
        left: 80,
        height: 25,
        resizeMode: 'center',
        paddingLeft: 0,
        marginTop: 5
    },
    bookworm: {
        marginLeft: 10,
        fontFamily: 'source-bold',
        fontSize: 16
    }
})