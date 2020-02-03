import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';

//Object that specifies the About Stack Navigator layout
const screens = {
    Home: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} title='About' />
            }
        }
    }
}

//Function that creates the About Stack Navigator
const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerStyle: { backgroundColor: '#fff' }
    }
});

export default AboutStack;