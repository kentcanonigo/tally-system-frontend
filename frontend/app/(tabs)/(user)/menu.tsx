import { Text, View, StyleSheet, Pressable,Button } from 'react-native';
import { Link, router } from 'expo-router';
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
 
     <Button title="Back to Home" onPress={() => router.replace('/')} />
    </View>
  );
}
