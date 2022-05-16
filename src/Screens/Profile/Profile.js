import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import navigationStrings from '../../constants/navigationStrings';
import HeaderComp from '../../Components/HeaderComp';


const Profile = ({ route, navigation }) => {

    const navigationBetweenScreens = () => {
        navigation.navigate(navigationStrings.EXPLORE)
    }

    const { learning } = route.params
    console.log("props =>", learning)

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
                <View>
                    <HeaderComp goBack={() => navigation.goBack()}
                    //passing navigation through custom header component
                        navigation = {navigation}
                    />
                </View>

                <Text>Profile Screen</Text>
                <Text> params data: {learning}</Text>
                <Button title='Go To Explore'
                    onPress={navigationBetweenScreens}
                />

                {/* Go Back with button using method goback */}
                <Button title='Go To goback'
                    onPress={() => navigation.goBack()}
                />
            </SafeAreaView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})