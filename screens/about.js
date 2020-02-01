import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';


export default function About({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>
                    About Book  Worm
                </Text>
                <Text style={globalStyles.bookDescription}>
                    Book Worm is a mock book reviewing app. It was made using react-native. It is based on a web toturial by the 
                    <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.youtube.com/watch?v=ur6I5m2nTvk&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=1')}>
   {''} net ninja.
</Text>
                </Text>
            </Card>
        </View>
    )
}

