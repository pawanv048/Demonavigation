import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'

const Explore = ({navigation}) => {

  const navigationBetweenScreens = () => {
    //pop: action takes you back to a previous screen in the stack
    //count: allows you to specify how many screens to pop back by. ex: pop(2)
   // navigation.pop(2)
   //navigation.popToTop() 
   navigation.navigate(navigationStrings.HOME)
}
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title='Go To profile'
          onPress={navigationBetweenScreens}
      />
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({})