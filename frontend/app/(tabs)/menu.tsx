import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import ApiTester from './apitester';

export default function Menu() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>You are in the menu page</Text>
    </View>
  );
}
