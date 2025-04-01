import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import ApiTester from './apitester';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Hello world!</Text>

      <Link href="/apitester" style={{ marginHorizontal: 'auto' }} asChild>
        <Pressable style={styles.button}>
          <Text>API Tester</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(7, 176, 255, 0.75)',
    justifyContent: 'center',
    padding: 6,
  },
  buttonText: {
    color: '#007AFF', // iOS-style blue link
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
});
