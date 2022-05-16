import React from 'react'
import navigationStrings from '../constants/navigationStrings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
    Home,
    Profile,
    Explore
} from '../Screens';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
            <Tab.Navigator 

            //screenOptions={{ presentation: 'card', headerShown: false}}
            initialRouteName={navigationStrings.HOME}
            >
                <Tab.Screen name={navigationStrings.HOME} component={Home} />
                <Tab.Screen name={navigationStrings.PROFILE} component={Profile} />
                <Tab.Screen name={navigationStrings.EXPLORE} component={Explore} />
            </Tab.Navigator>  
    )
}

export default TabRoutes;

//Bottom tab navigation