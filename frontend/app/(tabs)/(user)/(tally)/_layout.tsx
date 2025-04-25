import { Tabs } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TallyTabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        tabBarActiveBackgroundColor: 'rgba(255, 255, 255, 0.1)',
        tabBarLabelStyle: { fontFamily: 'Inter', fontSize: 16, fontWeight: 'bold', justifyContent: 'center' },
        tabBarStyle: { backgroundColor: '#D32976' },
        tabBarPosition: 'top',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="dc"
        options={{
          title: 'Tally DC',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="clipboard-list" color={color} />,
        }}
      />
      <Tabs.Screen
        name="bp"
        options={{
          title: 'Tally BP',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="scale-balance" color={color} />,
        }}
      />
    </Tabs>
  );
}
