import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
       <Stack.Screen name="(auth)" options={{ title: 'Auth', headerShown: false }} />
    </Stack>
  );
}