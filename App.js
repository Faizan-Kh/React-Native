import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
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
    flexDirection: 'row', // Horizontal layout
    alignItems: 'flex-start', // Align items vertically in the center
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },

    
  });
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
      <Text style={styles.headingText}>First Name</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#999" // Customize placeholder text color
        keyboardType="default" // Customize keyboard type (e.g., 'numeric', 'email-address')
        onChangeText={(text) => console.log(text)} // Handle text input changes
      />
      
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#999" // Customize placeholder text color
        keyboardType="default" // Customize keyboard type (e.g., 'numeric', 'email-address')
        onChangeText={(text) => console.log(text)} // Handle text input changes
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999" // Customize placeholder text color
        keyboardType="default" // Customize keyboard type (e.g., 'numeric', 'email-address')
        onChangeText={(text) => console.log(text)} // Handle text input changes
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999" // Customize placeholder text color
        keyboardType="default" // Customize keyboard type (e.g., 'numeric', 'email-address')
        onChangeText={(text) => console.log(text)} // Handle text input changes
      />
      <View style={styles.button}>
      <Button title='Click Me'></Button>
      </View>
    </View>
  );
}


