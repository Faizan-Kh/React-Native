import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Form = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: 300, // Customize the width of the TextInput
      height: 40, // Customize the height of the TextInput
      borderColor: '#ccc', // Customize the border color
      borderWidth: 1, // Customize the border width
      borderRadius: 5, // Customize the border radius
      paddingLeft: 10, // Customize the left padding
      paddingRight: 10, // Customize the right padding
      fontSize: 16, // Customize the font size
      color: '#333', // Customize the text color
    },

   button: {
    paddingTop: 15
   },
   heading: {
    display: 'flex',
    alignItems: 'flex-start', 
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    
  },
});

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
      <Text style={styles.headingText}>First</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#999" // Customize placeholder text color
        keyboardType="default" // Customize keyboard type (e.g., 'numeric', 'email-address')
        onChangeText={(text) => console.log(text)} // Handle text input changes
      />
       <View style={styles.heading}>
      <Text style={styles.headingText}>Last Name</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#999" // Customize placeholder text color
        keyboardType="default" // Customize keyboard type (e.g., 'numeric', 'email-address')
        onChangeText={(text) => console.log(text)} // Handle text input changes
      />
       <View style={styles.heading}>
      <Text style={styles.headingText}>Email</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999" // Customize placeholder text color
        keyboardType="default" // Customize keyboard type (e.g., 'numeric', 'email-address')
        onChangeText={(text) => console.log(text)} // Handle text input changes
      />
       <View style={styles.heading}>
      <Text style={styles.headingText}>Password</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999" // Customize placeholder text color
        keyboardType="default" // Customize keyboard type (e.g., 'numeric', 'email-address')
        onChangeText={(text) => console.log(text)} // Handle text input changes
      />
      <View style={styles.button}>
      <Button title='Submit'></Button>
      </View>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({})