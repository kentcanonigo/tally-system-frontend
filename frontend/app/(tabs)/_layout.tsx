import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useFonts } from 'expo-font';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabLayout() {
  const [loaded, error] = useFonts({
    Inter: require('@/./assets/fonts/Inter-VariableFont.ttf'),
  });

  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.dark.tint,
        tabBarInactiveTintColor: Colors.dark.tint,
        tabBarActiveBackgroundColor: 'rgba(255, 255, 255, 0.1)',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarItemStyle: { justifyContent: 'center' },
        tabBarLabelStyle: { fontFamily: 'Inter', fontSize: 16, fontWeight: 'bold', justifyContent: 'center' },
        tabBarPosition: 'top',
        tabBarStyle: {
          justifyContent: 'flex-start',
          backgroundColor: '#D32976',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tally',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="calculate" color={color} />,
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: 'Products',
        }}
      />
      <Tabs.Screen
        name="allocation"
        options={{
          title: 'Allocation',
        }}
      />
      <Tabs.Screen
        name="tally-sheet"
        options={{
          title: 'Tally Sheet',
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
        }}
      />
      <Tabs.Screen
        name="apitester"
        options={{
          title: 'API Tester',
        }}
      />
    </Tabs>
  );
}
