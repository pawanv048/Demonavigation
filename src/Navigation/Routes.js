import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
    Home,
    Profile,
    Explore
} from '../Screens';
import imagePath from '../constants/imagePath';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const Routes = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator 
//             screenOptions={{ presentation: 'card', headerShown: false}}
//             initialRouteName={navigationStrings.HOME}
//             >
//                 <Stack.Screen name={navigationStrings.HOME} component={Home} options={{title: "FLIPKART"}}/>
//                 <Stack.Screen name={navigationStrings.PROFILE} component={Profile} />
//                 <Stack.Screen name={navigationStrings.EXPLORE} component={Explore} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

// export default Routes;

//To avoid navigation error while screens naming change file name of screens use 
//navigation strings
//presentation : card|model, presentation style of the screen

//**********For Creating Bottom stack navigator********//

const Routes = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
            screenOptions={{ presentation: 'card', 
            headerShown: true,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'blue',
            tabBarShowLabel: false,
            tabBarStyle: {
                // position: 'absolute',
                // //backgroundColor: 'orange'
                // backgroundColor: 'transparent'

                //customtabBar
                position: 'absolute',
                backgroundColor: 'grey',
                borderRadius: 40,
                marginBottom: 20,
                paddingTop: 20,
                marginHorizontal: 20

            }

        
        }}
            initialRouteName={navigationStrings.HOME}

            >
                <Tab.Screen name={navigationStrings.HOME} component={Home}
                 options={{title: "FLIPKART",
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image source={imagePath.more}
                                style={{ width: 20, height: 20,
                                    tintColor: focused ? 'red':'black'
                                }}
                            />
                        )
                    }
                
                }}
                
                 />
                <Tab.Screen name={navigationStrings.PROFILE} component={Profile} 
                
                    options={{
                        tabBarIcon: ({focused}) => {
                            return (
                                <Image source={imagePath.send}
                                    style={{ width: 20, height: 20,
                                        tintColor: focused ? 'red':'black' 
                                    }}
                                />
                            )
                        }
                    }}
                />
                <Tab.Screen name={navigationStrings.EXPLORE} component={Explore} 
                    options={{
                        tabBarIcon: ({focused}) => {
                            return (
                                <Image source={imagePath.user}
                                    style={{ width: 20, height: 20,
                                        tintColor: focused ? 'red':'black' 
                                    
                                    }}
                                    
                                />
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes;


