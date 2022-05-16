import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const HeaderComp = ({
    goBack = () => { },
    text,
    //navigation
}) => {
    const navigation = useNavigation()

    return (

        <View>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Text>GoBack</Text>
            </TouchableOpacity>
            <Text>{text}</Text>
        </View>
    )
}

export default HeaderComp

const styles = StyleSheet.create({})