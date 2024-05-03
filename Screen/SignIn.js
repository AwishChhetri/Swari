import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from "axios";
import {useNavigation} from '@react-navigation/native'
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation=useNavigation()
  const onSubmit = async () => {
    console.log("this is the server:", email, password);

    try {
      const result = await axios.post("http://192.168.231.31:3000/login", { email, password });
      console.log("Response:", result.data); // assuming the server responds with some data
      console.log("Sent");
      navigation('/home')
    } catch (error) {
      console.error("Error:", error);
      console.log("Not working");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        type="email" // "type" prop is not valid in React Native TextInput
        placeholder='enter your email'
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder='enter your password'
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        secureTextEntry // Hides the input characters for password security
      />
      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '70%',
  },
});

export default SignIn;
