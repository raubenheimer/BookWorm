import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';


//Function that creates the Drawer Navigator and the Object that specifies the layout
const RootDrawerNavigator = createDrawerNavigator({
    Main: {
        screen: HomeStack,
        navigationOptions: {
            title: 'Home'
        }
    },
    About: {
        screen: AboutStack,
        navigationOptions: {
            title: 'About'
        }
    }
})

//Function that wraps the Drawer Navigator in a App Container
export default createAppContainer(RootDrawerNavigator)
