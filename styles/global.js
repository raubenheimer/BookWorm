import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex : 1,
    },
    titleText: {
        fontFamily: 'source-bold',
        fontSize: 20,
        color: '#000',
        marginLeft: 10
    },

    bookDescription: {
        fontFamily: 'source-regular',
        marginHorizontal: 10,
        textAlign: 'justify',
        marginTop: 10,
        fontSize: 15,
    },
    author: {
        fontSize: 13,
        marginLeft: 10,
        fontFamily: 'source-regular',
        color: '#777'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input:{
        fontFamily: 'source-regular',
        padding:10,
        fontSize: 18,
        borderRadius: 6,
        color: '#000',
        marginTop: 10,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2  
    },
    required: {
        color: 'red',
        marginTop: 0,
        marginBottom: 4,
        paddingTop:0,
        borderColor: 'black',
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
