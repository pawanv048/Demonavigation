import { StyleSheet, Text, View, Button } from 'react-native'
import React, {Component} from 'react'
// import { useNavigation } from '@react-navigation/native'
import navigationStrings from '../../constants/navigationStrings'


const Home = ({ navigation }) => {

  //use navigation hooks when we use functional navigation 
 //const navigation = useNavigation();
 //console.log("show properties of navigation ===> ", props)
 //console.log("show properties of navigation ===> ", navigation)

  const navigationBetweenScreens = () => {
    navigation.navigate(), { learning: 'Learning about navigation strings' }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>home</Text>
      <Button title='Go To profile'
          onPress={navigationBetweenScreens}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({}) 