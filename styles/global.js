import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex : 1,
    },
    titleText: {
        fontFamily: 'source-bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }
});

export const images = {
    ratings: {
        '1' : require('../assets/rating1.png'),
        '2' : require('../assets/rating2.png'),
        '3' : require('../assets/rating3.png'),
        '4' : require('../assets/rating4.png'),
        '5' : require('../assets/rating5.png')
    }
}