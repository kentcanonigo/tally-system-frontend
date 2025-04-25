import { useState } from 'react';
import { View, Button, Text } from 'react-native';

// Load API URL from environment variables
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export default function ApiTester() {
  const [response, setResponse] = useState('');

  const sendRequest = async (method: 'GET' | 'POST' | 'PUT' | 'DELETE') => {
    try {
      const res = await fetch(`${API_URL}/test/`, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
      });

      const text = await res.text(); // Read response as text first
      console.log('Response:', text);

      const data = JSON.parse(text); // Try parsing JSON
      setResponse(`Response: ${data.request_method}`);
    } catch (error) {
      setResponse(`Error: ${error}`);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button title="GET Request" onPress={() => sendRequest('GET')} />
      <Button title="POST Request" onPress={() => sendRequest('POST')} />
      <Button title="PUT Request" onPress={() => sendRequest('PUT')} />
      <Button title="DELETE Request" onPress={() => sendRequest('DELETE')} />
      <Text>{response}</Text>
    </View>
  );
}
