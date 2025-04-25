import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function AuthLayout() {
  const router = useRouter();
  return (
    <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 24 }}>Select Role</Text>
          <Button title="Admin" onPress={() => router.replace('/(tabs)/(admin)/admin-dashboard')} />
          <Button title="User" onPress={() => router.replace('/(tabs)/(user)/(tally)/dc')} />
        </View>
  );
}