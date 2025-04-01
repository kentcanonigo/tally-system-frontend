import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Slot } from 'expo-router';

const HomeTabs = createMaterialTopTabNavigator();

export default function HomeTabLayout() {
  return (
    <HomeTabs.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#222' },
        tabBarIndicatorStyle: { backgroundColor: 'white' },
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
      }}
    >
      <HomeTabs.Screen name="index" options={{ title: 'Overview' }} children={() => <Slot />} />
      <HomeTabs.Screen name="details" options={{ title: 'Details' }} children={() => <Slot />} />
    </HomeTabs.Navigator>
  );
}
