import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import AboutStack from './aboutStack';
import HomeStack from  './homeStack';

const RootDrawerNavigator = createDrawerNavigator({
    Main: {
        screen: HomeStack,
        navigationOptions:  {
            title: 'Home'
        }
    },
    About: {
        screen: AboutStack,
        navigationOptions:  {
            title: 'About'
        }
    }
})

export default createAppContainer(RootDrawerNavigator)
