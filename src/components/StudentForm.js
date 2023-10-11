import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const StudentForm = () => {
  const [formData, setFormData] = useState([]);
  const [inputData, setInputData] = useState({
    name: '',
    fatherName: '',
    dob: '',
    address: '',
    completeAddress: '',
    contactNumber: '',
    education: '',
    graduate: '',
    summary: '',
  });

  const handleInputChange = (field, value) => {
    setInputData({ ...inputData, [field]: value });
  };

  const handleSubmit = () => {
    setFormData([...formData, inputData]);
    setInputData({
      name: '',
      fatherName: '',
      dob: '',
      address: '',
      completeAddress: '',
      contactNumber: '',
      education: '',
      graduate: '',
      summary: '',
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text>Name: {item.name}</Text>
      <Text>Father Name: {item.fatherName}</Text>
      <Text>DOB: {item.dob}</Text>
      <Text>Address: {item.address}</Text>
      <Text>Complete Address: {item.completeAddress}</Text>
      <Text>Contact Number: {item.contactNumber}</Text>
      <Text>Education: {item.education}</Text>
      <Text>Graduate: {item.graduate}</Text>
      <Text>Brief Summary: {item.summary}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={inputData.name}
        onChangeText={(text) => handleInputChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Father Name"
        value={inputData.fatherName}
        onChangeText={(text) => handleInputChange('fatherName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        value={inputData.dob}
        onChangeText={(text) => handleInputChange('dob', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={inputData.address}
        onChangeText={(text) => handleInputChange('address', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Complete Address"
        value={inputData.completeAddress}
        onChangeText={(text) => handleInputChange('completeAddress', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={inputData.contactNumber}
        onChangeText={(text) => handleInputChange('contactNumber', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Education"
        value={inputData.education}
        onChangeText={(text) => handleInputChange('education', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Graduate"
        value={inputData.graduate}
        onChangeText={(text) => handleInputChange('graduate', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Brief Summary"
        value={inputData.summary}
        onChangeText={(text) => handleInputChange('summary', text)}
      />
      {/* Add other input fields similarly */}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>

      <FlatList
        data={formData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  submitButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});

export default StudentForm;
