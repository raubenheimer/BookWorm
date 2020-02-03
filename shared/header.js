import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

    //Function that opens the Drawer
    const openMenu = () => {
        navigation.openDrawer();
    }

    //Header layout(Home and About Header)
    return (
        <ImageBackground source={require('../assets/bckgrnd.png')} style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/book_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    );
}

//Local Styles
const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        width: '100%',
        height: 88,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 10,
        bottom: 13

    },
    headerImage: {
        width: 28,
        height: 28,
        marginRight: 10,
        marginLeft: 0
    },
    headerTitle: {
        marginTop: 50,
        flexDirection: 'row',
    }
});