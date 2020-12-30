import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';



export default function App() {
  return (
 <View style={styles.container}>
    
    <Image
        style={styles.stretch}
        source={require('./profile.png')}
      />

    <Text></Text>
    <Text>Saurav Gehani</Text>
    <Text> </Text>
    <Text></Text>

    <Text>Fairfax, Virginia</Text>
    <Text></Text>
    <Text></Text>
  
    <Text>Information Technology</Text>
    <Text> </Text>
    <Text></Text>

    <Text>George Mason University</Text>
    <Text> </Text>



    <StatusBar style="auto" />
    
 </View>
  );


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  stretch: {
    width: 350,
    height: 350,
    position: 'relative'
  }
});


  

