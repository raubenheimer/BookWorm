import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import { globalStyles } from '../styles/global';




const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} title='BookWorm'/>
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerStyle: { backgroundColor: '#fff' },
        headerTitleStyle: {
            fontFamily: 'source-bold',
            fontSize: 20,
            color: '#000',
            letterSpacing: 1,
        }
    }
});

export default HomeStack
