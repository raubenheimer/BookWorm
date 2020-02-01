import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from  '../shared/header';
import { globalStyles } from '../styles/global';



const screens = {
    Home: {
        screen: Home,
        navigationOptions:  ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='BookWorm'/>
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions:  {
            title: 'Review Details'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerStyle: { backgroundColor: '#fff'},
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            color: '#333',
            letterSpacing: 1,
        }
    }
});

export default HomeStack