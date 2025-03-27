import { Text, View } from 'react-native';
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
      <ApiTester />
    </View>
  );
}
