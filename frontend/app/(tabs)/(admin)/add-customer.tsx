import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import ApiTester from './apitester';

export default function AddCustomer() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>You are in the Add Customer Page</Text>
    </View>
  );
}
