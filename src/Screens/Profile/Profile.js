import { StyleSheet, Text, View } from 'react-native'
import React, {Component} from 'react'

const Profile = ({route, navigation}) => {
   
    const { learning } = route.params
    console.log("props =>" , learning)
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{learning}</Text>
            <Text>profile</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})