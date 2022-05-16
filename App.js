import { TabRouter } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import Routes from './src/Navigation/Routes';


function App() {
  return (
   <View style={{ flex: 1}}>
     <Routes/>
   </View>
  );
}

export default App;

