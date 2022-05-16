import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
// import { useNavigation } from '@react-navigation/native'
import navigationStrings from '../../constants/navigationStrings';
import HeaderComp from '../../Components/HeaderComp';



const Home = ({ navigation }) => {

  //use navigation hooks when we use functional navigation 
  //const navigation = useNavigation();
  //console.log("show properties of navigation ===> ", props)
  //console.log("show properties of navigation ===> ", navigation)

  //Navigation Methods
  const navigationBetweenScreens = () => {
    //navigate: perform back and forth between the screens
    navigation.navigate(navigationStrings.PROFILE, { learning: "passing data through navigation" })
    //replace: you can't go back to previous screen in stack/can't perform back and forth operation.
    // navigation.replace(navigationStrings.PROFILE,{learning: "passing data through navigation"})
    //push: moving forword into the screen or stack.
    //navigation.push(navigationStrings.PROFILE,{learning: "passing data through navigation"})
    //The popToTop action takes you back to the first screen in the stack
    //navigation.popToTop(navigationStrings.PROFILE,{learning: "passing data through navigation"})
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text>Home Screen {"\n"}</Text>
        </View>
        <Button title='Go To profile'
          onPress={navigationBetweenScreens}
        />
      </SafeAreaView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    padding: 10
  }
}) 