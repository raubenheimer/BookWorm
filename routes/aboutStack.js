import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from  '../shared/header';

const screens = {
    Home: {
        screen: About,
        navigationOptions:  ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} title='About'/>
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerStyle: { backgroundColor: '#fff'}
    }
});

export default AboutStack;