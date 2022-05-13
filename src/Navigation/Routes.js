import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import { 
    Home,
    Profile,
    Explore
} from '../Screens';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={navigationStrings.HOME}>
                <Stack.Screen name={navigationStrings.HOME} component={Home} />
                <Stack.Screen name={navigationStrings.PROFILE} component={Profile} />
                <Stack.Screen name={navigationStrings.EXPLORE} component={Explore} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes

//To avoid navigation error while screens naming change file name of screens use 
//navigation strings