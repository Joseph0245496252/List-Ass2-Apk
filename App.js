import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ContactsScreen from './ContactsScreen';
import Contact from './components/Contact'



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      emil:"",
      password:""
      
       
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ContactsScreen />
        <Contact />

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
});


export default App; 
