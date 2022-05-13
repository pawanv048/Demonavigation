import { StyleSheet, Text, View } from 'react-native'
import React, {Component} from 'react'

const Profile = ({ route, navigation }) => {
    //console.log("profile properties==>", props)
    //const { navigation, route } = props
    //console.log("show props", route.params)
    //const { title } = route.params.title
    console.log("routes =>" ,route)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Text>{title}</Text> */}
            <Text>profile</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})